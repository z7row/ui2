"use client";
import { LettersPullUp } from "@/components/motion/lettersUp";
import { motion, AnimatePresence } from "motion/react";
import localFont from "next/font/local";
import { useState } from "react";

const pixlefont = localFont({
  src: "../public/fonts/bebas_neue/BebasNeue-Regular.ttf",
});
const font2 = localFont({
  src: "../public/fonts/Dynalight/Dynalight-Regular.ttf",
});

export default function Home() {
const colors = {
  bg: "#0a0a08",
  btnfrom: "#1a1508",
  btnto: "#2a2010",
  text: "#f0e6c8",
  des: "#a89060",
  btntext: "#c9a84c",
  accent: "#b8860b",
};
  const [on, seton] = useState(false);

  return (
    <motion.div className=" p-15 flex flex-col justify-between   md:justify-center min-h-dvh md:min-h-screen gap-5 items-center overflow-hidden scroll-smooth">
      <motion.div
        className="w-full absolute top-0 left-0 h-screen from-gray-900 from-25% to-cyan-500 pointer-events-none"
        style={{ backgroundColor: colors.bg }}
        initial={{ height: "0vh" }}
        animate={{ height: "100vh" }}
      />
      <div className="relative z-10 w-full min-h-screan -left-36 top-30 md:left-0 md:top-0 md:translate-0 flex flex-col md:justify-center md:items-center -rotate-90 md:rotate-0">
        <LettersPullUp
          className={`${pixlefont.className} md:text-7xl text-5xl`}
          text="Welcome To My WebSite"
          delayontext={0.05}
          delaybe={0.5}
          style={{ color: colors.text }}
        />
        <LettersPullUp
          className={`${font2.className} md:text-3xl text-xl w-[80%]`}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          delayontext={0.03}
          delaybe={1.4}
          style={{ color: colors.des }}
        />
      </div>
      <div className="relative z-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 4 } }}
          whileHover={{
            x: 0,
            y: 0,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.1 }}
          onTap={() => {
            seton(true);
          }}
          className={`md:w-130 text-center md:text-8xl md:h-50 h-20 w-70
        ${pixlefont.className}
        shadow-sm 
        items-center flex justify-center
       
        cursor-pointer
        rounded-full`}
          style={{
            background: `linear-gradient(to bottom right, ${colors.btnfrom}, ${colors.btnto})`,
            color: colors.btntext,
          }}
        >
          Get Started{" "}
        </motion.div>
      </div>
      <AnimatePresence>
        {on && (
          <motion.div
            className="w-full z-50 fixed bottom-0 left-0 h-screen
            flex justify-center items-center
            bg-black cursor-default from-gray-900 from-25% to-cyan-500"
            initial={{ height: "0vh" }}
            animate={{ height: "100vh" }}
            exit={{ height: "0vh", transition: { delay: 0.5 } }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => {
                seton(false);
              }}
              className={`text-white fixed top-5 left-5 pointer-events-auto hover:underline cursor-pointer`}
            >
              back
            </button>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 , transition:{ delay: 0.5}}}
              className={`text-[${colors.text}] text-5xl`}
              style={{ color: colors.accent }}
              exit={{ opacity: 0 }}
            >
              Thank You
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
