import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  CalendarDays,
  ChevronRight,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  School,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

const heroImage = "/school-hero.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const announcements = [
  {
    title: "PTM Notice",
    text: "PTM for Classes I to X on 25th May 2025 at 10:00 AM.",
    date: "Latest",
  },
  {
    title: "Admissions Open",
    text: "Admission enquiry for the new academic session is now welcome at the school office.",
    date: "Admission",
  },
  {
    title: "School Events",
    text: "Sports, cultural programmes, and student achievements will be updated here.",
    date: "Update",
  },
];

const gallery = [
  "Campus Life",
  "Classroom Learning",
  "Sports Day",
  "Cultural Events",
  "Science Activities",
  "Student Achievements",
];

function FacebookIcon({ className = "", size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 8.5H16.1V5.15C15.74 5.1 14.5 5 13.05 5C10.02 5 7.95 6.86 7.95 10.27V13.25H4.6V17H7.95V24H12.05V17H15.25L15.85 13.25H12.05V10.65C12.05 9.57 12.35 8.5 14 8.5Z" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon({ className = "", size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21.58 7.19C21.35 6.31 20.66 5.62 19.79 5.39C18.2 4.96 12 4.96 12 4.96C12 4.96 5.8 4.96 4.21 5.39C3.34 5.62 2.65 6.31 2.42 7.19C2 8.79 2 12.12 2 12.12C2 12.12 2 15.45 2.42 17.05C2.65 17.93 3.34 18.59 4.21 18.83C5.8 19.26 12 19.26 12 19.26C12 19.26 18.2 19.26 19.79 18.83C20.66 18.59 21.35 17.93 21.58 17.05C22 15.45 22 12.12 22 12.12C22 12.12 22 8.79 21.58 7.19Z" fill="currentColor" />
      <path d="M10 15.15L15.18 12.12L10 9.09V15.15Z" fill="white" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#003366]">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

function runBasicChecks() {
  const requiredSections = ["Home", "About Us", "Admissions", "Gallery", "Contact Us"];
  const hasAllSections = requiredSections.every((label) => navItems.some((item) => item.label === label));
  const hasAnnouncements = announcements.length >= 3;
  const hasGalleryItems = gallery.length >= 6;
  const hasHeroImage = typeof heroImage === "string" && heroImage.length > 0;
  const hasSocialIcons = Boolean(FacebookIcon) && Boolean(YoutubeIcon);
  return {
    hasAllSections,
    hasAnnouncements,
    hasGalleryItems,
    hasHeroImage,
    hasSocialIcons,
    passed: hasAllSections && hasAnnouncements && hasGalleryItems && hasHeroImage && hasSocialIcons,
  };
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const checks = useMemo(() => runBasicChecks(), []);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <header className="relative z-50 bg-white shadow-lg shadow-slate-950/5">
        <div className="hidden bg-[#003366] text-white md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm font-semibold">
            <div className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2"><Phone size={16} /> +91 96126 00517</span>
              <span className="inline-flex items-center gap-2"><Mail size={16} /> stthomashighschoolkontha@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Follow Us:</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#003366]"><FacebookIcon size={17} /></span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#003366]"><YoutubeIcon size={18} /></span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:justify-between sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#003366] bg-white text-[#003366] shadow-sm sm:h-20 sm:w-20">
              <School size={32} />
            </div>
            <div>
              <p className="font-serif text-2xl font-black leading-none tracking-tight text-[#003366] sm:text-3xl">ST. THOMAS</p>
              <p className="font-serif text-xl font-black leading-none tracking-tight text-[#003366] sm:text-2xl">HIGH SCHOOL</p>
              <p className="mt-1 text-sm font-semibold text-slate-700 sm:text-base">Kontha Ahallup, Imphal</p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item, index) => (
              <a key={item.label} href={item.href} className={`pb-2 text-sm font-black text-[#08224a] transition hover:text-[#005da8] ${index === 0 ? "border-b-2 border-[#005da8] text-[#005da8]" : ""}`}>
                {item.label}
              </a>
            ))}
            <a href="#notice" className="inline-flex items-center gap-2 rounded-md bg-[#003366] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#003366]/20 transition hover:bg-[#01264c]">
              <Megaphone size={18} /> Notice Board
            </a>
          </nav>
        </div>

        <div className="border-t border-slate-100 bg-white px-3 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-black shadow-sm transition sm:text-sm ${
                  index === 0
                    ? "bg-[#003366] text-white"
                    : "bg-blue-50 text-[#003366] hover:bg-[#003366] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="#notice" className="rounded-full bg-yellow-300 px-4 py-2 text-xs font-black text-[#003366] shadow-sm sm:text-sm">
              Notice Board
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
          <img src={heroImage} alt="Students at St. Thomas High School campus" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="relative mx-auto flex min-h-[1120px] max-w-7xl flex-col justify-start px-5 pb-[33rem] pt-20 sm:min-h-[760px] sm:justify-center sm:pb-44 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="font-serif text-2xl italic text-yellow-300 drop-shadow-md sm:text-3xl">Welcome to</p>
              <h1 className="mt-3 max-w-[20rem] font-serif text-[3rem] font-black leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:mt-4 sm:max-w-3xl sm:text-6xl lg:text-7xl">
                St. Thomas<br />High School,<br />Kontha Ahallup
              </h1>
              <p className="mt-5 max-w-sm text-base font-medium leading-7 text-white/95 drop-shadow-md sm:max-w-xl sm:text-xl sm:leading-9">
                Nurturing young minds with knowledge, virtue, and service to build a brighter tomorrow.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a href="#about" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#003366] px-6 py-3.5 text-sm font-black text-white shadow-xl transition hover:bg-[#01264c] sm:px-7 sm:py-4 sm:text-base">
                  <Building2 size={21} /> About Our School
                </a>
                <a href="#admissions" className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-[#08224a] shadow-xl transition hover:bg-blue-50 sm:px-7 sm:py-4 sm:text-base">
                  <Users size={21} /> Admissions Open
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 w-full max-w-7xl -translate-x-1/2 px-4 sm:bottom-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: BookOpen, title: "Academic Excellence", text: "Quality education delivered by dedicated and experienced faculty." },
                { icon: HeartHandshake, title: "Holistic Development", text: "Encouraging excellence in academics, sports, arts, and moral values." },
                { icon: Users, title: "Community Driven", text: "A safe, inclusive, and disciplined environment for every child." },
                { icon: Trophy, title: "Achievements", text: "Celebrating the success and talents of our students." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl bg-white p-5 text-[#08224a] shadow-2xl shadow-black/20 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#003366] text-white sm:h-16 sm:w-16">
                        <Icon size={30} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black leading-tight">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="notice" className="bg-[#003366] px-4 py-5 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
              <div className="inline-flex items-center gap-3 text-xl font-black text-yellow-300"><Megaphone /> Latest Announcement:</div>
              <p className="text-base font-medium">PTM for Classes I to X on 25th May 2025 (Saturday) at 10:00 AM.</p>
            </div>
            <a href="#announcements" className="inline-flex items-center gap-2 font-black text-yellow-300">View All Notices <ChevronRight size={18} /></a>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="About Us" title="A school built on learning, values, and service" text="St. Thomas High School has long been dedicated to shaping young minds and building a strong foundation for the future leaders of our community." />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-10">
                <h3 className="font-serif text-2xl font-black text-[#003366]">Our Approach</h3>
                <p className="mt-4 leading-8 text-slate-700">
                  We believe education goes beyond textbooks. Our dedicated faculty works to ensure every student receives a well-rounded education that balances academics, scientific curiosity, moral integrity, and vibrant extracurricular activities.
                </p>
                <p className="mt-4 leading-8 text-slate-700">
                  At St. Thomas, every child is encouraged to discover their true potential and grow in a disciplined, inclusive, and supportive environment.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: BookOpen, title: "Learning", text: "Clear guidance and strong academic foundations." },
                  { icon: HeartHandshake, title: "Values", text: "Respect, discipline, kindness, and integrity." },
                  { icon: Trophy, title: "Activities", text: "Sports, culture, creativity, and teamwork." },
                  { icon: ShieldCheck, title: "Care", text: "Safe, supportive, and community-focused." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.5rem] bg-white p-6 shadow-lg shadow-slate-200/70">
                      <Icon className="text-[#003366]" size={30} />
                      <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="announcements" className="bg-[#eef4fb] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Notice Board" title="Latest Announcements" text="Use this section for holidays, exam schedules, PTM dates, report cards, and upcoming events." />
            <div className="grid gap-6 md:grid-cols-3">
              {announcements.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-xl shadow-slate-200/70">
                  <div className="mb-4 inline-flex rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-[#003366]">{item.date}</div>
                  <h3 className="text-xl font-black text-[#003366]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Admissions" title="Simple admission information for parents" text="Keep this page clear so parents can quickly understand the process, documents, and school office contact details." />
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { icon: FileText, title: "Required Documents", items: ["Birth certificate", "Aadhaar card", "Transfer certificate, if applicable", "Recent passport photos"] },
                { icon: CalendarDays, title: "How to Apply", items: ["Visit school office", "Collect admission form", "Submit documents", "Complete verification and fee process"] },
                { icon: Phone, title: "Office Support", items: ["Admission enquiry assistance", "Fee structure details", "Class availability", "Office hours update"] },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                    <Icon className="text-[#003366]" size={34} />
                    <h3 className="mt-5 text-xl font-black text-slate-950">{card.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {card.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#003366]" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Gallery" title="School life and achievements" text="Replace these placeholders with real photos from the school campus, events, sports days, and classroom activities." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <div key={item} className="group overflow-hidden rounded-[1.5rem] bg-blue-50 shadow-lg shadow-slate-200/60">
                  <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-100 to-yellow-100 p-6 text-center">
                    <div>
                      <School className="mx-auto text-[#003366]" size={42} />
                      <p className="mt-3 text-xs font-black uppercase tracking-[0.25em] text-[#003366]">Photo {index + 1}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-slate-950">{item}</h3>
                    <p className="mt-2 text-sm text-slate-600">Add a clear, bright school photo here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Contact" title="Get in touch with the school office" text="Update the phone number, email, office hours, and Google Maps link before publishing." />
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-10">
                <div className="space-y-6">
                  <div className="flex gap-4"><MapPin className="shrink-0 text-[#003366]" /><div><h3 className="font-black">Address</h3><p className="mt-1 text-slate-600">St. Thomas High School, Kontha Ahallup, Imphal, Manipur</p></div></div>
                  <div className="flex gap-4"><Phone className="shrink-0 text-[#003366]" /><div><h3 className="font-black">Phone</h3><p className="mt-1 text-slate-600">+91 96126 00517</p></div></div>
                  <div className="flex gap-4"><Mail className="shrink-0 text-[#003366]" /><div><h3 className="font-black">Email</h3><p className="mt-1 text-slate-600">stthomashighschoolkontha@gmail.com</p></div></div>
                  <div className="flex gap-4"><FacebookIcon className="shrink-0 text-[#003366]" /><div><h3 className="font-black">Facebook</h3><p className="mt-1 text-slate-600">Add official Facebook page link</p></div></div>
                </div>
              </div>
              <div className="min-h-[360px] overflow-hidden rounded-[2rem] bg-blue-100 shadow-xl shadow-slate-200/70">
                <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                  <div>
                    <MapPin className="mx-auto text-[#003366]" size={52} />
                    <h3 className="mt-4 font-serif text-2xl font-black text-slate-950">Google Map Placeholder</h3>
                    <p className="mx-auto mt-3 max-w-md text-slate-600">Embed the school Google Maps location here before final launch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#001f3f] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#003366]"><School /></div>
            <div><p className="font-black">St. Thomas High School</p><p className="text-sm text-blue-100">Kontha Ahallup, Imphal</p></div>
          </div>
          <div className="space-y-1 text-left text-sm text-blue-100 md:text-right">
            <p>© {year} St. Thomas High School. All rights reserved.</p>
            <p className={checks.passed ? "text-yellow-300" : "text-amber-300"}>Preview checks: {checks.passed ? "passed" : "needs review"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
