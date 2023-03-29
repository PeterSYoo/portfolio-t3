import { useEffect, useState } from "react";

export const TypingText = ({ texts }: { texts: string[] }) => {
  // States --------------------------------------
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string | undefined>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // UseEffects --------------------------------------
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(texts[currentTextIndex]?.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === texts[currentTextIndex]?.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 2500);
      }
    }, 75);
    return () => clearInterval(interval);
  }, [texts, currentTextIndex]);

  useEffect(() => {
    if (currentTextIndex === texts.length) {
      setCurrentTextIndex(0);
    }
  }, [currentTextIndex, texts.length]);

  useEffect(() => {
    setIsTyping(true);
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 10); // set delay to 1 second
    return () => clearTimeout(timeout);
  }, [displayText]);

  // JSX --------------------------------------
  return (
    <>
      {displayText}
      <span className={`cursor ${isTyping ? "typing" : ""} -ml-2`}>|</span>
    </>
  );
};
