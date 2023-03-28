import { type ITechnology } from "additional";
import Image from "next/image";

export const Technology = ({ technology }: { technology: ITechnology }) => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <Image
          src={technology.image}
          width={technology.width}
          height={technology.height}
          alt={`${technology.name}`}
        />
        <p className="font-bold">{technology.name}</p>
      </section>
    </>
  );
};
