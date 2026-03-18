"use client";
import { cn } from "@/utils/lib"
import { MessageSquareText, PlusIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const Card = () => {

  const [isOpen, setIsOpen] = useState(true);


    return (
      <>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className={cn(
                "w-76 min-h-[28.5rem] h-[28.5rem] rounded-xl",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                "p-6 flex flex-col",
              )}
            >
              <h2 className="font-bold text-[10px]">
                Aceternity UI Components
              </h2>
              <p className="text-neutral-600 mt-2 text-[10px]">
                Collection of beautiful UI components, let's get on with it.
              </p>
              <div className="flex items-center justify-center">
                <button
                  onClick={(prev) => setIsOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg px-2 py-1"
                >
                  <Image
                    width={50}
                    height={50}
                    className="h-4 w-4"
                    alt="logo"
                    src="/logo.png"
                  />{" "}
                  Aceternity
                  <X className="h-3 w-3 text-neutral-400" />
                </button>
              </div>
              <div className="flex-1 bg-gray-100 mt-4 rounded-lg border border-neutral-200 relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    mass: 1,
                  }}
                  className="absolute inset-0 h-full w-full border border-neutral-500 rounded-lg bg-white divide-y divide-neutral-200"
                >
                  <div className="flex gap-2 p-3 items-center">
                    <div
                      className={cn(
                        "h-8 w-8 flex-shrink-0 bg-gradient-to-br",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "bg-white rounded-md flex items-center justify-center",
                      )}
                    >
                      <MessageSquareText className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-neutral-600">
                        Aceternity UI Component
                      </p>
                      <p className="text-neutral-400 text-xs mt-1">
                        A collection of UI components
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3 items-center">
                    <div
                      className={cn(
                        "h-8 w-8 flex-shrink-0 bg-gradient-to-br",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "bg-white rounded-md flex items-center justify-center",
                      )}
                    >
                      <MessageSquareText className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-neutral-600">
                        Aceternity UI Component
                      </p>
                      <p className="text-neutral-400 text-xs mt-1">
                        A collection of UI components
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3 items-center">
                    <div
                      className={cn(
                        "h-8 w-8 flex-shrink-0 bg-gradient-to-br",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "bg-white rounded-md flex items-center justify-center",
                      )}
                    >
                      <MessageSquareText className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-neutral-600">
                        Aceternity UI Component
                      </p>
                      <p className="text-neutral-400 text-xs mt-1">
                        A collection of UI components
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3 items-center">
                    <div
                      className={cn(
                        "h-8 w-8 flex-shrink-0 bg-gradient-to-br",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "bg-white rounded-md flex items-center justify-center",
                      )}
                    >
                      <MessageSquareText className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-neutral-600">
                        Aceternity UI Component
                      </p>
                      <p className="text-neutral-400 text-xs mt-1">
                        A collection of UI components
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-3 items-center justify-center">
                    <div
                      className={cn(
                        "h-8 w-8 flex-shrink-0 bg-gradient-to-br",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "bg-white rounded-md flex items-center justify-center",
                      )}
                    >
                      <PlusIcon className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-neutral-400 text-xs mt-1">
                        Create Project
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
}

export default Card