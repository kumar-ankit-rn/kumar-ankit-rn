import React, { useEffect, useMemo, useRef, useState } from "react";
import "./TypeAndDelete.css"; // 👈 import the CSS

export default function TypeAndDelete({
  words = [
    "Technical Lead – Mobile Applications",
    "React Native Developer",
    "Software Developer",
    "Full Stack Developer",
    "QA Enthusiast",
  ],
  typingSpeed = 200,
  deleteSpeed = 150,
  pauseAfterType = 1200,
  pauseAfterDelete = 400,
  loop = true,
  className = "text-xl font-semibold",
  cursor = true,
}: {
  words?: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}) {
  const safeWords = useMemo(
    () => (Array.isArray(words) && words.length ? words : [""]),
    [words]
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = safeWords[index % safeWords.length];
    const isWordDone = text === current;
    const isCleared = text === "";

    let delay = isDeleting ? deleteSpeed : typingSpeed;

    if (!isDeleting && isWordDone) delay = pauseAfterType;
    if (isDeleting && isCleared) delay = pauseAfterDelete;

    timeoutRef.current = window.setTimeout(() => {
      if (!isDeleting) {
        if (!isWordDone) {
          setText(current.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!isCleared) {
          setText(current.slice(0, text.length - 1));
        } else {
          const nextIndex = (index + 1) % safeWords.length;
          setIndex(nextIndex);
          setIsDeleting(false);

          if (!loop && nextIndex === 0) {
            clearTimeout(timeoutRef.current!);
            return;
          }
        }
      }
    }, delay);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [
    text,
    isDeleting,
    index,
    safeWords,
    typingSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    loop,
  ]);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return (
    <div>
      <span className={`inline-flex items-center ${className}`}>
        {text}
        {cursor && <span className="cursor" />}
      </span>
    </div>
  );
}
