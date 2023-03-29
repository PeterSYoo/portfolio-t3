import { type IImagePlay } from "additional";
import Image from "next/image";
import { useEffect, useState, type RefObject } from "react";
import { ImageModal } from "./ImageModal.components";

export const PlaySection = ({
  playRef,
}: {
  playRef: RefObject<HTMLElement>;
}) => {
  // States --------------------------------------
  const [isImage, setIsImage] = useState<boolean>(false);
  const [imageObj, setImageObj] = useState<IImagePlay | null | undefined>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const images = [
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070687/Portfolio/Play/Group_23_fd39ay.png",
      urlWidth: 899,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/Group_25_zzw3rf.png",
      thumbWidth: 300,
      thumbHeight: 301,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070688/Portfolio/Play/20230328_163935_1_zvecey.png",
      urlWidth: 1995,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_163935_2_fcig75.png",
      thumbWidth: 300,
      thumbHeight: 136,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070687/Portfolio/Play/Group_22_ozitaa.png",
      urlWidth: 900,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/Group_26_baz6iz.png",
      thumbWidth: 300,
      thumbHeight: 300,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070685/Portfolio/Play/20230328_163842_1_dwtgyw.png",
      urlWidth: 411,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070573/Portfolio/Play/Thumbs/20230328_163842_2_oyxor0.png",
      thumbWidth: 300,
      thumbHeight: 658,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070686/Portfolio/Play/20230328_164223_1_a7r2we.png",
      urlWidth: 1056,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_164223_2_oloepx.png",
      thumbWidth: 300,
      thumbHeight: 254,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070687/Portfolio/Play/Group_20_on83ec.png",
      urlWidth: 1566,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070575/Portfolio/Play/Thumbs/Group_24_lgudac.png",
      thumbWidth: 300,
      thumbHeight: 173,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070685/Portfolio/Play/20230328_163913_1_mfzfwe.png",
      urlWidth: 371,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070573/Portfolio/Play/Thumbs/20230328_163913_2_kygg61.png",
      thumbWidth: 300,
      thumbHeight: 730,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070685/Portfolio/Play/20230328_164052_1_vdmuly.png",
      urlWidth: 514,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_164052_2_k7zr27.png",
      thumbWidth: 300,
      thumbHeight: 527,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074701/Portfolio/Play/20230328_164302_1_w6luzz.png",
      urlWidth: 528,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074669/Portfolio/Play/Thumbs/20230328_164302_2_u1oxp7.png",
      thumbWidth: 300,
      thumbHeight: 512,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070686/Portfolio/Play/20230328_164119_1_uuy4ct.png",
      urlWidth: 1106,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_164119_2_qnqli0.png",
      thumbWidth: 300,
      thumbHeight: 245,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070688/Portfolio/Play/20230328_164328_1_jrxx6w.png",
      urlWidth: 649,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_164328_2_rah0o8.png",
      thumbWidth: 300,
      thumbHeight: 417,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070687/Portfolio/Play/image_53_bzursi.png",
      urlWidth: 900,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/image_54_qddmzf.png",
      thumbWidth: 300,
      thumbHeight: 300,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680073516/Portfolio/Play/20230328_163823_3_ysgio3.png",
      urlWidth: 373,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680073482/Portfolio/Play/Thumbs/20230328_163823_4_plqy6b.png",
      thumbWidth: 300,
      thumbHeight: 725,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070686/Portfolio/Play/20230328_164713_1_yzxlde.png",
      urlWidth: 723,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070574/Portfolio/Play/Thumbs/20230328_164713_2_nrz524.png",
      thumbWidth: 300,
      thumbHeight: 374,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074409/Portfolio/Play/20230328_163713_3_y5wrq7.png",
      urlWidth: 896,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074383/Portfolio/Play/Thumbs/20230328_163713_4_yunm4v.png",
      thumbWidth: 300,
      thumbHeight: 302,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074599/Portfolio/Play/20230328_163925_3_qt9vcm.png",
      urlWidth: 546,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074578/Portfolio/Play/Thumbs/20230328_163925_4_jvjjel.png",
      thumbWidth: 300,
      thumbHeight: 496,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070685/Portfolio/Play/20230328_163852_1_sbkiih.png",
      urlWidth: 1108,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680070573/Portfolio/Play/Thumbs/20230328_163852_2_cjerjd.png",
      thumbWidth: 300,
      thumbHeight: 244,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074101/Portfolio/Play/20230328_163833_3_o0dpxe.png",
      urlWidth: 365,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074075/Portfolio/Play/Thumbs/20230328_163833_4_htzghz.png",
      thumbWidth: 300,
      thumbHeight: 741,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680073212/Portfolio/Play/20230328_163801_1_1_csx7wc.png",
      urlWidth: 442,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680073249/Portfolio/Play/Thumbs/20230328_163801_1_2_bjhkgh.png",
      thumbWidth: 300,
      thumbHeight: 612,
    },
    {
      url: "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074235/Portfolio/Play/20230328_163812_3_sc0coo.png",
      urlWidth: 521,
      urlHeight: 900,
      thumb:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1680074216/Portfolio/Play/Thumbs/20230328_163812_4_wbmszr.png",
      thumbWidth: 300,
      thumbHeight: 519,
    },
  ];

  // Custom Functions ----------------------------
  const handleThumbClick = (imageObj: IImagePlay, index: number) => {
    setImageObj(imageObj);
    setImageIndex(index);
    setIsImage(true);
  };

  const handlePrevClick = () => {
    setImageIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setImageIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effects -----------------------------------------
  useEffect(() => {
    setImageObj(images[imageIndex]);
  }, [imageIndex]);

  // JSX -------------------------------------------
  return (
    <>
      {isImage && (
        <ImageModal
          imageIndex={imageIndex}
          imagesTotal={images.length}
          image={imageObj}
          setIsImage={setIsImage}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}
      <section
        ref={playRef}
        id="play"
        className="mx-auto w-full max-w-[1440px] columns-2 px-5 pt-[110px] pb-[200px] md:columns-3 md:px-20 lg:columns-4"
      >
        {images.map((image: IImagePlay, index: number) => (
          <button
            onClick={() => handleThumbClick(image, index)}
            key={index}
            className="pb-5"
          >
            <Image
              src={image.thumb}
              width={image.thumbWidth}
              height={image.thumbHeight}
              alt="play thumbnail"
            />
          </button>
        ))}
      </section>
    </>
  );
};
