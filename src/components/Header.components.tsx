import { useTheme } from "next-themes";
import {
  type MutableRefObject,
  useCallback,
  useLayoutEffect,
  useState,
  useContext,
  useEffect,
} from "react";
import {
  BsFillSunFill,
  BsMoonStars,
  BsMoonStarsFill,
  BsSun,
} from "react-icons/bs";
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
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const { isWork, setIsWork } = useContext(IsWorkContext);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  // Constants -------------------------------
  const activeMenuClasses = "text-gray-600 transition-all duration-1000";
  const themeAfter =
    "after:absolute after:h-8 after:w-11 after:rounded-l-md after:rounded-r-none after:bg-white/30 after:transition-all after:content-[''] after:left-[0px] after:border-r after:border-gray-400 after:duration-500 after:ease-in-out";
  const themePeerCheckedAfter =
    "peer-checked:after:translate-x-[45px] peer-checked:after:rounded-r-md peer-checked:after:rounded-l-none peer-checked:after:border-l peer-checked:after:border-gray-400";

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

  useEffect(() => {
    if (isDark) {
      setTheme("dark");
    } else if (!isDark) {
      setTheme("light");
    }
  }, [isDark]);

  // JSX --------------------------------------
  return (
    <>
      <section
        id="header"
        className={`fixed top-0 z-40 h-[90px] w-full bg-[#EFEEED] pr-5 transition-all duration-500 ease-in-out dark:bg-[#2e2e2e] ${
          (isWork === true &&
            "bg-opacity-0 backdrop-blur transition-all duration-1000 dark:bg-opacity-0") ||
          ""
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-10">
          {/* Logo ----------------- */}
          <button
            onClick={() => handleMenuClick("landing")}
            className={`${
              (isWork && "dark:text-gray-600") || ""
            } flex w-[42px] flex-col rounded bg-gradient-to-tr from-[#e6e6e6] to-[#aeb0b3] px-2 py-1 text-lg font-bold text-gray-600 shadow-sm shadow-black`}
          >
            <p
              style={{
                textShadow:
                  "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
              }}
            >
              P
            </p>
            <p
              style={{
                textShadow:
                  "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
              }}
              className="-mt-2 flex w-full justify-end"
            >
              Y
            </p>
          </button>
          {/* Menu ----------------- */}
          <div className="flex w-full justify-end md:hidden">
            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              className="text-3xl"
            >
              <RxHamburgerMenu />
            </button>
          </div>
          <div
            className={`${
              (isWork &&
                "transition-all duration-1000 ease-in-out dark:text-gray-700") ||
              ""
            } hidden w-full items-center justify-end gap-14 rounded-lg font-semibold text-gray-700 dark:text-gray-300 md:flex`}
          >
            {/* Menu Icon Background ------------- */}
            <div
              className={`${
                activeMenu === "work"
                  ? "left-[116px] w-[70px]"
                  : activeMenu === "about"
                  ? "left-[231px] w-[75px]"
                  : activeMenu === "play"
                  ? "left-[337px] w-[70px]"
                  : activeMenu === "resume"
                  ? "left-[458px] w-[85px]"
                  : activeMenu === "email"
                  ? "left-[572px] w-[75px]"
                  : activeMenu === "landing"
                  ? "left-0 w-0"
                  : "opacity-100"
              } relative top-0 -z-10 h-8 rounded bg-gradient-to-tr from-[#e6e6e6] to-[#aeb0b3] shadow-sm shadow-black transition-all duration-500 ease-in-out`}
            />
            <button
              style={
                (activeMenu === "work" && {
                  textShadow:
                    "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
                }) ||
                {}
              }
              className={`${
                (activeMenu === "work" && activeMenuClasses) || ""
              } tracking-wider`}
              onClick={() => handleMenuClick("work")}
            >
              WORK
            </button>
            <button
              style={
                (activeMenu === "about" && {
                  textShadow:
                    "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
                }) ||
                {}
              }
              className={`${
                (activeMenu === "about" && activeMenuClasses) || ""
              } tracking-wider`}
              onClick={() => handleMenuClick("about")}
            >
              ABOUT
            </button>
            <button
              style={
                (activeMenu === "play" && {
                  textShadow:
                    "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
                }) ||
                {}
              }
              className={`${
                (activeMenu === "play" && activeMenuClasses) || ""
              } tracking-wider`}
              onClick={() => handleMenuClick("play")}
            >
              PLAY
            </button>
            <button
              style={
                (activeMenu === "resume" && {
                  textShadow:
                    "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
                }) ||
                {}
              }
              className={`${
                (activeMenu === "resume" && activeMenuClasses) || ""
              } tracking-wider`}
              onClick={() => handleMenuClick("resume")}
            >
              RESUME
            </button>
            <button
              style={
                (activeMenu === "email" && {
                  textShadow:
                    "0.1px 0.1px 0 #E8ECF1, 0.2px 0.2px 0 #E8ECF1, 0.3px 0.3px 0 #E8ECF1, 0.4px 0.4px 0 #E8ECF1, 0.5px 0.5px 0 #E8ECF1",
                }) ||
                {}
              }
              className={`${
                (activeMenu === "email" && activeMenuClasses) || ""
              } tracking-wider`}
              onClick={() => handleMenuClick("email")}
            >
              EMAIL
            </button>
            {/* Light | Dark Theme -------------------------------------------- */}
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                onChange={(event) =>
                  event.target.checked ? setIsDark(true) : setIsDark(false)
                }
                type="checkbox"
                className="peer sr-only"
              />
              <div
                className={`peer flex items-center justify-between gap-6 rounded-md bg-gradient-to-tr from-[#e6e6e6] to-[#aeb0b3] py-[7px] px-3 text-xl shadow-sm shadow-black peer-focus:outline-none ${themePeerCheckedAfter} ${themeAfter} dark:text-gray-600`}
              >
                {!isDark ? (
                  <BsFillSunFill className="z-10" />
                ) : (
                  <BsSun className="z-10" />
                )}
                {isDark ? (
                  <BsMoonStarsFill className="z-10" />
                ) : (
                  <BsMoonStars className="z-10" />
                )}
              </div>
            </label>
          </div>
        </div>
      </section>
      <div
        className={`fixed top-0 left-0 z-30 -mt-[100px] flex w-full transform flex-col items-center justify-center bg-[#EFEEED]/20 pt-48 backdrop-blur-md transition-all duration-500 ease-in-out dark:bg-[#2e2e2e]/20 md:hidden ${
          isHamburgerOpen ? "h-[400px] translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex w-full flex-col items-end justify-end gap-3 pr-[61px] text-xl">
          <li
            onClick={() => handleMenuClick("work")}
            className="cursor-pointer"
          >
            Work
          </li>
          <li
            onClick={() => handleMenuClick("about")}
            className="cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleMenuClick("play")}
            className="cursor-pointer"
          >
            Play
          </li>
          <li
            onClick={() => handleMenuClick("resume")}
            className="cursor-pointer"
          >
            Resume
          </li>
          <li
            onClick={() => handleMenuClick("email")}
            className="cursor-pointer"
          >
            Email
          </li>
        </ul>
      </div>
    </>
  );
};
