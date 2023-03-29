import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { type IImagePlay } from "additional";
import { useEffect } from "react";

export const ImageModal = ({
  image,
  imageIndex,
  imagesTotal,
  setIsImage,
  handlePrevClick,
  handleNextClick,
}: {
  image: IImagePlay | null | undefined;
  imageIndex: number;
  imagesTotal: number;
  setIsImage: (arg0: boolean) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}) => {
  // Effects -----------------------------------------
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        handleNextClick();
      } else if (event.key === "Escape") {
        setIsImage(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // JSX -----------------------------------------
  return (
    <>
      <section className="fixed top-0 left-0 z-50 flex h-screen w-full justify-center bg-black/90 px-20">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="h-fit w-fit justify-center rounded-lg p-5">
            <div className="flex w-full justify-between">
              <p className="text-white">
                {imageIndex + 1} / {imagesTotal}
              </p>
              <div className="flex items-center gap-5">
                <button onClick={handlePrevClick}>
                  <FiChevronLeft className="text-2xl text-white" />
                </button>
                <p className="text-white">·</p>
                <button onClick={handleNextClick}>
                  <FiChevronRight className="text-2xl text-white" />
                </button>
              </div>
              <button onClick={() => setIsImage(false)}>
                <RiCloseFill className="text-3xl text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 pt-3">
              <Image
                src={image?.url || ""}
                width={image?.urlWidth}
                height={image?.urlHeight}
                alt="play full"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
