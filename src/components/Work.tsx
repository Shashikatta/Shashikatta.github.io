import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workVideos, type WorkVideo } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const categories = ["All", ...Array.from(new Set(workVideos.map((v) => v.category)))];

function Player({ v, onClose }: { v: WorkVideo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={v.title}
      className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close video" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/25">
        ✕
      </button>
      <div className="aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${v.youtube}?autoplay=1&rel=0`}
          title={v.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<WorkVideo | null>(null);
  const list = workVideos.filter((v) => filter === "All" || v.category === filter);
  return (
    <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-4 py-20 sm:px-8">
      <Reveal>
        <SectionTitle kicker="Showreel" title="Selected Work" />
      </Reveal>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${filter === c ? "bg-white text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => {
          const ready = Boolean(v.youtube || v.url);
          return (
            <button
              key={v.title}
              type="button"
              disabled={!ready}
              onClick={() => (v.youtube ? setOpen(v) : window.open(v.url, "_blank", "noopener"))}
              aria-label={ready ? `Play ${v.title}` : `${v.title}, video coming soon`}
              className="group text-left disabled:cursor-default"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-gradient-to-br from-white/10 to-white/[0.02]">
                {v.thumb && <img src={v.thumb} alt="" className="absolute inset-0 h-full w-full object-cover" />}
                <span className={`absolute inset-0 grid place-items-center transition-transform ${ready ? "group-hover:scale-110" : ""}`}>
                  <span className={`grid h-14 w-14 place-items-center rounded-full text-xl ${ready ? "bg-accent text-white" : "bg-white/10 text-white/50"}`}>▶</span>
                </span>
                {!ready && <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">Video coming soon</span>}
              </div>
              <p className="mt-3 font-semibold">{v.title}</p>
              <p className="text-sm text-muted">{v.category}</p>
            </button>
          );
        })}
      </div>
      <AnimatePresence>{open && <Player v={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
