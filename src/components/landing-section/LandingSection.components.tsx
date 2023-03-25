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
        <div className="flex w-full max-w-[1005px] flex-col gap-[30px] px-5 md:gap-[40px]">
          {/* Name ---------------- */}
          <div className="mt-[200px]">
            <h1 className="text-[64px] font-semibold leading-[80px] tracking-tight">
              Peter Yoo
            </h1>
            <div className="flex items-center gap-5">
              <p className="pl-1 text-[20px]">
                Full Stack
                Developer&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Artist&nbsp;&nbsp;&nbsp;·
              </p>
              <BsLinkedin className="text-xl text-[#0077B7]" />
              <BsGithub className="text-xl" />
              <AiOutlineMail className="text-2xl text-[#ff3e5e]" />
            </div>
          </div>
          {/* Animated Text ---------------- */}
          <div className="">
            <h1 className="font-serif text-[76px] leading-[75px]">
              <TypingText
                texts={[
                  "Always curious about learning new technologies.",
                  "Teamwork makes the web work.",
                ]}
              />
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
