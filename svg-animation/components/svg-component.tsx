"use client";
import { motion } from "motion/react";

export const SVGComponent = () => {
    return (
        <motion.div
            whileHover="animate"
            className="h-40 w-40 flex bg-white rounded-md shadow-sm items-center justify-center"
        >
            <SVG />
        </motion.div>
    );
};

export const CircleSVG = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            direction="ltr"
            width="357"
            height="224.5"
            viewBox="-1049 853 357 224.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <defs />
            <g transform="matrix(1, 0, 0, 1, -1017, 885)" opacity="1">
                <motion.path
                    strokeWidth="3.5"
                    d="M 0.211 79.1491 C -0.2612 36.3754 65.329 0.4462 146.2388 0.4462 C 227.6652 0.4331 293.2555 36.3623 293.2555 80.6831 C 294.1529 124.3421 228.5626 160.2712 147.6529 160.2712 C 65.8013 159.3991 0.211 123.4699 0.211 79.1491 M 0.8107 79.6663 C -0.1304 36.1261 65.4599 0.1969 146.3696 0.1969 C 227.0497 -0.5544 292.64 35.3748 292.64 79.6956 C 292.3982 125.603 226.808 161.5322 145.8982 161.5322 C 66.401 159.9163 0.8107 123.9871 0.8107 79.6663"
                    fill="none"
                    stroke="#1d1d1d"
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </g>
        </motion.svg>
    );
};

export const SVG = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-neutral-500"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                variants={{
                    animate: {
                        x: [0, 2, -2, 0],
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
            />
            <motion.path
                variants={{
                    animate: {
                        // x: [0, 5, 0, -5, 0],
                        rotate: [0, 10, -10, 0],
                    }
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
            />
        </motion.svg>
    );
};
