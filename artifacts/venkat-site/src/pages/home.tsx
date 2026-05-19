import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Award, Zap } from "lucide-react";
import { SiYoutube, SiInstagram, SiThreads } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter">
            VENKAT<span className="text-primary">.</span>
          </div>
          <Button variant="default" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 bg-glow">
            Get The Blueprint
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
              No Experience. No Code.
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.1] tracking-tight">
              Start an AI Business in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">2026.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed">
              I'm Venkat. I build 7-figure businesses. Now, I'm giving you the exact blueprint to launch your own AI or software agency in 30 days.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 bg-glow">
                Start Free Training
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-border hover:bg-muted">
                See Results
              </Button>
            </div>
          </motion.div>

          {/* Hero Photo Placeholder */}
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

      {/* Stats / Social Proof */}
      <section className="py-12 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Inc 5000 Award", value: "3x Winner", icon: Award },
              { label: "Agency Revenue", value: "7-Figure", icon: TrendingUp },
              { label: "Active Clients", value: "300+", icon: Users },
              { label: "GoHighLevel", value: "Gold SaaS", icon: Zap },
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={stat.label} 
                className="flex flex-col items-center justify-center text-center space-y-2 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mb-2" />
                <div className="text-3xl font-black font-display text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                Who is Venkat?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I started my digital marketing agency when I was young, broke, and looking for a way out. No connections, no rich parents, just a laptop and an obsession with figuring out how to build a real business.
                </p>
                <p>
                  Today, that agency is a 7-figure powerhouse. We've been recognized by the <strong className="text-foreground font-bold">Inc 5000 Fastest-Growing Companies</strong> three years in a row, and we've earned the <strong className="text-foreground font-bold">Gold GoHighLevel SaaS Award</strong>.
                </p>
                <p>
                  My mission now? To help ambitious people bypass the years of trial and error. I help small to medium businesses grow with online marketing, and I teach entrepreneurs how to launch their own profitable AI and software agencies.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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

      {/* What Venkat Does / Video Section */}
      <section className="py-24 md:py-32 px-6 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              What I Actually Do
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I don't just teach theory. I run a highly profitable digital marketing agency managing over 300 active client accounts daily.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border bg-card shadow-2xl flex flex-col items-center justify-center group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            
            <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
              <Play className="w-10 h-10 ml-2" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold relative z-10">
              [ Venkat's Video Coming Soon ]
            </h3>
            <p className="text-muted-foreground mt-4 relative z-10">
              Upload your main VSL (Video Sales Letter) here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offer / Free Training */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-primary/30 rounded-3xl p-8 md:p-16 text-center shadow-[0_0_50px_-12px_rgba(var(--primary),0.2)]"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-widest uppercase mb-6">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              Get My Complete AI Agency Training For Free
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This is the exact system I use to scale. Normally valued at <span className="line-through opacity-50">$799</span>, you get it 100% FREE when you start a GoHighLevel trial through my partner link.
            </p>
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 bg-glow w-full md:w-auto">
              Claim Your Free Training Now
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Step-by-step videos. Done-for-you templates. Private community access.
            </p>
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
                { icon: SiYoutube, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: SiInstagram, href: "#" },
                { icon: SiThreads, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
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
