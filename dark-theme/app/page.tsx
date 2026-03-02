"use client";
import { useTheme } from "next-themes";
import { SiClaude, SiGooglegemini, SiMeta, SiOpenai } from "react-icons/si";

export default function Home() {
  const icons = [
    {
      title: "Claude",
      circle: "circle-1",
      icon: <SiClaude className="size-6" />,
    },
    {
      title: "OpenAI",
      circle: "circle-1",
      icon: <SiOpenai className="size-6" />,
    },
    {
      title: "Meta",
      circle: "circle-1",
      icon: <SiMeta className="size-6" />,
    },
    {
      title: "Google Gemini",
      circle: "circle-1",
      icon: <SiGooglegemini className="size-6" />,
    },
  ];
   
  const { theme, setTheme } = useTheme();

  // const handleThemeChange = () => {
  //   const currentTheme = document.documentElement.classList.contains("dark")
  //     ? "light"
  //     : "dark";
  //   document.documentElement.classList.toggle("dark");
  //   localStorage.setItem("theme", currentTheme);
  // }
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative z-10 h-95 w-75 bg-neutral-50 dark:bg-neutral-900 shadow-2xl border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden">
        <div className="relative mask-r-from-50% mask-l-from-50% mask-b-from-50% mask-t-from-50%">
          <Pattern />
          <div className="flex items-center justify-center gap-4 h-40 animate-marquee">
            {icons.map((icon, index) => (
              <div
                key={icon.title}
                className={`rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center size-12`}
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-neutral-600 dark:text-white text-[12px] mt-4 mb-2">
            These LLMs are getting out of hand
          </h2>
          <p className="text-neutral-400 dark:text-neutral-300 text-[12px]">
            I swear to god there's always another AI dropping and twitter goes
            crazy. It's all a myth guys. Like seriously. one day it's Claude,
            then GPT-4, then Gemini, then Claude 2, then GPT-4 Turbo when will
            it end? They're all just fancy autocomplete.
          </p>
          <button onClick={handleThemeChange} className="px-4 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[14px] text-neutral-500 dark:text-white mt-4 cursor-pointer">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pointer-events-none"></div>
  );
};
