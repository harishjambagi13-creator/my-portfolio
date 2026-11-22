"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Send, X, Sparkles, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type Project = (typeof portfolioData.projects)[number];

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 250);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative text-zinc-100 selection:bg-red-600 selection:text-white">
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060608] px-6 text-center"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-red-500">
              THE DEVELOPER WHO TURNS IDEAS INTO SOFTWARE
            </p>
            <div className="mt-4 text-7xl font-black tabular-nums tracking-tighter text-white sm:text-8xl">
              {progress}
              <span className="text-red-500">%</span>
            </div>
            <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-red-600 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-10 h-96 w-96 animate-pulse rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-red-800/15 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-widest">
            {portfolioData.name}
            <span className="text-red-500">.</span>
          </a>
          <nav className="hidden gap-7 text-xs font-semibold tracking-widest text-zinc-400 md:flex">
            <a href="#projects" className="transition hover:text-white">PROJECTS</a>
            <a href="#about" className="transition hover:text-white">ABOUT</a>
            <a href="#services" className="transition hover:text-white">SERVICES</a>
            <a href="#skills" className="transition hover:text-white">SKILLS</a>
            <a href="#contact" className="transition hover:text-white">CONTACT</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold tracking-wider text-white transition hover:bg-red-500"
          >
            HIRE ME
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-red-400">
            <Sparkles className="h-3.5 w-3.5" /> AVAILABLE FOR PROJECTS & ROLES
          </div>
          <p className="text-xs font-bold tracking-[0.25em] text-red-500">
            {portfolioData.role}
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            HI, I&apos;M <span className="text-red-500">{portfolioData.name}</span>. I BUILD MODERN APPS.
          </h1>
          <p className="mt-5 max-w-lg text-base text-zinc-400">{portfolioData.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-red-600 px-6 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-red-500"
            >
              EXPLORE MY WORK
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-white transition hover:border-red-500/50"
            >
              GET IN TOUCH
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ rotate: 1.5, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative mx-auto flex h-80 w-72 items-end justify-center overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/50 via-zinc-900 to-zinc-950 crimson-glow sm:h-96 sm:w-80"
        >
          <img
            src={portfolioData.heroImage}
            alt={portfolioData.fullName}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent" />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-4xl font-black text-red-500">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold tracking-widest text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            PROJECTS<span className="text-red-500">.</span>
          </h2>
          <p className="text-xs text-zinc-500">Click any slide to inspect</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition hover:-translate-y-1.5 hover:border-red-500/50"
            >
              <div className="relative h-44 w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-red-400 backdrop-blur-sm">
                  {project.id} • {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-red-400">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-1 text-xs font-bold tracking-wider text-red-400">
                  VIEW SLIDE & LINKS <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-black">
              ABOUT ME<span className="text-red-500">.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{portfolioData.aboutBio}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold hover:border-red-500"
              >
                GITHUB
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold hover:border-red-500"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <div className="mx-auto w-64 sm:w-72">
            <div className="rotate-2 overflow-hidden rounded-2xl border border-red-500/30 bg-zinc-950 p-2 shadow-2xl transition hover:rotate-0">
              <img
                src={portfolioData.aboutImage}
                alt={portfolioData.fullName}
                className="h-72 w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">
          TECHNICAL SKILLS<span className="text-red-500">.</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {portfolioData.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500">
                <Layers className="h-4 w-4" /> {group.category.toUpperCase()}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-semibold text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">
          SERVICES & PRICING<span className="text-red-500">.</span>
        </h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-zinc-900/40">
          {portfolioData.services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between gap-2 p-6 transition hover:bg-white/[0.02] sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{service.name}</h3>
                <p className="text-sm text-zinc-400">{service.desc}</p>
              </div>
              <div className="text-sm font-extrabold text-red-400">{service.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-2xl border border-red-500/20 bg-zinc-900/50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-black">
              LET&apos;S WORK TOGETHER<span className="text-red-500">.</span>
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Have a project idea or need a custom web or AI build? Reach out directly.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 hover:text-red-400">
                <Mail className="h-4 w-4 text-red-500" /> {portfolioData.email}
              </a>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-red-400">
                <Github className="h-4 w-4 text-red-500" /> GitHub Profile
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-red-400">
                <Linkedin className="h-4 w-4 text-red-500" /> LinkedIn Profile
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
            <textarea
              rows={4}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-red-500"
            >
              <Send className="h-4 w-4" />
              {submitted ? "MESSAGE SENT!" : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-red-500/30 bg-zinc-950"
            >
              <div className="relative h-56 w-full bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 rounded-lg bg-black/70 p-1.5 text-zinc-300 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold text-red-500">{selectedProject.category}</span>
                <h3 className="mt-1 text-2xl font-black">{selectedProject.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {selectedProject.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-red-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-500"
                  >
                    LIVE DEMO <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-white/15 px-5 py-2.5 text-xs font-bold text-white hover:border-red-500/50"
                  >
                    SOURCE CODE <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
