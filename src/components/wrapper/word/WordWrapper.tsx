import { motion, useInView } from "framer-motion";
import "./WordWrapper.scss";
import { FunctionComponent, useRef } from "react";

export const props = {
  word: "",
  className: "",
};

const staggerChildren = 0.02;

interface Props {
  className: string;
  word: string | undefined;
}

const WordWrapper: FunctionComponent<Props> = ({ className, word }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const textView = useInView(textRef, { once: false });

  if (!word) {
    word = "";
  }

  const wordVariants = {
    animate: {
      transition: {
        staggerChildren,
      },
    },
    exit: {
      transition: {
        staggerChildren,
      },
    },
  };

  const characterVariants = {
    initial: {
      y: "500%",
    },
    waiting: {
      y: "500%",
    },
    animate: {
      y: 0,
    },
    exit: {
      y: "500%",
    },
  };

  return (
    <motion.div
      variants={wordVariants}
      initial="initial"
      animate={textView ? "animate" : "waiting"}
      exit="exit"
      className={`${className} word-wrapper`}
      ref={textRef}
    >
      {Array.from(word).map((character, index) => (
        <motion.span
          variants={characterVariants}
          transition={{
            ease: "circOut",
            duration: 0.8,
          }}
          className={
            character === " "
              ? "word-wrapper-character space"
              : "word-wrapper-character"
          }
          key={index}
        >
          {character}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordWrapper;
