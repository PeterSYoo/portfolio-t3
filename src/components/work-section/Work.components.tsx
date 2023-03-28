import { type IWork } from "additional";
import Image from "next/image";
import { useContext, useEffect } from "react";
import {
  BsGithub,
  BsInfoCircle,
  BsLink45Deg,
  BsLinkedin,
} from "react-icons/bs";
import { BiChevronsDown } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { IsWorkContext } from "~/contexts/IsWorkContext";

export const Work = ({ work }: { work: IWork | null }) => {
  // States -----------------------------------------------
  const { isWork, setIsWork } = useContext(IsWorkContext);

  // Constants ----------------------------------------
  const prepmealStyle = "bg-gradient-to-br from-[#FFF1E8] to-[#BEB8B4]";
  const talkthruStyle = "bg-gradient-to-br from-[#9C9BA5] to-[#EBEBEE]";
  const nudoodleStyle = "bg-gradient-to-b from-[#FFAECB] to-[#FFBB90]";
  const tickersaverStyle = "bg-gradient-to-tr from-[#F3F3F3] to-[#989A9E]";

  // Effect -----------------------------------------------
  useEffect(() => {
    // Hide the scrollbar when the component mounts
    if (isWork === true) {
      document.body.style.overflow = "hidden";
    }

    // Re-enable the scrollbar when the component unmounts
    if (isWork === false) {
      document.body.style.overflow = "visible";
    }
  }, [isWork]);

  // JSX -----------------------------------------------
  return (
    <>
      <section
        id="work-container"
        className={`
        ${
          (work?.name === "PrepMeal AI" && prepmealStyle) ||
          (work?.name === "TalkThru" && talkthruStyle) ||
          (work?.name === "Nudoodle" && nudoodleStyle) ||
          (work?.name === "TickerSaver" && tickersaverStyle) ||
          ""
        }
        z-40 h-screen w-screen overflow-y-scroll pt-[90px] pb-[200px]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-10">
          {/* Close Component ------------------------- */}
          <button
            onClick={() => setIsWork(false)}
            className="mt-2 opacity-50 hover:opacity-100"
          >
            <BiChevronsDown className="text-2xl" />
          </button>
          <div className="flex w-full flex-col gap-1">
            {/* Name & Date --------------------------- */}
            <div className="flex w-full items-end justify-between pt-10">
              <h1 className="font-serif text-3xl font-bold md:text-5xl">
                {work?.name}
              </h1>
              <div className="flex flex-col items-end text-sm md:text-lg">
                <p>{work?.type}</p>
                <p>{work?.date}</p>
              </div>
            </div>
            {/* Line Break ----------------------------- */}
            <div className="w-full rounded-sm border-b border-black border-opacity-30"></div>
            <div className="mt-8 flex flex-col gap-5 px-1 md:grid md:grid-cols-[1fr_1.5fr] md:text-xl lg:grid-cols-[1fr_2fr]">
              <div className="flex flex-col gap-6">
                {/* Deployed App ------------------------*/}
                <p className="flex items-center gap-9">
                  <BsLink45Deg className="-ml-1 text-2xl lg:text-3xl" />
                  <a
                    href={work?.link}
                    target="_blank"
                    className="hover:text-gray-700"
                  >
                    Deployed App
                  </a>
                </p>
                {/* Contributors ------------------------*/}
                {work?.contributors?.some(
                  (contributor) =>
                    contributor.name !== "" &&
                    contributor.role !== "" &&
                    contributor.linkedin !== ""
                ) && (
                  <p className="flex gap-9">
                    <IoPeopleSharp className="mt-1 text-xl lg:text-2xl" />
                    <div className="flex flex-col gap-4">
                      {work?.contributors?.map((contributor, i: number) => (
                        <div
                          key={i}
                          className="flex flex-col border-b border-black border-opacity-30 pr-5"
                        >
                          <p className="flex items-center gap-2">
                            {contributor.name}
                            <a href={contributor.linkedin} target="_blank">
                              <BsLinkedin className="text-gray-700 hover:text-black" />
                            </a>
                          </p>
                          <p className="text-base text-gray-700">
                            {contributor.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </p>
                )}
                {/* GitHub ------------------------------*/}
                <p className="flex items-center gap-9">
                  <BsGithub className="text-xl lg:text-2xl" />
                  <a
                    href={work?.github}
                    target="_blank"
                    className="hover:text-gray-700"
                  >
                    GitHub
                  </a>
                </p>
                {/* Technologies ------------------------*/}
                <div className="flex gap-10">
                  <FaTools className="mt-1" />
                  <ul className="flex list-none flex-col gap-1">
                    {work?.technologies?.map(
                      (technology: string, i: number) => (
                        <li key={i}>{technology}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-[50px_1fr]">
                <BsInfoCircle className="mt-1 text-xl lg:text-2xl" />
                <p>{work?.description}</p>
              </div>
            </div>
            {/* Video Demo -------------------------------- */}
            {work?.youtube !== "" && (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
                className="mt-10"
              >
                <iframe
                  src={work?.youtube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  className="rounded-lg shadow-md shadow-gray-600"
                />
              </div>
            )}
            {/* Screenshots ---------------------------------- */}
            <div className="mt-10 flex flex-col gap-10">
              {work?.images?.map((image: string, i: number) => (
                <div className="" key={i}>
                  <Image
                    src={image}
                    alt="screenshot"
                    height={705}
                    width={1391}
                    className="rounded-lg object-contain shadow-md shadow-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
