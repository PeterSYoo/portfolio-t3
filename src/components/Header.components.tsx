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
  const { isWork, setIsWork } = useContext(IsWorkContext);

  // Constants -------------------------------
  const activeMenuClasses = "text-gray-600 transition-all duration-1000";

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
        className={`fixed top-0 z-30 h-[90px] w-full bg-[#EFEEED] pr-5 ${
          (isWork === true &&
            "bg-opacity-0 backdrop-blur transition-all duration-1000") ||
          ""
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-10">
          {/* Logo ----------------- */}
          <button
            onClick={() => handleMenuClick("landing")}
            className="flex w-[42px] flex-col rounded bg-gradient-to-tr from-[#e6e6e6] to-[#aeb0b3] px-2 py-1 text-lg font-bold text-gray-600 shadow-sm shadow-black"
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
            <button className="text-3xl">
              <RxHamburgerMenu />
            </button>
          </div>
          <div className="hidden w-full items-center justify-end gap-14 rounded-lg font-semibold text-gray-700 md:flex">
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
          </div>
        </div>
      </section>
    </>
  );
};
