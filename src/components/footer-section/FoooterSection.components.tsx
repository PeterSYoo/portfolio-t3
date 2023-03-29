import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export const FoooterSection = () => {
  return (
    <>
      <section id="footer" className="h-[500px] border-t border-black/10 px-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-1 text-xl md:grid md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div>
              {/* Name and Title --------------------------------------- */}
              <p className="">Peter Yoo</p>
              <p className="text-gray-500">
                Full-Stack Software Engineer ⋅ Artist
              </p>
              <div className="mt-4 flex w-full gap-3 text-gray-600">
                {/* Call to Actions ------------------------------------ */}
                <a
                  href="https://www.linkedin.com/in/petersyoo/"
                  target="_blank"
                >
                  <button className="rounded-md border border-black/20 p-3 text-2xl">
                    <BsLinkedin className="hover:text-black" />
                  </button>
                </a>
                <a href="https://github.com/PeterSYoo" target="_blank">
                  <button className="rounded-md border border-black/20 p-3 text-2xl">
                    <BsGithub className="hover:text-black" />
                  </button>
                </a>
                <a href="mailto:petersyoox@gmail.com" target="_blank">
                  <button className="rounded-md border border-black/20 p-3 text-2xl">
                    <MdEmail className="hover:text-black" />
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1FtQO7NeQUfQWxV0m9Cp7zW6TGIbHq5Y2/view"
                  target="_blank"
                >
                  <button className="rounded-md border border-black/20 px-3 py-2.5 text-lg font-bold hover:text-black">
                    RESUME
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              {/* Thank You Message ------------------------------------- */}
              <h1 className="font-serif text-5xl font-bold italic text-gray-700">
                Thanks for stopping by, let&apos;s chat!
              </h1>
              {/* Built With -------------------------------------------- */}
              <div className="mt-10">
                <p className="flex items-center gap-2 text-base text-gray-400 md:justify-center">
                  This Portfolio was Built With
                  <a href="https://nextjs.org/" target="_blank">
                    <TbBrandNextjs className="text-xl hover:text-black" />
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank">
                    <SiTailwindcss className="text-xl hover:text-black" />
                  </a>
                  <a
                    href="https://github.com/PeterSYoo/portfolio-t3"
                    target="_blank"
                  >
                    <BsGithub className="text-lg hover:text-black" />
                  </a>
                </p>
                <p className="mt-1 flex text-base text-gray-400 md:justify-center">
                  ©2023 Peter Yoo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
