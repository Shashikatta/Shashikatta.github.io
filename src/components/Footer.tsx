export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 text-center text-xs text-muted">
      <img src="/logo-sk.webp" alt="Shashi Kiran logo" className="mx-auto mb-6 h-28 w-auto rounded-xl bg-white" />
      <a href="#top" className="mb-6 inline-block rounded-full border border-line px-4 py-1.5 font-semibold uppercase tracking-[0.25em] transition-colors hover:border-white/40 hover:text-white">
        ↑ Back to the top
      </a>
      <p>© {new Date().getFullYear()} Shashi Kiran Katta. Site code is MIT licensed. Text, photos and other content: all rights reserved.</p>
      <p className="mx-auto mt-2 max-w-3xl">Fan-made tribute: the Optimus Prime and Bumblebee themed backgrounds are unofficial fan content. Transformers and its characters and artwork belong to their respective owners (Hasbro / Paramount). No ownership is claimed, and this site is non-commercial and not affiliated with or endorsed by them.</p>
      <p className="mt-2">A personal portfolio in the style of a streaming series. Not affiliated with, endorsed by or connected to Netflix.</p>
    </footer>
  );
}
