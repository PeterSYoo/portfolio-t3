import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TypingText } from "./TypingText.components";
import { type RefObject } from "react";

export const LandingSection = ({
  landingRef,
}: {
  landingRef: RefObject<HTMLElement>;
}) => {
  // JSX --------------------------------------
  return (
    <>
      <section
        ref={landingRef}
        id="landing"
        className="-mt-[110px] flex h-screen justify-center"
      >
        <div className="flex w-full max-w-[1005px] flex-col gap-[30px] px-10 md:gap-[40px]">
          {/* Name ---------------- */}
          <div className="mt-[200px]">
            <p className="pl-1 text-[20px] font-light">Hi 👋, my name is</p>
            <h1 className="font-serif text-[64px] font-semibold italic leading-[80px] tracking-wide text-gray-800 dark:text-gray-100">
              Peter Yoo&nbsp;
              <span className="font-inter text-2xl font-light not-italic">
                a
              </span>
            </h1>
            <div className="flex items-center gap-5">
              <p className="pl-1 text-[20px] font-light">
                Full-Stack Software
                Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Artist&nbsp;&nbsp;·
              </p>
              <a href="https://www.linkedin.com/in/petersyoo/" target="_blank">
                <BsLinkedin className="text-xl text-[#0077B7]" />
              </a>
              <a href="https://github.com/PeterSYoo" target="_blank">
                <BsGithub className="text-xl" />
              </a>
              <a href="mailto: petersyoox@gmail.com" target="_blank">
                <AiOutlineMail className="text-2xl text-[#ff3e5e]" />
              </a>
              <a
                href="https://drive.google.com/file/d/1FtQO7NeQUfQWxV0m9Cp7zW6TGIbHq5Y2/view"
                target="_blank"
              >
                <button className="rounded border border-black/30 px-2 py-0.5 text-xs text-gray-700 hover:text-black dark:border-white/20 dark:text-gray-300 hover:dark:text-white">
                  RESUME
                </button>
              </a>
            </div>
          </div>
          {/* Animated Text ---------------- */}
          <div className="">
            <h1 className="font-serif text-[76px] italic leading-[75px] text-gray-800 dark:text-gray-100">
              <TypingText
                texts={["I am always curious about learning new technologies."]}
              />
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
