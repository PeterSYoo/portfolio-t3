import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  // States --------------------------------
  const [activeMenu, setActiveMenu] = useState<string>("");

  // Declarations ---------------------------
  const activeMenuClasses = "text-white transition-all duration-500";
  const inactiveMenuClasses = "text-black";

  // Functions --------------------------------
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  // JSX --------------------------------------
  return (
    <>
      <section className="fixed top-0 h-[110px] w-full bg-[#EFEEED]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-10">
          <div className="logo-bg z-0 -mr-[102px] h-[70px] w-[100px] rounded-lg bg-gradient-to-tr from-[#ff3e5e] to-[#ff683e]"></div>
          <div className="logo-bg-2 -z-10 -mr-[101px] h-[65px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[94px] h-[65px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[99px] h-[68px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[98px] h-[67px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[97px] h-[66px] w-[100px] rounded-lg"></div>
          <div className="logo-bg-2 -z-10 -mr-[96px] h-[65px] w-[100px] rounded-lg"></div>
          {/* Logo ----------------- */}
          <button className="logo z-10 rounded-lg py-3 text-3xl font-bold text-white transition-all">
            PY
          </button>
          {/* Menu ----------------- */}
          <div className="flex w-full justify-end md:hidden">
            <button className="pr-5 text-4xl">
              <RxHamburgerMenu />
            </button>
          </div>
          <div className="hidden w-full items-center justify-end gap-14 font-bold md:flex">
            <div
              className={`${
                activeMenu === "work"
                  ? "left-[113px] w-[65px]"
                  : activeMenu === "about"
                  ? "left-[226px] w-[73px]"
                  : activeMenu === "resume"
                  ? "left-[350px] w-[87px]"
                  : activeMenu === ""
                  ? "left-0 w-0"
                  : "opacity-100"
              } relative top-0 -z-10 h-8 rounded bg-gradient-to-tr from-[#ff3e5e] to-[#ff683e] transition-all duration-500 ease-in-out`}
            />
            <button
              className={`${
                activeMenu === "work" ? activeMenuClasses : inactiveMenuClasses
              }`}
              onClick={() => handleMenuClick("work")}
            >
              WORK
            </button>
            <button
              className={`${
                activeMenu === "about" ? activeMenuClasses : inactiveMenuClasses
              }`}
              onClick={() => handleMenuClick("about")}
            >
              ABOUT
            </button>
            <button
              className={`${
                activeMenu === "resume"
                  ? activeMenuClasses
                  : inactiveMenuClasses
              }`}
              onClick={() => handleMenuClick("resume")}
            >
              RESUME
            </button>
            <button className="email-logo z-10 transition-all">EMAIL</button>
          </div>
        </div>
      </section>
    </>
  );
};
