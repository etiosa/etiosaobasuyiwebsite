import { FC, useState, useEffect } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  titlecolor?: string;
  descriptionColor?: string;
  index?: Number,
  Textstyle?: {},
  currentporjectposition?: Number
}

const Text: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };


  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden", color: props.titlecolor }}
      variants={container}
      initial={props.index === props.currentporjectposition ? "hidden" : ""}
      animate={props.index === props.currentporjectposition ? "visible" : "hidden"}
      className={props.className}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Text;
