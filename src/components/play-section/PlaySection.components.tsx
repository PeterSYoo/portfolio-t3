import { type RefObject } from "react";

export const PlaySection = ({
  playRef,
}: {
  playRef: RefObject<HTMLElement>;
}) => {
  return (
    <>
      <section ref={playRef} id="play" className="h-screen"></section>
    </>
  );
};
