export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(229,34,47,0.14),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,rgba(229,34,47,0.08),transparent_60%)]" />
    </div>
  );
}
