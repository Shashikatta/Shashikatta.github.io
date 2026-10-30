import { useCallback, useEffect, useState, type ReactElement } from "react";
import Intro from "./components/Intro";
import Backdrop from "./components/Backdrop";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { profiles, type ProfileId } from "./data/portfolio";
import ProfilePicker from "./components/ProfilePicker";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ContinueExploring from "./components/ContinueExploring";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import TopPicks from "./components/TopPicks";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import OffDuty from "./components/OffDuty";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function wantsIntro(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function App() {
  const [profile, setProfile] = useState<ProfileId | null>(null);

  useEffect(() => {
    if (!profile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis();
    let raf = requestAnimationFrame(function tick(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [profile]);

  const [intro, setIntro] = useState(wantsIntro);
  const endIntro = useCallback(() => setIntro(false), []);

  const choose = (p: ProfileId) => {
    window.scrollTo(0, 0);
    setProfile(p);
  };

  if (!profile)
    return (
      <>
        <ProfilePicker onPick={choose} />
        <AnimatePresence>{intro && <Intro onDone={endIntro} />}</AnimatePresence>
      </>
    );

  const sections: Record<string, ReactElement> = {
    work: <Work key="work" />,
    journey: <Journey key="journey" />,
    projects: (
      <div key="projects">
        <Projects profile={profile} />
        <TopPicks />
      </div>
    ),
    skills: <Skills key="skills" profile={profile} />,
    achievements: <Achievements key="achievements" />,
    resume: <Resume key="resume" />,
  };

  return (
    <>
      <Backdrop />
      <Nav profile={profile} onSelect={choose} onSwitch={() => setProfile(null)} />
      <main>
        <Hero profile={profile} />
        <ContinueExploring profile={profile} />
        <About />
        {profiles[profile].order.map((id) => sections[id])}
        <OffDuty />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
