import { type IWork } from "additional";

export const WorkCard = ({
  work,
  handleWorkCardClick,
}: {
  work: IWork;
  handleWorkCardClick: (arg0: IWork) => void;
}) => {
  return (
    <>
      <section className="flex flex-col gap-7 pb-14">
        <div
          onClick={() => handleWorkCardClick(work)}
          className={`aspect-video w-full cursor-pointer rounded-lg border border-[#c6c5c4] bg-cover bg-no-repeat shadow-lg`}
          style={{ backgroundImage: `url(${work.thumbnail})` }}
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
            {work.technologiesThumb}
          </p>
        </div>
      </section>
    </>
  );
};
