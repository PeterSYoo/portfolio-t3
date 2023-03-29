import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "~/components/about-section/AboutSection.components";
import { FoooterSection } from "~/components/footer-section/FoooterSection.components";
import { Header } from "~/components/Header.components";
import { LandingSection } from "~/components/landing-section/LandingSection.components";
import { PlaySection } from "~/components/play-section/PlaySection.components";
import { WorkSection } from "~/components/work-section/WorkSection.components";

const Home: NextPage = () => {
  // States --------------------------------------
  const [scrollActiveMenu, setScrollActiveMenu] = useState<string>("landing");

  // Refs ----------------------------------
  const sectionRefs = {
    landing: useRef<HTMLElement>(null),
    work: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    play: useRef<HTMLElement>(null),
  };

  const isButtonScrollingRef = useRef<boolean>(false);

  // Custom Functions --------------------------------------
  const handleScroll = () => {
    if (!isButtonScrollingRef.current) {
      for (const [sectionId, sectionRef] of Object.entries(sectionRefs)) {
        const section = sectionRef.current;
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= window.innerHeight / 2) {
            setScrollActiveMenu(sectionId);
          }
        }
      }
    }
  };

  // Effects ------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      for (const [sectionId, sectionRef] of Object.entries(sectionRefs)) {
        const section = sectionRef.current;
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= window.innerHeight / 2) {
            setScrollActiveMenu(sectionId);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    isButtonScrollingRef.current = false;
  }, [scrollActiveMenu]);

  // JSX ---------------------------------------------------
  return (
    <>
      <Header
        scrollActiveMenu={scrollActiveMenu}
        isButtonScrollingRef={isButtonScrollingRef}
      />
      <main className="flex w-full flex-col">
        {/* Landing Section --------------------------- */}
        <LandingSection landingRef={sectionRefs.landing} />
        {/* Work Section ------------------------------ */}
        <WorkSection workRef={sectionRefs.work} />
        {/* About Section ----------------------------- */}
        <AboutSection aboutRef={sectionRefs.about} />
        {/* Play Section ------------------------------ */}
        <PlaySection playRef={sectionRefs.play} />
        {/* Footer Section ---------------------------- */}
        <FoooterSection />
      </main>
    </>
  );
};

export default Home;
