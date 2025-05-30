import { useEffect, useState } from "react";
import "../styles/Typewriter.css";

const Typewriter = ({ words = [], speed = 150, pause = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, speed, pause]);

  return (
    <span className="typewriter-wrapper">
      <span className="typewriter-text">{displayText}</span>
      <span className="cursor" />
    </span>
  );
};

export default Typewriter;
