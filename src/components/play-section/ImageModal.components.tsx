import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { type IImagePlay } from "additional";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";

export const ImageModal = ({
  image,
  imageIndex,
  imagesTotal,
  setIsImage,
  handlePrevClick,
  handleNextClick,
  isImageLoading,
  setIsImageLoading,
}: {
  image: IImagePlay | null | undefined;
  imageIndex: number;
  imagesTotal: number;
  setIsImage: (arg0: boolean) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  isImageLoading: boolean;
  setIsImageLoading: (arg0: boolean) => void;
}) => {
  // States --------------------------------------------
  const [isClicked, setIsClicked] = useState<boolean | null>(null);

  // Custom Functions -----------------------------------------
  const handleBlurClick = () => {
    setIsClicked(true);
  };

  // Effects -----------------------------------------
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIsImageLoading(true);
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        setIsImageLoading(true);
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

  useEffect(() => {
    if (image?.blur === true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  }, [image?.blur, image]);

  useEffect(() => {
    setIsImageLoading(true);
  }, [image]);

  // JSX -----------------------------------------
  return (
    <>
      <section className="fixed top-0 left-0 z-50 flex h-screen w-full justify-center bg-black/90">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex flex-col justify-center rounded-lg">
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
              <div className="group relative">
                <Image
                  src={image?.url || ""}
                  width={image?.urlWidth}
                  height={image?.urlHeight}
                  alt="play full"
                  className="rounded-lg"
                  onLoad={() => setIsImageLoading(false)}
                />
                <div
                  onClick={handleBlurClick}
                  className={`
                  ${(isClicked && "backdrop-blur-none") || ""}
                  ${(image?.blur && "backdrop-blur") || ""}
                  ${(!isClicked && "cursor-pointer") || ""}
                  absolute inset-0 bg-white/10 transition-opacity`}
                >
                  {isImageLoading ? (
                    <div className="spin-fast flex h-6 w-6 items-center justify-center rounded-full border-2 border-solid border-[#766f6a] border-current border-r-transparent text-[#766f6a]"></div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2">
                      {(!isClicked && (
                        <>
                          <AiFillEye className="text-5xl text-black/50 group-hover:text-black/80" />
                          <p className="font-bold text-red-500">
                            Warning Nudity
                          </p>
                        </>
                      )) ||
                        ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
