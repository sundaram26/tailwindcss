import Image from "next/image"; 
import { SiClaude, SiGooglegemini, SiMeta, SiOpenai } from "react-icons/si";

export default function Home() {

  const icons = [
    {
      title: "Claude",
      size: "size-8",
      circle: "circle-1",
      icon: <SiClaude className="h-4 w-4" />
    },
    {
      title: "OpenAI",
      size: "size-16",
      circle: "circle-1",
      icon: <SiOpenai className="h-8 w-8" />
    },
    {
      title: "Meta",
      size: "size-12",
      circle: "circle-1",
      icon: <SiMeta className="h-8 w-8" />
    },
    {
      title: "Google Gemini",
      size: "size-8",
      circle: "circle-1",
      icon: <SiGooglegemini className="h-4 w-4" />
    },
  ]

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative z-10 h-80 w-60 bg-neutral-200 shadow-2xl border border-neutral-200 rounded-xl">
        <div>
          <div className="flex items-center justify-center gap-4">
            {icons.map((icon, index) => (
              <div key={icon.title className={`${icon.size} `}>
                  {icon.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pattern />
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pointer-events-none">
    </div>
  )
}
