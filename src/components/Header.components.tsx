import {
  type MutableRefObject,
  useCallback,
  useLayoutEffect,
  useState,
  useContext,
} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IsWorkContext } from "~/contexts/IsWorkContext";

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
  const { setIsWork } = useContext(IsWorkContext);

  // Declarations ---------------------------
  const activeMenuClasses = "text-white transition-all duration-1000";

  // Custom Functions --------------------------------
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView();
  };

  const handleMenuClick = useCallback((menu: string) => {
    setIsWork(false);
    if (menu === "resume") {
      window.open(
        "https://drive.google.com/file/d/1FtQO7NeQUfQWxV0m9Cp7zW6TGIbHq5Y2/view?usp=sharing",
        "_blank"
      );
      setActiveMenu(menu);
    } else if (menu === "email") {
      window.open("mailto:petersyoox@gmail.com", "_blank");
      setActiveMenu(menu);
    } else {
      isButtonScrollingRef.current = true;
      setSkipScrollActiveMenuUpdate(true);
      setActiveMenu(menu);
      scrollToSection(menu);
      isButtonScrollingRef.current = false;
    }
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
      <section
        id="header"
        className="fixed top-0 z-30 h-[110px] w-full bg-[#EFEEED] bg-opacity-90 pr-5"
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-10">
          <div
            onClick={() => handleMenuClick("landing")}
            className="logo-bg z-0 -mr-[102px] h-[70px] w-[100px] cursor-pointer rounded-lg bg-gradient-to-tr from-[#c4c4c4] to-[#7e8083]"
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
                  : activeMenu === "email"
                  ? "left-[558px] w-[75px]"
                  : activeMenu === "landing"
                  ? "left-0 w-0"
                  : "opacity-100"
              } relative top-0 -z-10 h-8 rounded bg-gradient-to-tr from-[#c4c4c4] to-[#7e8083] shadow shadow-[#7e8083] transition-all duration-500 ease-in-out`}
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
            <button
              className={`${
                (activeMenu === "resume" && activeMenuClasses) || ""
              }`}
              onClick={() => handleMenuClick("resume")}
            >
              RESUME
            </button>
            <button
              className={`${
                (activeMenu === "email" && activeMenuClasses) || ""
              }`}
              onClick={() => handleMenuClick("email")}
            >
              EMAIL
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
