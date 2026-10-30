import { useState } from "react";
import { showreel } from "../data/portfolio";

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(showreel.youtube);
  return (
    <section id="showreel" className="relative w-full scroll-mt-20 bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Showreel</p>
        <h2 className="mt-1 mb-8 font-display text-5xl tracking-wide sm:text-7xl">{showreel.title}</h2>
      </div>
      <div className="relative mx-auto aspect-video w-full max-w-[1760px] overflow-hidden bg-gradient-to-br from-white/10 to-black sm:rounded-xl">
        {playing && ready ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${showreel.youtube}?autoplay=1&rel=0`}
            title={showreel.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            disabled={!ready}
            onClick={() => setPlaying(true)}
            aria-label={ready ? "Play showreel" : "Showreel coming soon"}
            className="group absolute inset-0 grid place-items-center disabled:cursor-default"
          >
            {showreel.poster && <img src={showreel.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />}
            <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7))]" />
            <span className={`relative grid h-24 w-24 place-items-center rounded-full text-3xl transition-transform ${ready ? "bg-accent text-white group-hover:scale-110" : "bg-white/10 text-white/50"}`}>▶</span>
            {!ready && <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Showreel coming soon</span>}
          </button>
        )}
      </div>
    </section>
  );
}
