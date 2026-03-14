"use client";
import { motion } from "motion/react";

const Content = () => {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] h-screen bg-neutral-900 flex items-center justify-center [background:radial-gradient(circle_at_0.5px_0.5px,rgba(6,182,212,0.2)_1px,transparent_1px)_0_0/8px_8px] ">
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5
        }}
        whileTap={{
          y: 0
        }}
        style={{
          translateZ: 100
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,2px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-color duration-300">Subscribe</span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparen h-px w-3/4 mx-auto" />
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparen h-[4px] w-full mx-auto blur-md" />
      </motion.button>
    </div>
  );
}

export default Content