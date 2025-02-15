import { useState, useEffect } from "react";

import React from "react";
import { TypingProps } from "./types";

const TypingEffect: React.FC<TypingProps> = ({
  texts,
  speed = 100,
  delay = 2000,
  style
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className="font-mono border-r-2 border-white animate-blink" style={style}>
      {displayedText}|
    </span>
  );
};
export default TypingEffect;
