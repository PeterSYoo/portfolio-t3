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
      technologiesThumb:
        "NextJS · TypeScript · Tailwind CSS · tRPC · PostgreSQL",
      link: "https://prepmealai.vercel.app",
      github: "https://github.com/PeterSYoo/prepmealai-t3",
      technologies: [
        "NextJS",
        "TypeScript",
        "Tailwind CSS",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "OpenAI",
      ],
      description:
        "An app that utilizes generative ai to generate recipes tailored to your exact caloric and macronutrient requirements.",
      contributors: [
        {
          name: "",
          role: "",
          linkedin: "",
        },
      ],
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
      technologiesThumb:
        "Vite · TypeScript · Tailwind CSS · WebRTC · Express · REST · PlanetScale",
      link: "https://talkthru.netlify.app/",
      github: "https://github.com/PeterSYoo/talkthru-frontend",
      technologies: [
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Socket IO",
        "Peer.JS",
        "Express",
        "REST",
        "Prisma",
        "PlanetScale",
      ],
      description:
        "A video chatting app designed to match users with compatible users based on shared subjects and expertise levels. The app was developed over a 6-week period by a team of 3 software engineers and 4 UX/UI designers using Agile methodologies and the Jira software.",
      contributors: [
        {
          name: "Peter Yoo",
          role: "Full-Stack Software Engineer",
          linkedin: "https://www.linkedin.com/in/petersyoo/",
        },
        {
          name: "Tyson Gomes",
          role: "Full-Stack Software Engineer",
          linkedin: "https://www.linkedin.com/in/tysonkgomes/",
        },
        {
          name: "Aryn Parks",
          role: "Full-Stack Software Engineer",
          linkedin: "https://www.linkedin.com/in/aryn-parks/",
        },
        {
          name: "Sofia Torres",
          role: "Project Lead, UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/sofiajtorres/",
        },
        {
          name: "Robin Ong",
          role: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/robinvong/",
        },
        {
          name: "Andrew Thacker",
          role: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/andrewthackeruxui/",
        },
        {
          name: "Charlie-Moshé Elias",
          role: "UI/UX Designer",
          linkedin: "https://www.linkedin.com/in/charlie-elias/",
        },
      ],
      images: [
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869223/Portfolio/Work/TalkThru/1_kdtei0.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869223/Portfolio/Work/TalkThru/2_yki8wq.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869222/Portfolio/Work/TalkThru/3_zcck3b.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869223/Portfolio/Work/TalkThru/4_exkbah.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869222/Portfolio/Work/TalkThru/5_qltxie.png",
      ],
      youtube: "",
    },
    {
      name: "Nudoodle",
      type: "WEB",
      date: "Dec 2022 - Jan 2023",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679870176/Portfolio/Work/nudoodle-t_rkzfsz.png",
      technologiesThumb: "NextJS · TypeScript · Tailwind CSS · REST · MongoDB",
      link: "http://nudoodle.vercel.app/",
      github: "https://github.com/PeterSYoo/doodlezilla-nextjs-tailwind",
      technologies: [
        "NextJS",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "React Hook Form",
        "Yup",
        "REST",
        "Mongoose",
        "MongoDB",
        "Canvas API",
      ],
      description:
        "A social media platform for creating and sharing drawings, as well as liking and commenting on other user's drawings.",
      contributors: [
        {
          name: "",
          role: "",
          linkedin: "",
        },
      ],
      images: [
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869263/Portfolio/Work/Nudoodle/1_vbbwbc.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869263/Portfolio/Work/Nudoodle/2_tnyjdm.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869263/Portfolio/Work/Nudoodle/3_hccqjy.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869262/Portfolio/Work/Nudoodle/4_hqqg93.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869262/Portfolio/Work/Nudoodle/5_dbngrb.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869262/Portfolio/Work/Nudoodle/6_bjlo7w.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869262/Portfolio/Work/Nudoodle/7_icwm7e.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869262/Portfolio/Work/Nudoodle/8_vpakt6.png",
      ],
      youtube: "https://www.youtube.com/embed/jIndNFS_bgc",
    },
    {
      name: "TickerSaver",
      type: "WEB",
      date: "Nov 2022 - Dec 2022",
      thumbnail:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679870232/Portfolio/Work/tickersaver-t_xvhkg7.png",
      technologiesThumb: "NextJS · TypeScript · Tailwind CSS · REST · MongoDB",
      link: "http://tickersaver.vercel.app/",
      github: "https://github.com/PeterSYoo/stocksaver-nextjs-tailwind",
      technologies: [
        "NextJS",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Formik",
        "Yup",
        "REST",
        "Mongoose",
        "MongoDB",
        "Finnhub's Stock API",
      ],
      description:
        "A stock tracking app that allows users to search for stocks, add them to their dashboard, and track them in real-time with updates on daily winners and losers.",
      contributors: [
        {
          name: "",
          role: "",
          linkedin: "",
        },
      ],
      images: [
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869772/Portfolio/Work/TickerSaver/1_a3nwrp.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869748/Portfolio/Work/TickerSaver/2_hsxd96.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869748/Portfolio/Work/TickerSaver/3_pxubdp.png",
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679869748/Portfolio/Work/TickerSaver/4_msc4rj.png",
      ],
      youtube: "https://www.youtube.com/embed/E1rv0ZqCx74",
    },
  ];

  // Custom Functions -------------------------
  const handleWorkCardClick = (work: IWork) => {
    setSelectedWork(work);
    setIsWork(true);
  };

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
        className="mx-auto w-full max-w-[1440px] px-8 pt-[170px] pb-[200px]"
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
