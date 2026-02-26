import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-neutral-900 flex justify-center">
      <Hero />
    </div>
  );
}
