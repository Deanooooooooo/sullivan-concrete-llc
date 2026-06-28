"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Facebook,
  Hammer,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Ruler,
  Send,
  Sparkles,
  SquareStack,
  Truck,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "Sullivan Concrete LLC";
const email = "Sullivanconcrete1@yahoo.com";
const phoneDisplay = "205-310-6321";
const phoneHref = "tel:2053106321";
const facebookUrl = "https://www.facebook.com/people/Sullivan-Concrete-LLC/100095142138033/";
const address = "17475 Hayes Road, Northport, AL";
const mapEmbedUrl = "https://maps.google.com/maps?q=17475%20Hayes%20Road%20Northport%20AL&z=13&output=embed";
const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Concrete work enquiry")}&body=${encodeURIComponent(
  "Hi Sullivan Concrete LLC,\n\nI would like to enquire about concrete work.\n\nName:\nPhone:\nAddress/location:\nProject type:\nApproximate size:\nMessage:"
)}`;

const services = [
  { icon: SquareStack, title: "Concrete slabs", body: "Slabs for homes, shops, additions, outbuildings and practical flatwork that needs a clean pour and strong finish." },
  { icon: Ruler, title: "Driveways and sidewalks", body: "Driveways, walks and approach areas planned around access, drainage and a finish that suits daily use." },
  { icon: Hammer, title: "Curbs and flatwork", body: "Curbs, edges, pads and general concrete work for residential and light commercial projects." },
  { icon: Sparkles, title: "Stamped concrete", body: "Decorative stamped concrete for patios, porches and outdoor areas that need texture, character and durability." },
];

const gallery = [
  { src: "concrete-hero.jpg", title: "Stamped concrete finish", body: "Real Sullivan Concrete project photo showing decorative stamped concrete work in progress." },
  { src: "concrete-wide.jpg", title: "Large slab project", body: "Large-scale slab and site concrete work for practical residential and light commercial spaces." },
  { src: "sullivan-logo.jpg", title: "Curved driveway and walk", body: "Exterior concrete paths and driveway work shaped around the home." },
];

const proof = [
  "Concrete slabs, sidewalks, driveways, curbs and stamped concrete for homes and job sites.",
  "Clear enquiry details help Sullivan understand access, size, finish and timing before pricing.",
  "Northport contact routes are available by phone and email for estimate requests.",
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -58]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.04, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gsap-rise", {
        y: 42,
        opacity: 0,
        duration: 0.82,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 72%" },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: businessName,
    image: assets("concrete-hero.jpg"),
    url: "https://deanooooooooo.github.io/sullivan-concrete-llc/",
    telephone: phoneDisplay,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "17475 Hayes Road",
      addressLocality: "Northport",
      addressRegion: "AL",
      addressCountry: "US",
    },
    areaServed: ["Northport", "Tuscaloosa County", "Alabama"],
    sameAs: [facebookUrl],
  };

  return (
    <main ref={main} className="min-h-screen overflow-hidden text-iron">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-[#171510]/94 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#d6b36a] text-[#171510]"><Truck size={26} /></span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-black uppercase">Sullivan Concrete LLC</span>
              <span className="text-sm font-bold text-white/68">Northport concrete contractor</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-base font-black text-white/86 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a href={mailtoUrl}>
            <Button className="min-h-11 rounded-lg bg-[#d6b36a] px-4 text-[#171510] hover:bg-white">
              <Mail size={17} /> <span className="hidden sm:inline">Send enquiry</span><span className="sm:hidden">Enquire</span>
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="hero-clip relative min-h-[1040px] bg-[#171510] pt-24 text-white md:min-h-[850px]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src={assets("concrete-hero.jpg")} alt="Stamped concrete work by Sullivan Concrete LLC" fill priority className="object-cover opacity-90" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#171510]/96 via-[#171510]/72 to-[#171510]/30" />
        <div className="room-vignette absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-28 pt-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pt-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/18 bg-black/58 px-4 py-2 text-xs font-black uppercase text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                <BadgeCheck size={16} /> Concrete contractor in Northport, AL
              </p>
              <h1 className="max-w-4xl text-[clamp(2.85rem,5.8vw,5.75rem)] font-black leading-[0.97]">
                Slabs, driveways and stamped concrete built right.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
                Sullivan Concrete LLC handles concrete slabs, sidewalks, driveways, curbs and stamped work for homes and job sites around Northport.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={mailtoUrl}><Button className="rounded-lg bg-[#d6b36a] text-[#171510] hover:bg-white"><Mail size={18} /> Start an enquiry</Button></a>
                <a href={phoneHref}><Button variant="secondary" className="rounded-lg border-white/18 bg-white/10 text-white hover:bg-white/18">Call {phoneDisplay}</Button></a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Slabs", "Driveways", "Stamped work"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/14 bg-black/34 px-4 py-3 text-sm font-black text-white/84 backdrop-blur">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-2xl border border-white/14 bg-[#171510]/88 p-5 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#d6b36a]">Concrete enquiry</p>
                  <h2 className="mt-1 text-3xl font-black leading-tight">Tell Sullivan what needs pouring.</h2>
                </div>
                <MessageSquareText className="text-[#d6b36a]" size={30} />
              </div>
              <form action={`mailto:${email}`} method="post" encType="text/plain" className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Name<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition placeholder:text-iron/42 focus:ring-4" name="name" placeholder="Your name" required /></label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Email<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition placeholder:text-iron/42 focus:ring-4" name="email" type="email" placeholder="you@email.com" required /></label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Phone<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition placeholder:text-iron/42 focus:ring-4" name="phone" placeholder="Best number" /></label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">Location<input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition placeholder:text-iron/42 focus:ring-4" name="location" placeholder="Northport..." /></label>
                </div>
                <label className="grid gap-1.5 text-sm font-black text-white/78">Work type<select className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition focus:ring-4" name="project_type" defaultValue="Concrete slab"><option>Concrete slab</option><option>Driveway</option><option>Sidewalk</option><option>Curb work</option><option>Stamped concrete</option><option>Not sure yet</option></select></label>
                <label className="grid gap-1.5 text-sm font-black text-white/78">Message<textarea className="min-h-28 rounded-lg border border-white/12 bg-white px-3 py-3 text-base font-bold text-iron outline-none ring-[#d6b36a]/45 transition placeholder:text-iron/42 focus:ring-4" name="message" placeholder="Tell them the rough size, access, finish and timing." required /></label>
                <Button className="min-h-13 rounded-lg bg-[#d6b36a] text-base font-black text-[#171510] hover:bg-white"><Send size={18} /> Compose email enquiry</Button>
                <p className="text-sm font-semibold leading-6 text-white/62">Opens your email app addressed to {email}. For urgent questions, call {phoneDisplay}.</p>
              </form>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-[#f2f0ea] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#8a6a2f]">Concrete services</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Flatwork, stamped finishes and everyday concrete jobs.</h2>
          </Reveal>
          <div className="services-grid mt-12 grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="gsap-rise rounded-lg border-0 bg-white shadow-premium">
                <CardContent className="p-6"><service.icon className="mb-7 text-[#8a6a2f]" size={34} /><h3 className="text-2xl font-black">{service.title}</h3><p className="mt-4 text-base font-semibold leading-7 text-iron/64">{service.body}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#171510] px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl"><p className="text-sm font-black uppercase text-[#d6b36a]">Project visuals</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Concrete finishes, flatwork and outdoor pours.</h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-lg bg-white text-iron shadow-[0_26px_80px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[4/3]"><Image src={assets(item.src)} alt={item.title} fill className="object-cover" /></div>
                <div className="p-5"><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-iron/62">{item.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase text-[#8a6a2f]">Contact</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Request a concrete estimate in Northport.</h2>
              <div className="mt-8 grid gap-3">
                <a className="flex items-center gap-3 rounded-lg bg-[#f2f0ea] p-4 font-black shadow-premium" href={mailtoUrl}><Mail className="text-[#8a6a2f]" size={22} /> {email}</a>
                <a className="flex items-center gap-3 rounded-lg bg-[#f2f0ea] p-4 font-black shadow-premium" href={phoneHref}><Phone className="text-[#8a6a2f]" size={22} /> {phoneDisplay}</a>
                <div className="flex items-center gap-3 rounded-lg bg-[#f2f0ea] p-4 font-black shadow-premium"><MapPin className="text-[#8a6a2f]" size={22} /> {address}</div>
              </div>
              <div className="mt-8 grid gap-4">
                {proof.map((item)=><div key={item} className="flex gap-3 rounded-lg border border-iron/10 bg-white p-4"><CheckCircle2 className="mt-0.5 shrink-0 text-[#8a6a2f]" size={22} /><p className="font-bold leading-7 text-iron/72">{item}</p></div>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg bg-white shadow-premium"><iframe title="Sullivan Concrete LLC map" src={mapEmbedUrl} className="h-[620px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#171510] px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><p className="text-lg font-black">{businessName}</p><p className="text-sm font-semibold text-white/58">{address}</p></div>
          <div className="flex flex-wrap gap-3">
            <a aria-label="Email Sullivan Concrete LLC" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d6b36a] hover:text-[#171510]" href={mailtoUrl}><Mail size={20} /></a>
            <a aria-label="Call Sullivan Concrete LLC" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d6b36a] hover:text-[#171510]" href={phoneHref}><Phone size={20} /></a>
            <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d6b36a] hover:text-[#171510]" href={facebookUrl} target="_blank" rel="noreferrer"><Facebook size={20} /></a>
            <a aria-label="Map" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#d6b36a] hover:text-[#171510]" href="#contact"><MapPin size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
