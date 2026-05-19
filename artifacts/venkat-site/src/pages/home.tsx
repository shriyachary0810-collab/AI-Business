import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Award, Zap, Star, ChevronDown, CheckCircle2, Bot, BarChart3, Megaphone, BookOpen, MessageSquare, Calendar } from "lucide-react";
import { SiYoutube, SiInstagram, SiThreads, SiHubspot, SiMailchimp, SiSalesforce, SiCalendly, SiWix, SiWordpress, SiTypeform, SiZapier, SiTwilio } from "react-icons/si";
import { Linkedin } from "lucide-react";

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
    <div
      className="border border-border/50 rounded-2xl overflow-hidden bg-card transition-colors hover:border-primary/30"
      data-testid={`faq-item-${q.slice(0, 10).replace(/\s/g, "-").toLowerCase()}`}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        data-testid="faq-toggle"
      >
        <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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
    q: "What do I get inside the course?",
    a: "Step-by-step training videos, done-for-you agency templates, pre-built automation workflows, a private community of students, and direct access to Venkat's playbook for acquiring and retaining clients.",
  },
];

const reviews = [
  {
    name: "Arjun M.",
    role: "Agency Owner, Hyderabad",
    stars: 5,
    text: "I had zero marketing background. Within 45 days of following Venkat's blueprint I signed my first 3 clients. The step-by-step structure removed all the guesswork.",
  },
  {
    name: "Priya S.",
    role: "Freelancer turned Agency CEO",
    stars: 5,
    text: "Venkat's training is the most actionable content I've consumed in years. No fluff, just the exact system that works. I crossed $5k/month in my third month.",
  },
  {
    name: "Rahul T.",
    role: "Former IT professional",
    stars: 5,
    text: "I was skeptical at first but the results speak for themselves. The HighLevel setup alone saved me from building a complicated tech stack. Highly recommend.",
  },
  {
    name: "Meena K.",
    role: "Digital Marketer",
    stars: 5,
    text: "The community and templates alone are worth it. But having Venkat's strategy as a roadmap made the difference between spinning my wheels and actually closing deals.",
  },
  {
    name: "Suresh V.",
    role: "SaaS Entrepreneur",
    stars: 5,
    text: "I've taken multiple courses. Venkat's is the only one where I immediately knew what to do the next morning. Clear, direct, and built by someone who is actively doing it.",
  },
  {
    name: "Divya R.",
    role: "Mom & Business Owner",
    stars: 5,
    text: "Started part-time while managing my family. The done-for-you templates meant I didn't have to figure everything out myself. $3k in recurring revenue by month two.",
  },
];

const software = [
  {
    icon: Bot,
    name: "AI Agency Suite",
    tag: "Core Platform",
    desc: "Everything you need to run a fully branded AI and marketing agency — CRM, email, automations, funnels, and more — under your own logo.",
    features: ["White-label CRM", "Email & SMS marketing", "AI appointment booking", "Unlimited client sub-accounts"],
    cta: "Get Access Free",
  },
  {
    icon: BarChart3,
    name: "Analytics & Reporting",
    tag: "Insights",
    desc: "Real-time dashboards your clients will love. Automated reports sent straight to their inbox every week without you lifting a finger.",
    features: ["Live performance dashboards", "Automated weekly reports", "Ad spend tracking", "ROI attribution"],
    cta: "See a Demo",
  },
  {
    icon: Megaphone,
    name: "Done-For-You Campaigns",
    tag: "Templates",
    desc: "Pre-built, battle-tested marketing campaigns across every major industry. Deploy in minutes. Get results from day one.",
    features: ["500+ funnel templates", "Email sequences included", "Social media ad creatives", "Landing page snapshots"],
    cta: "Browse Templates",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter">
            VENKAT<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Software", "Course", "Reviews", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
                data-testid={`nav-link-${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
          <Button variant="default" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" data-testid="button-get-started">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 relative">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary w-fit text-sm font-semibold tracking-wide">
              <Zap size={14} className="fill-secondary" />
              No Experience. No Code. No Tech Skills Required.
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.1] tracking-tight">
              Start an AI Business in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">2026.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed">
              How I built a 7-figure software business using HighLevel — and how you can launch your own AI agency in 30 days, even as a complete beginner.
            </p>
            <ul className="space-y-2 pt-1">
              {[
                "Get my complete AI Agency Blueprint (normally $799) — FREE",
                "Launch your own white-label software business",
                "Start making money in 30 days or less",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 w-fit" data-testid="button-free-trial">
                Get 30-Day Free Trial
              </Button>
              <p className="text-xs text-muted-foreground">
                No credit card required. Free training included when you sign up through Venkat's link.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-3xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center p-8 group transition-all duration-500 hover:border-primary/50">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground relative z-10 text-center">
                [ Add Venkat's Photo Here ]
              </h3>
              <p className="text-muted-foreground text-center mt-2 max-w-[200px] text-sm relative z-10">
                A high-quality, confident portrait works best.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-2">Who Is This For?</h2>
            <p className="text-muted-foreground">This is for you if any of these sound familiar…</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "You want to start a business", desc: "But don't know where to begin or what to sell." },
              { title: "You're tired of trading time for money", desc: "You want recurring revenue that works while you sleep." },
              { title: "You have no tech skills", desc: "No coding, no design, no prior experience needed — just a willingness to learn." },
              { title: "You've tried other courses before", desc: "And got nothing but theory. You need a real system that's already working." },
              { title: "You want to help small businesses", desc: "Grow their revenue using digital marketing and AI tools." },
              { title: "You're ready to take action", desc: "You don't need more motivation — you need the right blueprint and tools." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger(i)}
                className="flex items-start gap-3 bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-colors"
                data-testid={`who-card-${i}`}
              >
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-foreground text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-5">
                About Venkat
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                Who is Venkat?
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I started my digital marketing agency when I was young, broke, and looking for a way out. No connections, no rich parents — just a laptop and an obsession with building something real.
                </p>
                <p>
                  Today, that agency is a <strong className="text-foreground font-bold">7-figure powerhouse</strong>. We've been recognized by the <strong className="text-foreground font-bold">Inc 5000 Fastest-Growing Companies</strong> three years in a row, and earned the <strong className="text-foreground font-bold">Gold HighLevel SaaS Award</strong>.
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
                  <div key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-border/50 bg-card/40 flex flex-col items-center justify-center p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-secondary/40 flex items-center justify-center mb-6 group-hover:border-secondary transition-all">
                <Award className="text-secondary w-10 h-10" />
              </div>
              <h3 className="text-xl font-display font-bold text-center relative z-10">
                [ Add Lifestyle Photo ]
              </h3>
              <p className="text-muted-foreground text-center mt-2 text-sm max-w-[200px] relative z-10">
                Speaking on stage or working at desk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is HighLevel */}
      <section className="py-24 md:py-32 px-6 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              The Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
              What is HighLevel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See it in 2 minutes — Inside Tour
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border bg-card shadow-2xl flex flex-col items-center justify-center group cursor-pointer mb-14"
            data-testid="ghl-video-placeholder"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
              <Play className="w-10 h-10 ml-2" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold relative z-10">
              [ Embed HighLevel 2-Minute Tour Video Here ]
            </h3>
            <p className="text-muted-foreground mt-3 text-sm relative z-10">
              Paste a YouTube or Vimeo link to the official GHL inside tour.
            </p>
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
                className="flex items-start gap-4 bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              Get 30-Day Free Trial
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Free training included when you sign up through Venkat's link.</p>
          </motion.div>
        </div>
      </section>

      {/* Software Section */}
      <section id="software" className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              The Software
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
              Replace 7+ Tools With One
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              HighLevel is the all-in-one platform Venkat uses to run his entire 7-figure agency — and you can white-label it as your own software business.
            </p>
          </motion.div>

          {/* Sean-style 4-column table: Feature | Replaces (logos) | Other Tools cost | HighLevel ✓ */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="overflow-x-auto rounded-3xl border border-border shadow-md" data-testid="software-comparison-table">
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
                      className={`border-b border-border/60 last:border-0 hover:bg-blue-50/40 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-blue-50/30"}`}
                      data-testid={`comparison-row-${i}`}
                    >
                      <td className="px-5 py-3.5 font-semibold text-foreground text-sm">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.logos.length > 0 ? row.logos : <span className="text-xs text-primary font-semibold">{row.replaces}</span>}
                          {row.logos.length > 0 && <span className="text-xs text-muted-foreground hidden md:inline">{row.replaces}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center font-semibold text-muted-foreground text-sm">{row.cost}</td>
                      <td className="px-4 py-3.5 text-center bg-primary/5">
                        <span className="text-primary font-black text-xl">✔</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary/30 bg-muted/40">
                    <td colSpan={2} className="px-5 py-4 font-black text-foreground uppercase tracking-wider text-sm">Overall Price</td>
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
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" data-testid="button-try-ghl">
              Try HighLevel Free — 30 Days
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required. Free training included through Venkat's link.</p>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 px-6 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Free With Your Trial
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
              Here's What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">You Get</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              When you start your HighLevel trial through Venkat's link, you get his complete AI Agency Blueprint — normally{" "}
              <span className="line-through text-muted-foreground/60">$799</span>{" "}
              <span className="text-primary font-bold">100% FREE.</span>
            </p>
          </motion.div>

          {/* Course modules list */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-black font-display mb-5 flex items-center gap-2">
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
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-lg font-black font-display mb-5 flex items-center gap-2">
                <Star size={18} className="text-secondary" /> Additional Bonuses Included:
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
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
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
              },
              {
                badge: "FREE BONUS #2",
                title: "Clone Yourself with AI Videos",
                desc: "Venkat's personal strategy for using AI to create content, build authority, and grow your agency on YouTube without a camera crew.",
              },
              {
                badge: "FREE BONUS #3",
                title: "Live Bootcamp + Snapshots & Funnels",
                desc: "Hands-on live training sessions plus pre-built HighLevel snapshots and funnel templates you can deploy for clients instantly.",
              },
            ].map((bonus, i) => (
              <motion.div
                key={bonus.badge}
                {...stagger(i)}
                className="bg-card border border-border/50 rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest w-fit">
                  {bonus.badge}
                </div>
                <h3 className="font-black font-display text-lg text-foreground">{bonus.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{bonus.desc}</p>
                <div className="aspect-video rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center text-xs text-muted-foreground">
                  [ Bonus Preview Image ]
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value summary + CTA */}
          <motion.div {...fadeUp} className="text-center">
            <p className="text-muted-foreground text-sm mb-2 uppercase tracking-widest font-semibold">Total Value</p>
            <p className="text-5xl font-black font-display text-foreground mb-1">
              <span className="line-through text-muted-foreground/40 text-3xl mr-2">$799</span>
              <span className="text-primary">FREE</span>
            </p>
            <p className="text-muted-foreground mb-8 text-sm">When you start your 30-day HighLevel trial through Venkat's link</p>
            <Button size="lg" className="h-14 px-12 text-lg font-black bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Get Started Today!
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Start Free Trial. No Contracts. Cancel Anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="py-24 md:py-32 px-6 bg-muted/30 border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-5">
                The Course
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                The AI Agency Blueprint by Venkat
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The step-by-step training Venkat uses to teach complete beginners how to launch a profitable AI or software agency in 30 days — with zero experience and zero code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: BookOpen, label: "10+ Hours of Video", sub: "Step-by-step modules" },
                  { icon: Users, label: "Private Community", sub: "Students & accountability" },
                  { icon: CheckCircle2, label: "Done-For-You Templates", sub: "Deploy from day one" },
                  { icon: Zap, label: "Live Coaching Calls", sub: "Ask Venkat directly" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 bg-card border border-border/50 rounded-xl p-4">
                    <item.icon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-muted-foreground line-through text-lg font-semibold">$799</div>
                <div className="text-4xl font-black font-display text-primary">FREE</div>
                <div className="text-sm text-muted-foreground">with HighLevel trial</div>
              </div>

              <Button size="lg" className="mt-6 h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" data-testid="button-claim-course">
                Claim Free Access Now
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {[
                { module: "Module 1", title: "Agency Foundation & Mindset", desc: "Set up your agency identity, niche selection, and the mindset that separates 6-figure operators from beginners." },
                { module: "Module 2", title: "HighLevel Mastery", desc: "Full platform walkthrough — CRM, funnels, automations, and white-labeling your brand in hours." },
                { module: "Module 3", title: "Your First Client in 14 Days", desc: "Proven outreach scripts, pricing strategy, and exactly how to close your first retainer." },
                { module: "Module 4", title: "Scale to $10k/month", desc: "Systemize delivery, hire your first VA, and build recurring revenue that runs without you." },
                { module: "Bonus", title: "AI Automation Workflows", desc: "Plug-and-play AI chatbots, lead follow-up sequences, and reputation management — all pre-built." },
              ].map((item, i) => (
                <motion.div
                  key={item.module}
                  {...stagger(i)}
                  className="bg-card border border-border/50 rounded-2xl p-5 flex gap-4 items-start hover:border-primary/30 transition-colors"
                  data-testid={`module-card-${i}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-black shrink-0">
                    {i + 1 <= 4 ? i + 1 : "★"}
                  </div>
                  <div>
                    <div className="text-xs text-primary font-bold uppercase tracking-widest mb-0.5">{item.module}</div>
                    <div className="font-bold text-foreground text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offer / Free Training CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            {...fadeUp}
            className="bg-card border border-primary/30 rounded-3xl p-8 md:p-16 text-center shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-widest uppercase mb-6">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              Get My Complete AI Agency Training For Free
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This is the exact system I use to scale. Normally valued at{" "}
              <span className="line-through opacity-50">$799</span>, you get it 100% FREE when you start a HighLevel trial through my partner link.
            </p>
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto" data-testid="button-claim-free-training">
              Claim Your Free Training Now
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Step-by-step videos. Done-for-you templates. Private community access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Student Results
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
              What Students Say About Venkat
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Real people. Real results. No actors, no incentivized reviews.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                {...stagger(i)}
                className="bg-card border border-border/50 rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
                data-testid={`review-card-${i}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
                <div className="pt-2 border-t border-border/50">
                  <div className="font-bold text-foreground text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add photo placeholder for reviews */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 border border-dashed border-border/50 rounded-3xl p-10 text-center bg-card/30"
          >
            <p className="text-muted-foreground text-sm font-medium">
              [ Add real student screenshots, video testimonials, or income proof here ]
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6 relative">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-5">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
              Questions Venkat Gets Asked Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
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

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display font-bold text-xl tracking-tighter text-muted-foreground">
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
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Venkat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
