"use client";
import { LettersPullUp } from "@/components/motion/lettersUp";
import { Button } from "@/components/ui/button";
import { delay, motion, scale } from "motion/react";
import localFont from "next/font/local";
import { useState } from "react";

const pixlefont = localFont({
  src: "../public/fonts/bebas_neue/BebasNeue-Regular.ttf",
});
const font2 = localFont({
  src: "../public/fonts/Dynalight/Dynalight-Regular.ttf",
});
export default function Home() {
  const [on ,seton] = useState(false)
  const box = {
    width: 100,
    // height: screen.height,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  return (
    <motion.div className="static p-15 flex flex-col  justify-center items-center overflow-hidden">
      <motion.div
        className="w-full absolute top-0 left-0 h-screen bg-slate-950 from-gray-900 from-25% to-cyan-500 pointer-events-none"
        initial={{ height: "0vh" }}
        animate={{ height: "100vh" }}
      />
      <div className="relative z-10 w-50">
        <LettersPullUp
          className={`text-white ${pixlefont.className} text-8xl`}
          text="Welcome To My WebSite"
          delayontext={0.05}
          delaybe={0.5}
        />
        <LettersPullUp
          className={`text-slate-400 ${font2.className} text-4xl w-10`}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          delayontext={0.03}
          delaybe={1.4}
        />
      </div>
      <div className="relative z-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 4 } }}
          whileHover={{
            scale: 2,
            borderRadius: 0,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.1 }}
          // whileTap={{ scale: 1.8 }}
          onTap={() => {
            seton(true);
          }}
          // style={on ? { display: "none" } : {}}
          className={`w-200 bg-linear-to-br from-indigo-600 to-violet-700 text-center text-9xl h-80 
        ${pixlefont.className}
        shadow-sm shadow-gray-900
        items-center flex justify-center text-white
        cursor-pointer
        rounded-full`}
        >
          Get Started{" "}
          {/* <motion.span
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.5 }}
            className="text-9xl scale-150 ml-5"
          >
            &gt;
          </motion.span> */}
        </motion.div>
      </div>
      {on && (
        <motion.div
          className="w-full z-50 fixed bottom-0 left-0 h-screen
          flex justify-center items-center
          bg-black cursor-default from-gray-900 from-25% to-cyan-500"
          initial={{ height: "0vh" }}
          animate={{ height: "100vh" }}
          exit={{ height: "0vh" }}
        >
          <button
            // variant="link"
            onClick={() => {
              seton(false);
            }}
            className="text-white  absolute top-5 left-5 pointer-events-auto hover:underline cursor-pointer"
          >
            back
          </button>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl"
          >
            Thank You
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
  );
}
