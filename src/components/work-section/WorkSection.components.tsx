import { Fragment, type RefObject } from "react";

export const WorkSection = ({
  workRef,
}: {
  workRef: RefObject<HTMLElement>;
}) => {
  // States -----------------------------------
  const portfolio = [
    {
      name: "PrepMeal AI",
      technologies: "NextJS · Tailwind CSS · tRPC · PostgreSQL",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679728345/Portfolio/Work/prepmeal_yu8ijj.png",
      type: "WEB",
      date: "Mar 2023 - Mar 2023",
    },
    {
      name: "TalkThru",
      technologies: "Vite · Tailwind CSS · Express · REST · PlanetScale",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679727366/Portfolio/Work/talkthru_k45axh.png",
      type: "WEB",
      date: "Jan 2023 - Mar 2023",
    },
    {
      name: "Nudoodle",
      technologies: "NextJS · Tailwind CSS · REST · MongoDB",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679727698/Portfolio/Work/nudoodle-w_tmterh.png",
      type: "WEB",
      date: "Mar 2023 - Mar 2023",
    },
    {
      name: "TickerSaver",
      technologies: "NextJS · Tailwind CSS · REST · MongoDB",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679728048/Portfolio/Work/tickersaver_cdzzoy.png",
      type: "WEB",
      date: "Mar 2023 - Mar 2023",
    },
  ];

  // Custom Functions -------------------------

  // JSX --------------------------------------
  return (
    <>
      <section
        ref={workRef}
        id="work"
        className="mx-auto w-full max-w-[1840px] px-14 py-[200px]"
      >
        <div className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-2">
          {portfolio.map((work, i: number) => (
            <Fragment key={i}>
              <div className="flex flex-col gap-7 pb-14">
                <div
                  className={`aspect-video w-full rounded-lg border border-[#c6c5c4] bg-cover bg-no-repeat shadow-lg`}
                  style={{ backgroundImage: `url(${work.image})` }}
                >
                  <div className="flex w-full justify-end pt-4 pr-4">
                    <div className="rounded border border-[#c6c5c4] bg-white/70 px-3 py-2 text-sm font-semibold shadow-gray-400 backdrop-blur-[2px]">
                      {work.type}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center justify-between">
                    <h1 className="font-serif text-lg font-semibold md:text-3xl lg:text-2xl">
                      {work.name}
                    </h1>
                    <p className="text-sm text-gray-500 md:text-lg lg:text-base">
                      {work.date}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-lg">
                    {work.technologies}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
