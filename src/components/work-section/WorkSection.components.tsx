import { useContext, useState, type RefObject } from "react";
import { Work } from "./Work.components";
import { WorkCard } from "./WorkCard.components";
import { IsWorkContext } from "~/contexts/IsWorkContext";
import { type IWork } from "additional";

export const WorkSection = ({
  workRef,
}: {
  workRef: RefObject<HTMLElement>;
}) => {
  // States -----------------------------------
  const { isWork, setIsWork } = useContext(IsWorkContext);
  const [selectedWork, setSelectedWork] = useState<IWork | null>(null);

  const portfolio = [
    {
      name: "PrepMeal AI",
      type: "WEB",
      date: "Mar 2023 - Mar 2023",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679728345/Portfolio/Work/prepmeal_yu8ijj.png",
      technologiesThumb: "NextJS · Tailwind CSS · tRPC · PostgreSQL",
      link: "https://prepmealai.vercel.app",
      github: "https://github.com/PeterSYoo/prepmealai-t3",
      technologies: [
        "NextJS",
        "Tailwind CSS",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "OpenAI",
      ],
      description:
        "An app that utilizes generative ai to generate recipes tailored to your exact caloric and macronutrient requirements.",
      images: [
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679821727/Portfolio/Work/PrepMeal%20AI/1_frvnd0.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679821727/Portfolio/Work/PrepMeal%20AI/2_al8txp.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679821727/Portfolio/Work/PrepMeal%20AI/3_anzua4.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679821727/Portfolio/Work/PrepMeal%20AI/4_xcs4qv.png",
      ],
      youtube: "https://www.youtube.com/embed/dPIB8GwZ67Y",
    },
    {
      name: "TalkThru",
      type: "WEB",
      date: "Jan 2023 - Mar 2023",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679727366/Portfolio/Work/talkthru_k45axh.png",
      technologiesThumb: "Vite · Tailwind CSS · Express · REST · PlanetScale",
      link: "",
      github: "",
      technologies: [""],
      description: "",
      images: [""],
      youtube: "",
    },
    {
      name: "Nudoodle",
      type: "WEB",
      date: "Dec 2022 - Jan 2023",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679727698/Portfolio/Work/nudoodle-w_tmterh.png",
      technologiesThumb: "NextJS · Tailwind CSS · REST · MongoDB",
      link: "",
      github: "",
      technologies: [""],
      description: "",
      images: [""],
      youtube: "",
    },
    {
      name: "TickerSaver",
      type: "WEB",
      date: "Nov 2022 - Dec 2022",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679728048/Portfolio/Work/tickersaver_cdzzoy.png",
      technologiesThumb: "NextJS · Tailwind CSS · REST · MongoDB",
      link: "",
      github: "",
      technologies: [""],
      description: "",
      images: [""],
      youtube: "",
    },
  ];

  // Custom Functions -------------------------
  const handleWorkCardClick = (work: IWork) => {
    setSelectedWork(work);
    setIsWork(true);
  };

  // Effects -------------------------------

  // JSX --------------------------------------
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-20 flex w-full transform flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isWork ? "h-screen translate-y-0" : "h-screen translate-y-full"
        }`}
      >
        <Work work={selectedWork} />
      </div>
      <section
        ref={workRef}
        id="work"
        className="mx-auto w-full max-w-[1840px] px-14 pt-[170px] pb-[200px]"
      >
        <div className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-2">
          {portfolio.map((work, i: number) => (
            <WorkCard
              work={work}
              key={i}
              handleWorkCardClick={handleWorkCardClick}
            />
          ))}
        </div>
      </section>
    </>
  );
};
