import {
  type MutableRefObject,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = ({
  scrollActiveMenu,
  isButtonScrollingRef,
}: {
  scrollActiveMenu: string;
  isButtonScrollingRef: MutableRefObject<boolean>;
}) => {
  // States --------------------------------
  const [activeMenu, setActiveMenu] = useState<string>("landing");
  const [skipScrollActiveMenuUpdate, setSkipScrollActiveMenuUpdate] =
    useState<boolean>(false);

  // Declarations ---------------------------
  const activeMenuClasses = "text-white transition-all duration-500";

  // Custom Functions --------------------------------
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView();
  };

  const handleMenuClick = useCallback((menu: string) => {
    isButtonScrollingRef.current = true;
    console.log({ isButtonScrollingRef: isButtonScrollingRef.current });
    setSkipScrollActiveMenuUpdate(true);
    setActiveMenu(menu);
    scrollToSection(menu);
    isButtonScrollingRef.current = false;
    console.log({ isButtonScrollingRef: isButtonScrollingRef.current });
  }, []);

  // Effects ---------------------------
  useLayoutEffect(() => {
    if (!skipScrollActiveMenuUpdate) {
      setActiveMenu(scrollActiveMenu);
    } else {
      setSkipScrollActiveMenuUpdate(false);
    }
  }, [scrollActiveMenu, skipScrollActiveMenuUpdate]);

  // JSX --------------------------------------
  return (
    <>
      <section className="fixed top-0 z-20 h-[110px] w-full bg-[#EFEEED]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-10">
          <div
            onClick={() => handleMenuClick("landing")}
            className="logo-bg z-0 -mr-[102px] h-[70px] w-[100px] cursor-pointer rounded-lg bg-gradient-to-tr from-[#eadcd4] to-[#BEB8B4]"
          ></div>
          <div className="logo-bg-2 -z-10 -mr-[101px] h-[65px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[94px] h-[65px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[99px] h-[68px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[98px] h-[67px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[97px] h-[66px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[96px] h-[65px] w-[100px] rounded-lg"></div>
          {/* Logo ----------------- */}
          <button
            onClick={() => handleMenuClick("landing")}
            className="logo z-10 rounded-lg py-3 text-3xl font-bold text-white transition-all"
          >
            PY
          </button>
          {/* Menu ----------------- */}
          <div className="flex w-full justify-end md:hidden">
            <button className="pr-5 text-4xl">
              <RxHamburgerMenu />
            </button>
          </div>
          <div className="hidden w-full items-center justify-end gap-14 font-bold md:flex">
            {/* Menu Icon Background ------------- */}
            <div
              className={`${
                activeMenu === "work"
                  ? "left-[113px] w-[65px]"
                  : activeMenu === "about"
                  ? "left-[226px] w-[73px]"
                  : activeMenu === "play"
                  ? "left-[326px] w-[63px]"
                  : activeMenu === "resume"
                  ? "left-[447px] w-[87px]"
                  : activeMenu === "landing"
                  ? "left-0 w-0"
                  : "opacity-100"
              } relative top-0 -z-10 h-8 rounded bg-gradient-to-tr from-[#d8cbc4] to-[#BEB8B4] shadow-[0_5px_10px_0px] shadow-[#BEB8B4] transition-all duration-500 ease-in-out`}
            />
            <button
              className={`${
                (activeMenu === "work" && activeMenuClasses) || ""
              }`}
              onClick={() => handleMenuClick("work")}
            >
              WORK
            </button>
            <button
              className={`${
                (activeMenu === "about" && activeMenuClasses) || ""
              }`}
              onClick={() => handleMenuClick("about")}
            >
              ABOUT
            </button>
            <button
              className={`${
                (activeMenu === "play" && activeMenuClasses) || ""
              }`}
              onClick={() => handleMenuClick("play")}
            >
              PLAY
            </button>
            <a
              href="https://drive.google.com/file/d/1BJeWfOQVJa1BAXJDbg1w2T0x9DTJfiHb/view?usp=sharing"
              target="_blank"
            >
              <button
                className={`${
                  (activeMenu === "resume" && activeMenuClasses) || ""
                }`}
                onClick={() => handleMenuClick("resume")}
              >
                RESUME
              </button>
            </a>
            <button className="email-logo z-10 transition-all">EMAIL</button>
          </div>
        </div>
      </section>
    </>
  );
};
