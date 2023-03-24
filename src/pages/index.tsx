import { type NextPage } from "next";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Header } from "~/components/root/Header.components";

const Home: NextPage = () => {
  // JSX --------------------------------------
  return (
    <>
      <Header />
      <main className="flex w-full">
        <div className="-mt-[110px] flex h-screen w-screen justify-center">
          <div className="flex w-full max-w-[1005px] flex-col gap-[30px] px-5 md:gap-[40px]">
            {/* Name ---------------- */}
            <div className="mt-[200px]">
              <h1 className="text-[64px] font-bold leading-[80px] tracking-tight">
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
              <h1 className="font-serif text-[76px]">
                Always curious about learning new technologies.
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
