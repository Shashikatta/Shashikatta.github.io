import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { person, profiles, type ProfileId } from "../data/portfolio";
import Orbit from "./Orbit";
import HeroMeta from "./HeroMeta";
import Reel from "./Reel";

const cards = [
  { tag: "Mission", text: "Turnaround time cut by ~25%", pos: "left-[-48%] top-[12%]", depth: 18 },
  { tag: "Crew", text: "Team management", pos: "right-[-4%] top-[6%]", depth: 28 },
];

export default function Hero({ profile }: { profile: ProfileId }) {
  const p = profiles[profile];
  const [reel, setReel] = useState(false);
  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
        e.currentTarget.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
      }}
      className="relative flex min-h-screen flex-col items-stretch overflow-hidden xl:flex-row xl:items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(229,34,47,0.55),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-ink to-transparent" />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 order-2 mx-auto mt-6 aspect-[812/1273] w-[62vw] max-w-[300px] md:w-[44vw] md:max-w-[380px] xl:absolute xl:inset-x-auto xl:bottom-0 xl:right-[5vw] xl:order-none xl:mx-0 xl:mt-0 xl:w-[min(calc(76vh*0.638),calc(100vw-760px))] xl:max-w-none"
      >
        <div className="pointer-events-none absolute inset-x-[-4%] top-[8%] bottom-[18%] z-[1] rounded-full border border-accent/40 shadow-[0_0_80px_10px_rgba(229,34,47,0.35),inset_0_0_60px_rgba(229,34,47,0.25)]" />
        <img src={person.photo} alt="Portrait of Shashi Kiran" className="relative z-10 h-full w-full object-contain object-bottom" />
        <Orbit />
        {cards.map((c) => (
          <div
            key={c.tag}
            className={`pointer-events-none absolute z-30 hidden rounded-lg border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-md xl:block ${c.pos}`}
            style={{ transform: `translate(calc(var(--mx, 0) * ${-c.depth}px), calc(var(--my, 0) * ${-c.depth}px))` }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent">{c.tag}</p>
            <p className="mt-0.5 text-xs font-semibold text-white/90">{c.text}</p>
          </div>
        ))}
      </motion.div>
      <div className="relative z-10 order-1 mx-auto w-full max-w-[1760px] px-4 pt-24 sm:px-8 sm:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent">Mission log</p>
          <h1 className="font-display text-7xl leading-[0.9] tracking-wide sm:text-9xl">
            <span className="name-shimmer">{person.series}</span>
            <span className="block text-4xl text-white/80 sm:text-6xl">{person.subtitle}</span>
          </h1>
          <p className="mt-6 text-lg font-semibold">{person.headline}</p>
          <p className="mt-2 text-muted">{p.tagline}</p>
          <HeroMeta />
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => setReel(true)} className="cursor-play rounded bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-white/80">
              ▶ Play Intro
            </button>
            <a href={`#${p.ctaTarget}`} className="rounded bg-black/60 px-6 py-3 font-semibold ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/15">
              {p.cta}
            </a>
            <a href="#about" className="rounded bg-white/20 px-6 py-3 font-semibold backdrop-blur transition-colors hover:bg-white/30">
              ⓘ More info
            </a>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>{reel && <Reel onClose={() => setReel(false)} />}</AnimatePresence>
    </section>
  );
}
