import { useEffect, useMemo, useState } from "react";
import { useMotionValueEvent, useSpring } from "framer-motion";
import { seasons } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const SWEEP = 240;
const START = -SWEEP / 2;

export default function TimeMachine() {
  const list = useMemo(() => [...seasons].reverse(), []);
  const label = (x: (typeof seasons)[number]) => x.period.split(" – ")[0];
  const [active, setActive] = useState(list.length - 1);
  const angle = (i: number) => START + (list.length === 1 ? SWEEP / 2 : (i / (list.length - 1)) * SWEEP);
  const s = list[active];
  const spring = useSpring(angle(list.length - 1), { stiffness: 70, damping: 14 });
  const [deg, setDeg] = useState(angle(list.length - 1));
  useMotionValueEvent(spring, "change", setDeg);
  useEffect(() => {
    spring.set(angle(active));
  }, [active, spring]);

  return (
    <section
      id="journey"
      className="relative mx-auto max-w-[1400px] scroll-mt-20 overflow-hidden px-4 py-20 sm:px-8"
    >
      <Reveal>
        <SectionTitle kicker="Career timeline" title="My Journey" />
        <p className="-mt-4 mb-8 max-w-xl text-sm text-muted">Move across the page, or tap a year, to travel through the roles.</p>
      </Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <svg viewBox="-200 -200 400 400" className="h-full w-full" role="img" aria-label={`Timeline clock pointing at ${s.year}`}>
            <circle r="188" fill="rgba(255,255,255,0.03)" stroke="rgba(var(--accent-rgb),0.5)" strokeWidth="2" />
            <circle r="150" fill="none" stroke="rgba(255,255,255,0.08)" />
            {Array.from({ length: 49 }).map((_, k) => {
              const a = ((START + (k / 48) * SWEEP - 90) * Math.PI) / 180;
              const big = k % 4 === 0;
              const r1 = big ? 160 : 170;
              return <line key={k} x1={Math.cos(a) * r1} y1={Math.sin(a) * r1} x2={Math.cos(a) * 180} y2={Math.sin(a) * 180} stroke="rgba(255,255,255,0.35)" strokeWidth={big ? 2 : 1} />;
            })}
            {list.map((x, i) => {
              const a = ((angle(i) - 90) * Math.PI) / 180;
              return (
                <g key={i} className="cursor-pointer" onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                  <circle cx={Math.cos(a) * 132} cy={Math.sin(a) * 132} r="18" fill="transparent" />
                  <text x={Math.cos(a) * 132} y={Math.sin(a) * 132 + 5} textAnchor="middle" className={i === active ? "fill-white" : "fill-white/40"} style={{ fontSize: 13, fontWeight: 700 }}>
                    {label(x)}
                  </text>
                </g>
              );
            })}
            <g transform={`rotate(${deg})`}>
              <line x1="0" y1="14" x2="0" y2="-112" stroke="rgb(var(--accent-rgb))" strokeWidth="4" strokeLinecap="round" />
              <polygon points="0,-122 -7,-102 7,-102" fill="rgb(var(--accent-rgb))" />
            </g>
            <circle r="9" fill="rgb(var(--accent-rgb))" />
            <circle r="3" fill="#0b0b0f" />
            <text y="64" textAnchor="middle" className="fill-white font-display" style={{ fontSize: 54, letterSpacing: 2 }}>
              {s.year}
            </text>
          </svg>
        </div>
        <div className="grid">
          {list.map((x, i) => (
            <div key={i} aria-hidden={i !== active} className={`col-start-1 row-start-1 transition-opacity duration-300 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{x.period}</p>
              <h3 className="mt-2 font-display text-5xl leading-none tracking-wide sm:text-6xl">{x.role}</h3>
              <p className="mt-2 text-lg text-white/70">{x.place}</p>
              <ul className="mt-6 space-y-4">
                {x.episodes.slice(0, 3).map((e) => (
                  <li key={e.title} className="rounded-lg border border-line bg-panel/70 p-4 backdrop-blur">
                    <p className="font-semibold">{e.title}</p>
                    <p className="mt-1 text-sm text-muted">{e.text}</p>
                    <p className="mt-2 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                          {t}
                        </span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {list.map((x, i) => (
          <button
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${i === active ? "bg-white text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
          >
            {label(x)}
          </button>
        ))}
      </div>
    </section>
  );
}
