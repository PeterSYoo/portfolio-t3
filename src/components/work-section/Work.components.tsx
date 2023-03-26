import { type IWork } from "additional";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { BiChevronsDown } from "react-icons/bi";
import { IsWorkContext } from "~/contexts/IsWorkContext";

export const Work = ({ work }: { work: IWork | null }) => {
  // State -----------------------------------------------
  const { isWork, setIsWork } = useContext(IsWorkContext);

  // Declaractions ----------------------------------------
  const prepmealStyle = "bg-gradient-to-br from-[#FFF1E8] to-[#BEB8B4]";
  const talkthruStyle = "bg-gradient-to-br from-[#9C9BA5] to-[#EBEBEE]";
  const nudoodleStyle = "bg-gradient-to-b from-[#B0B3C3] to-[#C1C2C7]";
  const tickersaverStyle = "bg-gradient-to-tr from-[#F8EBE9] to-[#B8A5A2]";

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
        z-30 mt-[110px] h-screen w-screen overflow-y-scroll pb-[200px]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-10">
          {/* Close Component ------------------------- */}
          <button onClick={() => setIsWork(false)} className="mt-2 opacity-50">
            <BiChevronsDown className="text-2xl" />
          </button>
          <div className="flex w-full flex-col gap-1">
            {/* Name & Date --------------------------- */}
            <div className="flex w-full items-end justify-between pt-10">
              <h1 className="text-3xl font-bold">{work?.name}</h1>
              <div className="flex flex-col items-end">
                <p className="text-sm">{work?.type}</p>
                <p className="text-sm">{work?.date}</p>
              </div>
            </div>
            {/* Line Break ----------------------------- */}
            <div className="w-full rounded-sm border-b border-black"></div>
            {/* Information ----------------------------- */}
            <div className="mt-4 flex flex-col gap-5 md:grid md:grid-cols-[1fr_1fr]">
              <div className="flex flex-col gap-6">
                <p className="flex gap-6">
                  🔗&nbsp;&nbsp;
                  <a href={work?.link} target="_blank">
                    Deployed App
                  </a>
                </p>
                <p className="flex gap-3">
                  <BsGithub className="text-xl" />
                  &nbsp;&nbsp;
                  <a href={work?.github} target="_blank">
                    GitHub
                  </a>
                </p>
                <div className="flex gap-6">
                  🔧&nbsp;&nbsp;
                  <ul className="list-none">
                    {work?.technologies?.map(
                      (technology: string, i: number) => (
                        <li key={i}>{technology}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-[50px_1fr]">
                🐸<p className="">{work?.description}</p>
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
