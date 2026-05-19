import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Users, Award, Zap, Star, ChevronDown, CheckCircle2, Bot, BarChart3, Megaphone, BookOpen, MessageSquare, Calendar, Briefcase, Clock, Laptop, GraduationCap, Store, Rocket } from "lucide-react";
import { SiYoutube, SiInstagram, SiThreads, SiHubspot, SiMailchimp, SiSalesforce, SiCalendly, SiWix, SiWordpress, SiTypeform, SiZapier, SiTwilio } from "react-icons/si";
import { Linkedin } from "lucide-react";
import officeManImg from "@assets/smiling-indian-man-working-laptop_1779188973563.avif";
import saasImg from "@assets/saas_1779185549378.jpg";
import cloneImg from "@assets/clone_1779185556620.jpg";
import bootcampImg from "@assets/bootcamp_1779185564292.jpg";
import arjunImg from "@assets/dev_1779187984050.jpg";
import rahulImg from "@assets/arjun_1779187990678.jpg";
import sureshImg from "@assets/rahul_1779187996480.jpg";
import priyaImg from "@assets/pooja_1779188002726.jpg";
import meenaImg from "@assets/meena_1779188007766.jpg";
import divyaImg from "@assets/rupa_1779188013426.jpg";

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CountdownTimer() {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(23, 59, 59, 0);
  const { days, hours, minutes, seconds } = useCountdown(target);
  const pad = (n: number) => String(n).padStart(2, "0");
  const blocks = [
    { label: "Days", value: pad(days) },
    { label: "Hours", value: pad(hours) },
    { label: "Mins", value: pad(minutes) },
    { label: "Secs", value: pad(seconds) },
  ];
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-black font-display text-2xl md:text-3xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              {b.value}
            </div>
            <span className="text-[10px] uppercase tracking-widest mt-1.5 font-bold" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {b.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-2xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}

const socialProofEntries = [
  { name: "Marcus T.", location: "Atlanta, GA", action: "just started his free trial", time: "2 min ago", avatar: "MT" },
  { name: "Priya S.", location: "Dallas, TX", action: "signed up through Venkat's link", time: "5 min ago", avatar: "PS" },
  { name: "Jake R.", location: "Phoenix, AZ", action: "claimed the free training", time: "9 min ago", avatar: "JR" },
  { name: "Leila M.", location: "Chicago, IL", action: "just joined the community", time: "12 min ago", avatar: "LM" },
  { name: "Devon W.", location: "Houston, TX", action: "started his 30-day trial", time: "18 min ago", avatar: "DW" },
  { name: "Sophia K.", location: "Miami, FL", action: "claimed the bonus bundle", time: "21 min ago", avatar: "SK" },
];

function SocialProofPopup() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNext = (idx: number) => {
      setCurrent(idx);
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };
    const delay = setTimeout(() => showNext(0), 3000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!visible) {
      const next = setTimeout(() => {
        const nextIdx = (current + 1) % socialProofEntries.length;
        setCurrent(nextIdx);
        setVisible(true);
        setTimeout(() => setVisible(false), 4500);
      }, 6000);
      return () => clearTimeout(next);
    }
  }, [visible, current]);

  const entry = socialProofEntries[current];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 max-w-xs"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-xs shrink-0">
            {entry.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#0a0a0a] truncate">{entry.name} <span className="font-normal text-gray-500">from {entry.location}</span></p>
            <p className="text-xs text-gray-500 truncate">{entry.action}</p>
            <p className="text-[10px] text-primary font-semibold mt-0.5">⏱ {entry.time}</p>
          </div>
          <button onClick={() => setVisible(false)} className="text-gray-300 hover:text-gray-500 text-sm shrink-0 ml-1">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const caseStudies = [
  {
    name: "Marcus Thompson",
    location: "Atlanta, GA",
    role: "Former Sales Rep",
    avatar: "MT",
    before: "$2,800/mo",
    after: "$11,400/mo",
    timeline: "4 months",
    quote: "I was stuck in a 9-to-5 with a cap on my earnings. Venkat's system showed me exactly how to land my first 3 clients in under 30 days. Now I run a full white-label agency and I've never looked back.",
    highlights: ["First client in 18 days", "Replaced full-time salary by month 3", "Now managing 9 clients"],
  },
  {
    name: "Priya Sharma",
    location: "Dallas, TX",
    role: "Stay-at-Home Mom",
    avatar: "PS",
    before: "$0/mo",
    after: "$5,900/mo",
    timeline: "3 months",
    quote: "I had zero tech background. Venkat's training broke everything down so simply that I had my first paying client before I even finished the course. This has completely changed my family's life.",
    highlights: ["No prior tech experience", "First client in 22 days", "Works 20 hrs/week from home"],
  },
  {
    name: "Devon Wright",
    location: "Houston, TX",
    role: "Recent College Grad",
    avatar: "DW",
    before: "$1,200/mo",
    after: "$8,700/mo",
    timeline: "5 months",
    quote: "I graduated with no job prospects. Within 5 months of following this system I was earning more than my friends who landed corporate gigs. The HighLevel platform basically sells itself.",
    highlights: ["Started with $0 savings", "Landed first client via cold outreach", "Hit $8K/mo without any paid ads"],
  },
];

function CaseStudySection() {
  const [active, setActive] = useState(0);
  const s = caseStudies[active];
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
            Real People. <span className="text-primary">Real Numbers.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Here's what happened when everyday people followed the same system Venkat teaches.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                active === i
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cs.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm grid md:grid-cols-5 gap-8"
          >
            {/* Left */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shrink-0">
                  {s.avatar}
                </div>
                <div>
                  <p className="font-black text-[#0a0a0a] text-lg">{s.name}</p>
                  <p className="text-sm text-gray-500">{s.role} · {s.location}</p>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 rounded-2xl p-4 text-center">
                  <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-1">Before</p>
                  <p className="text-2xl font-black text-red-500">{s.before}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 text-center">
                  <p className="text-xs text-green-500 font-bold uppercase tracking-widest mb-1">After</p>
                  <p className="text-2xl font-black text-green-600">{s.after}</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-center">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Timeline</p>
                <p className="text-xl font-black text-primary">{s.timeline}</p>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-3 flex flex-col gap-6 justify-center">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} style={{ fill: '#16a34a', color: '#16a34a' }} />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-primary pl-5">
                "{s.quote}"
              </blockquote>
              <ul className="flex flex-col gap-2 mt-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
});

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-card transition-colors hover:border-primary/30">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    q: "Do I need any prior experience to start?",
    a: "Absolutely not. The entire system is built for beginners. Venkat started from zero — broke, no connections, no experience — and built a 7-figure agency. The blueprint walks you through every step from scratch.",
  },
  {
    q: "What exactly is HighLevel and why do I need it?",
    a: "HighLevel is an all-in-one marketing platform that lets you build a fully functioning SaaS or agency business under your own brand. Venkat's team manages 300+ client sub-accounts inside it. You'll use it to deliver marketing services and software to clients without writing a single line of code.",
  },
  {
    q: "How is the training actually free?",
    a: "Venkat receives a commission when you start a HighLevel trial through his partner link. That commission covers the cost of the training, so you pay $0. You only pay HighLevel's normal subscription fee to use their platform.",
  },
  {
    q: "How long does it take to launch my agency?",
    a: "The blueprint is designed to get your agency live in 30 days. Most students have their first client-ready setup complete within the first two weeks.",
  },
  {
    q: "Will this work in my country?",
    a: "Yes. HighLevel and digital marketing services work globally. Venkat has students running profitable agencies across North America, Europe, Southeast Asia, and beyond.",
  },
  {
    q: "What do I get inside the training?",
    a: "Step-by-step training videos, done-for-you agency templates, pre-built automation workflows, a private community of students, and direct access to Venkat's playbook for acquiring and retaining clients.",
  },
];

const reviews = [
  {
    name: "Arjun M.",
    role: "Agency Owner, Hyderabad",
    stars: 5,
    text: "I had zero marketing background. Within 45 days of following Venkat's blueprint I signed my first 3 clients. The step-by-step structure removed all the guesswork.",
    img: arjunImg,
  },
  {
    name: "Rahul T.",
    role: "Former IT professional",
    stars: 5,
    text: "I was skeptical at first but the results speak for themselves. The HighLevel setup alone saved me from building a complicated tech stack. Highly recommend.",
    img: rahulImg,
  },
  {
    name: "Suresh V.",
    role: "SaaS Entrepreneur",
    stars: 5,
    text: "I've taken multiple courses. Venkat's is the only one where I immediately knew what to do the next morning. Clear, direct, and built by someone who is actively doing it.",
    img: sureshImg,
  },
  {
    name: "Priya S.",
    role: "Freelancer turned Agency CEO",
    stars: 5,
    text: "Venkat's training is the most actionable content I've consumed in years. No fluff, just the exact system that works. I crossed $5k/month in my third month.",
    img: priyaImg,
  },
  {
    name: "Meena K.",
    role: "Digital Marketer",
    stars: 5,
    text: "The community and templates alone are worth it. But having Venkat's strategy as a roadmap made the difference between spinning my wheels and actually closing deals.",
    img: meenaImg,
  },
  {
    name: "Divya R.",
    role: "Mom & Business Owner",
    stars: 5,
    text: "Started part-time while managing my family. The done-for-you templates meant I didn't have to figure everything out myself. $3k in recurring revenue by month two.",
    img: divyaImg,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden selection:bg-primary selection:text-primary-foreground">

      <SocialProofPopup />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 h-18 flex items-center justify-between">
          <div className="font-display font-black text-2xl tracking-tighter text-[#0a0a0a] py-4">
            VENKAT<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            {["About", "Software", "Course", "Reviews", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button className="font-bold bg-primary text-white hover:bg-primary/90 shadow-sm px-6">
            Get Started
          </Button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit text-sm font-bold">
              <Zap size={14} className="fill-primary" />
              Launch Your Software or AI Agency in 30 Days
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-display leading-[1.1] tracking-tight text-[#0a0a0a]">
              Start an{" "}
              <span className="text-primary">AI Business</span>
              {" "}in 2026.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
              How I built a <strong className="text-[#0a0a0a]">7-figure software business</strong> using HighLevel — and how you can launch your own AI agency in{" "}
              <strong className="text-[#0a0a0a]">30 days</strong>, even as a complete beginner.
            </p>

            <ul className="space-y-2.5 pt-1">
              {[
                "Get my complete AI Agency Blueprint (normally $799) — FREE",
                "Launch your own white-label software business",
                "Start making money in 30 days or less",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary text-white hover:bg-primary/90 w-fit shadow-lg">
                Get 30-Day Free Trial
              </Button>
              <p className="text-xs text-gray-500">
                No credit card required. Free training included when you sign up through Venkat's link.
              </p>
            </div>
          </motion.div>

          {/* Right — hero video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/Dp2TSSisAZM?rel=0&modestbranding=1"
                title="Start an AI Business in 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-16 border-y border-gray-100 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-display text-[#0a0a0a] mb-2">
              Who Is This <span className="text-primary">For?</span>
            </h2>
            <p className="text-gray-500">This is for you if any of these sound familiar…</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: Briefcase,
                title: "You Want to Start a Business",
                desc: "But don't know where to begin or what to sell.",
              },
              {
                icon: Clock,
                title: "You're Tired of Trading Time for Money",
                desc: "You want recurring revenue that works while you sleep.",
              },
              {
                icon: Laptop,
                title: "You Have No Tech Skills",
                desc: "No coding, no design, no prior experience needed — just a willingness to learn.",
              },
              {
                icon: GraduationCap,
                title: "You've Tried Other Courses Before",
                desc: "And got nothing but theory. You need a real system that's already working.",
              },
              {
                icon: Store,
                title: "You Want to Help Small Businesses",
                desc: "Grow their revenue using digital marketing and AI tools.",
              },
              {
                icon: Rocket,
                title: "You're Ready to Take Action",
                desc: "You don't need more motivation — you need the right blueprint and tools.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger(i)}
                className="flex flex-col items-center text-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <item.icon size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-black text-[#0a0a0a] text-sm mb-1.5">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div {...fadeUp}>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
                About Venkat
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-6">
                Who is <span className="text-primary">Venkat?</span>
              </h2>
              <div className="space-y-5 text-base text-gray-600 leading-relaxed">
                <p>
                  I started my digital marketing agency when I was young, broke, and looking for a way out. No connections, no rich parents — just a laptop and an obsession with building something real.
                </p>
                <p>
                  Today, that agency is a <strong className="text-[#0a0a0a] font-bold">7-figure powerhouse</strong>. We've been recognized by the <strong className="text-[#0a0a0a] font-bold">Inc 5000 Fastest-Growing Companies</strong> three years in a row, and earned the <strong className="text-[#0a0a0a] font-bold">Gold HighLevel SaaS Award</strong>.
                </p>
                <p>
                  My mission now is to help ambitious people skip years of trial and error. I help small to medium businesses grow with online marketing, and I teach entrepreneurs how to launch profitable AI and software agencies.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "10+ years of real agency experience",
                  "Manages 300+ active client accounts",
                  "Teaches beginner-friendly AI business launch",
                  "Co-Founder of a 7-figure digital marketing company",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Venkat photo */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-lg"
            >
              <img src={officeManImg} alt="Venkat" className="w-full h-full object-cover object-top" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS HIGHLEVEL ── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              The Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
              What is <span className="text-primary">HighLevel?</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              See it in 2 minutes — Inside Tour
            </p>
          </motion.div>

          {/* What is HighLevel video */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-lg mb-14"
          >
            <iframe
              src="https://www.youtube.com/embed/AyLFBsCNSFI?rel=0&modestbranding=1"
              title="What is HighLevel?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "All-in-One CRM", desc: "Manage every client, lead, and deal from a single dashboard — no more juggling 10 apps." },
              { icon: BarChart3, title: "Funnels & Websites", desc: "Build high-converting sales funnels and landing pages with drag-and-drop simplicity." },
              { icon: MessageSquare, title: "Email & SMS Marketing", desc: "Send automated follow-ups, broadcasts, and campaigns across email, SMS, and voicemail." },
              { icon: Calendar, title: "Appointment Booking", desc: "Automated booking, reminders, and follow-ups — your calendar fills itself." },
              { icon: Star, title: "Reputation Management", desc: "Request and manage Google reviews automatically to build social proof at scale." },
              { icon: Users, title: "White-Label & Resell", desc: "Brand it as your own software and charge clients a monthly subscription fee." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger(i)}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-[#0a0a0a] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-md">
              Get 30-Day Free Trial
            </Button>
            <p className="text-xs text-gray-400 mt-3">Free training included when you sign up through Venkat's link.</p>
          </motion.div>
        </div>
      </section>

      {/* ── SOFTWARE / COMPARISON TABLE ── */}
      <section id="software" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              The Software
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
              Replace <span className="text-primary">7+ Tools</span> With One
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              HighLevel is the all-in-one platform Venkat uses to run his entire 7-figure agency — and you can white-label it as your own software business.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-md">
              <table className="w-full min-w-[560px] text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-5 py-4 font-bold uppercase tracking-wider text-xs w-[30%]">Features</th>
                    <th className="px-4 py-4 text-center font-bold uppercase tracking-wider text-xs w-[30%]">Replaces</th>
                    <th className="px-4 py-4 text-center font-bold uppercase tracking-wider text-xs w-[20%]">Other Tools</th>
                    <th className="px-4 py-4 text-center w-[20%]">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center mx-auto">
                          <Zap size={14} className="text-white" />
                        </div>
                        <span className="font-bold uppercase tracking-wider text-xs">HighLevel</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "CRM & Pipeline Management",
                      logos: [<SiSalesforce key="sf" size={20} color="#00A1E0" />, <SiHubspot key="hs" size={20} color="#FF7A59" />],
                      replaces: "Salesforce / HubSpot",
                      cost: "$99 / Monthly",
                    },
                    {
                      feature: "Unlimited Sales Funnels",
                      logos: [<span key="cf" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#E8593C" }}>CF</span>],
                      replaces: "ClickFunnels",
                      cost: "$297 / Monthly",
                    },
                    {
                      feature: "Website Builder",
                      logos: [<SiWix key="wix" size={20} color="#0C6EFC" />, <SiWordpress key="wp" size={20} color="#21759B" />],
                      replaces: "Wix / WordPress",
                      cost: "$29 / Monthly",
                    },
                    {
                      feature: "Surveys & Forms",
                      logos: [<SiTypeform key="tf" size={20} color="#262627" />, <span key="jf" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#FF6100" }}>JF</span>],
                      replaces: "Typeform / JotForm",
                      cost: "$49 / Monthly",
                    },
                    {
                      feature: "Email Marketing",
                      logos: [<SiMailchimp key="mc" size={20} color="#F2C94C" />, <span key="ac" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#356AE6" }}>AC</span>],
                      replaces: "Mailchimp / ActiveCampaign",
                      cost: "$99 / Monthly",
                    },
                    {
                      feature: "2-Way SMS Marketing",
                      logos: [<SiTwilio key="tw" size={20} color="#F22F46" />, <span key="st" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#1A1A2E" }}>ST</span>],
                      replaces: "Twilio / SlickText",
                      cost: "$99 / Monthly",
                    },
                    {
                      feature: "Booking & Appointments",
                      logos: [<SiCalendly key="cal" size={20} color="#006BFF" />],
                      replaces: "Calendly",
                      cost: "$29 / Monthly",
                    },
                    {
                      feature: "Workflow Automations",
                      logos: [<SiZapier key="zap" size={20} color="#FF4A00" />, <span key="mk" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#9B59B6" }}>MK</span>],
                      replaces: "Zapier / Make",
                      cost: "$169 / Monthly",
                    },
                    {
                      feature: "Courses / Products",
                      logos: [<span key="kj" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#7B5CF0" }}>K</span>, <span key="tc" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#35A0DE" }}>TC</span>],
                      replaces: "Kajabi / Teachable",
                      cost: "$99 / Monthly",
                    },
                    {
                      feature: "Reputation Management",
                      logos: [<span key="be" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#1DA462" }}>BE</span>, <span key="yx" className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[9px] font-black" style={{ background: "#E4002B" }}>YX</span>],
                      replaces: "Birdeye / Yext",
                      cost: "$159 / Monthly",
                    },
                    {
                      feature: "White-Label Mobile App",
                      logos: [],
                      replaces: "Unique to HighLevel",
                      cost: "—",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-blue-50/20"}`}
                    >
                      <td className="px-5 py-3.5 font-semibold text-[#0a0a0a] text-sm">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.logos.length > 0 ? row.logos : <span className="text-xs text-primary font-semibold">{row.replaces}</span>}
                          {row.logos.length > 0 && <span className="text-xs text-gray-400 hidden md:inline">{row.replaces}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center font-semibold text-gray-500 text-sm">{row.cost}</td>
                      <td className="px-4 py-3.5 text-center bg-primary/5">
                        <span className="text-primary font-black text-xl">✔</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary/20 bg-gray-50">
                    <td colSpan={2} className="px-5 py-4 font-black text-[#0a0a0a] uppercase tracking-wider text-sm">Overall Price</td>
                    <td className="px-4 py-4 text-center font-black text-red-500 text-base">$1,612 / Month</td>
                    <td className="px-4 py-4 text-center bg-primary/10">
                      <span className="inline-block bg-primary text-white font-black text-base px-3 py-1 rounded-lg">$97 / Month</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.25 }} className="mt-10 text-center">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-md">
              Try HighLevel Free — 30 Days
            </Button>
            <p className="text-sm text-gray-400 mt-3">No credit card required. Free training included through Venkat's link.</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Free With Your Trial
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
              Here's What <span className="text-primary">You Get</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              When you start your HighLevel trial through Venkat's link, you get his complete AI Agency Blueprint — normally{" "}
              <span className="line-through text-gray-400">$799</span>{" "}
              <span className="text-primary font-bold">100% FREE.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-black font-display text-[#0a0a0a] mb-5 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" /> Here's what Venkat will cover:
              </h3>
              <ul className="space-y-3">
                {[
                  "#1 Business Setup: AI & Quick Wins",
                  "#2 Agency Account Setup: White Label and SaaS",
                  "#3 Launch & Scale Your Own Software (SaaS)",
                  "#4 Launch & Scale Your AI Agency with Software (SwaS)",
                  "#5 How to Get Clients: Powered by AI",
                  "#6 Steps to Build a Semi-Passive Income Business",
                  "Proven Systems & Venkat's Real Experience",
                  "60+ Videos & Hours of Step-by-Step Content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-lg font-black font-display text-[#0a0a0a] mb-5 flex items-center gap-2">
                <Star size={18} className="text-primary" /> Additional Bonuses Included:
              </h3>
              <ul className="space-y-3">
                {[
                  "Access to 1-on-1 Kickoff Call with Venkat's Team",
                  "Access to Live Bootcamp (Real-Time Training)",
                  "Access to Live Sales Calls & Client Onboarding",
                  "How to Clone Yourself with AI (Venkat's New Strategy)",
                  "Pre-Built Snapshots & Done-For-You Funnels",
                  "Private Community of Students & Agency Owners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 3 Bonus Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                badge: "FREE BONUS #1",
                title: "SaaS & SwaS Playbook",
                desc: "The exact playbook Venkat uses to run a software + services agency. White-label HighLevel and sell it as your own product.",
                img: saasImg,
                imgAlt: "SaaS Playbook",
              },
              {
                badge: "FREE BONUS #2",
                title: "Clone Yourself with AI Videos",
                desc: "Venkat's personal strategy for using AI to create content, build authority, and grow your agency on YouTube without a camera crew.",
                img: cloneImg,
                imgAlt: "AI Clone Videos",
              },
              {
                badge: "FREE BONUS #3",
                title: "Live Bootcamp + Snapshots & Funnels",
                desc: "Hands-on live training sessions plus pre-built HighLevel snapshots and funnel templates you can deploy for clients instantly.",
                img: bootcampImg,
                imgAlt: "HighLevel Bootcamp",
              },
            ].map((bonus, i) => (
              <motion.div
                key={bonus.badge}
                {...stagger(i)}
                className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest w-fit">
                  {bonus.badge}
                </div>
                <h3 className="font-black font-display text-lg text-[#0a0a0a]">{bonus.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{bonus.desc}</p>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img src={bonus.img} alt={bonus.imgAlt} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value + CTA */}
          <motion.div {...fadeUp} className="text-center">
            <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-semibold">Total Value</p>
            <p className="text-5xl font-black font-display text-[#0a0a0a] mb-1">
              <span className="line-through text-gray-300 text-3xl mr-2">$799</span>
              <span className="text-primary">FREE</span>
            </p>
            <p className="text-gray-400 mb-8 text-sm">When you start your 30-day HighLevel trial through Venkat's link</p>
            <Button size="lg" className="h-14 px-12 text-lg font-black bg-primary text-white hover:bg-primary/90 shadow-lg">
              Get Started Today!
            </Button>
            <p className="text-xs text-gray-400 mt-3">Start Free Trial. No Contracts. Cancel Anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* ── COURSE ── */}
      <section id="course" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">

          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-4">
              Here's The Free <span className="text-primary">Course</span>
            </h2>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Free Training
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-display text-[#0a0a0a] mb-4">
              The <span className="text-primary">AI Agency Blueprint</span>
            </h3>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The exact step-by-step system Venkat used to build a 7-figure agency — and how you get it 100% FREE when you start your HighLevel trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* Left — module list */}
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-black font-display text-[#0a0a0a] mb-6 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                What You'll Learn Inside:
              </h3>
              <div className="space-y-3">
                {[
                  { num: "01", title: "Business Setup: AI & Quick Wins", desc: "Get your agency identity, tools, and first quick-win clients set up from day one." },
                  { num: "02", title: "Agency Account Setup: White Label & SaaS", desc: "Fully white-label HighLevel as your own software and set up your SaaS pricing." },
                  { num: "03", title: "Launch & Scale Your Own Software (SaaS)", desc: "Package your agency as a software product and start charging monthly subscriptions." },
                  { num: "04", title: "Launch & Scale AI Agency with Software (SwaS)", desc: "Combine done-for-you services with your software to command premium pricing." },
                  { num: "05", title: "How to Get Clients: Powered by AI", desc: "Venkat's proven outreach system using AI to generate leads and close deals on autopilot." },
                  { num: "06", title: "Build a Semi-Passive Income Business", desc: "Systemize your delivery so the business runs without you being in it every day." },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    {...stagger(i)}
                    className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-primary/30 hover:bg-white transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary text-white font-black text-sm flex items-center justify-center shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <div className="font-bold text-[#0a0a0a] text-sm mb-0.5">{item.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — bonuses + value + CTA */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-6">

              {/* Bonuses */}
              <div>
                <h3 className="text-lg font-black font-display text-[#0a0a0a] mb-4 flex items-center gap-2">
                  <Star size={18} className="text-primary" />
                  Exclusive Bonuses Included:
                </h3>
                <div className="space-y-3">
                  {[
                    { badge: "BONUS #1", title: "1-on-1 Kickoff Call", desc: "Get a personal onboarding call with Venkat's team to map out your 30-day launch plan." },
                    { badge: "BONUS #2", title: "Live Bootcamp Access", desc: "Join real-time training sessions with Venkat — ask questions, get feedback, stay accountable." },
                    { badge: "BONUS #3", title: "Pre-Built Snapshots & Funnels", desc: "Done-for-you HighLevel snapshots you can deploy for clients instantly — no building from scratch." },
                    { badge: "BONUS #4", title: "Clone Yourself with AI", desc: "Venkat's exact AI strategy for creating content and building authority without a camera crew." },
                    { badge: "BONUS #5", title: "Private Student Community", desc: "Access a thriving group of agency owners sharing wins, strategies, and accountability daily." },
                  ].map((b, i) => (
                    <div key={b.badge} className="flex items-start gap-3">
                      <div className="px-2 py-0.5 rounded bg-primary text-white text-[10px] font-black uppercase tracking-wider shrink-0 mt-0.5">
                        {b.badge}
                      </div>
                      <div>
                        <span className="font-bold text-[#0a0a0a] text-sm">{b.title} — </span>
                        <span className="text-xs text-gray-500">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value stack */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-3">Total Value</p>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "AI Agency Blueprint Course", value: "$499" },
                    { label: "1-on-1 Kickoff Call", value: "$150" },
                    { label: "Live Bootcamp Access", value: "$299" },
                    { label: "Done-For-You Snapshots & Funnels", value: "$199" },
                    { label: "Clone Yourself with AI Training", value: "$149" },
                    { label: "Private Community Access", value: "$99" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-bold text-gray-400 line-through">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="font-black text-[#0a0a0a] text-base">Your Price Today</span>
                    <span className="font-black text-primary text-2xl">FREE</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center">When you start your 30-day HighLevel trial through Venkat's link</p>
              </div>

              <Button size="lg" className="h-14 w-full text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-lg">
                Claim Free Access Now →
              </Button>
              <p className="text-xs text-gray-400 text-center -mt-3">No credit card required. Start Free. Cancel Anytime.</p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OFFER / CTA BANNER ── */}
      <section className="py-24 md:py-32 px-6 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm tracking-widest uppercase mb-6">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6">
              Get My Complete AI Agency Training For Free
            </h2>
            <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              This is the exact system I use to scale. Normally valued at{" "}
              <span className="line-through opacity-60">$799</span>, you get it{" "}
              <strong className="text-white">100% FREE</strong> when you start a HighLevel trial through my partner link.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>
              This offer expires in:
            </p>
            <CountdownTimer />
            <Button size="lg" className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-gray-100 shadow-xl w-full md:w-auto">
              Claim Your Free Training Now
            </Button>
            <p className="text-sm text-white/60 mt-6">
              Step-by-step videos. Done-for-you templates. Private community access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Student Results
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
              What Students Say About <span className="text-primary">Venkat</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              Real people. Real results. No actors, no incentivized reviews.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                {...stagger(i)}
                className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} style={{ fill: '#16a34a', color: '#16a34a' }} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{r.text}"</p>
                <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-[#0a0a0a] text-sm">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-4">
              Questions Venkat Gets Asked <span className="text-primary">Every Day</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              No sugarcoating. Here are honest answers to the most common questions.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      <CaseStudySection />

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 bg-gray-50">

        {/* Top footer row */}
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display font-black text-xl tracking-tighter text-[#0a0a0a]">
              VENKAT<span className="text-primary">.</span>
            </div>
            <div className="flex gap-6">
              {[
                { icon: SiYoutube, href: "#", label: "YouTube" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: SiInstagram, href: "#", label: "Instagram" },
                { icon: SiThreads, href: "#", label: "Threads" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
            <div className="flex gap-5 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Disclaimer / Copyright block — black background */}
        <div style={{ backgroundColor: '#000000' }}>
          <div className="container mx-auto px-6 py-8 max-w-4xl">

            {/* Name heading */}
            <p className="font-black font-display mb-1" style={{ color: '#ffffff', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
              VENKAT
            </p>
            <p className="mb-5" style={{ color: '#9ca3af', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
              VENKAT COPYRIGHT MEDIA GROUP 2026
            </p>

            <p className="text-xs leading-5 text-center mb-3" style={{ color: '#9ca3af' }}>
              <span className="font-bold uppercase" style={{ color: '#ffffff' }}>Disclaimer: </span>
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. This site is also not a part of the Google™ website or Alphabet Inc. GOOGLE™ is a trademark of ALPHABET Inc.
            </p>

            <p className="text-xs leading-5 text-center mb-3" style={{ color: '#9ca3af' }}>
              <span className="font-bold uppercase" style={{ color: '#ffffff' }}>Earnings Disclaimer: </span>
              The results stated on this page are Venkat's personal results and the results of his students. Please understand these results are not typical. Venkat is an experienced internet marketer with years of practice. The average person who purchases any "how-to" information gets little to no results. Venkat is using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please do not sign up for this training.
            </p>

            <p className="text-xs leading-5 text-center mb-5" style={{ color: '#9ca3af' }}>
              <span className="font-bold uppercase" style={{ color: '#ffffff' }}>HighLevel Affiliate Disclosure: </span>
              Venkat is an independent HighLevel Affiliate, not an employee. He receives referral payments from HighLevel. The opinions expressed here are his own and are not official statements of HighLevel or its parent company, LLC.
            </p>

            <div style={{ borderTop: '1px solid #374151', paddingTop: '1rem' }}>
              <p className="text-xs flex items-center gap-3" style={{ color: '#6b7280' }}>
                <span>© {new Date().getFullYear()} Venkat. All Rights Reserved.</span>
                <span style={{ color: '#4b5563' }}>|</span>
                <a href="#" className="hover:underline" style={{ color: '#9ca3af' }}>Terms &amp; Conditions</a>
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
