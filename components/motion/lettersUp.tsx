"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function LettersPullUp({
  text,
  delayontext = 0.01,
  className = "",
  delaybe = 0,
  style,
}: {
  text: string;
  delayontext?: number;
  className?: string;
  delaybe?: number;
  style?: object;
}) {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 25, x: -5, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: delaybe + i * delayontext,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(" text-center font-bold   md:leading-16", className)}
          style={style}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
