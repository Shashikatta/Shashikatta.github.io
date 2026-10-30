export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.3] [background-image:var(--bg-img)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(var(--accent-rgb),0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_85%,rgba(var(--glow2-rgb),0.22),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(120deg,rgb(var(--accent-rgb))_0_1px,transparent_1px_46px),repeating-linear-gradient(60deg,rgb(var(--accent-rgb))_0_1px,transparent_1px_46px)]" />
    </div>
  );
}
