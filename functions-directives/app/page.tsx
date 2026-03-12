import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mask-b-from-50% p-1 rounded-3xl rounded-neutral-200">
        <Column>
          <Card
            href="https://posthog.com"
            src="/posthog.png"
            alt="Image 1"
            className="lg:rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href="https://posthog.com"
            src="/vercel.png"
            alt="Image 2"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/aceternity.png"
            alt="Image 3"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog.com"
            src="/aceternity-pro.png"
            alt="Image 4"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/tailwindcss.png"
            alt="Image 5"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/v0.png"
            alt="Image 12"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/Linear.png"
            alt="Image 6"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog.com"
            src="/resend.png"
            alt="Image 7"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/resend.png"
            alt="Image 8"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/nike.png"
            alt="Image 9"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/adidas.png"
            alt="Image 10"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://posthog.com"
            src="/myntra.png"
            alt="Image 11"
            className="lg:rounded-tr-[calc(24px-4px)]"
          />
          <Card
            href="https://posthog.com"
            src="/shure.png"
            alt="Image 13"
            className=""
          />
          <Card
            href="https://posthog.com"
            src="/vercel.png"
            alt="Image 14"
            className=""
          />
        </Column>
      </div>
    </div>
  );
}


const Card = ({ src, alt, className, href }: { src: string, alt: string, className: string, href: string }) => {
  return (
    <Link href={href} target="_blank" className={cn("card overlay group rounded-md", className)}>
        <Image
          src={src}
          alt={alt}
          height={500}
          width={500}
          className="w-full"
      />
      <p className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 font-medium text-sm m-auto flex justify-center items-center z-20">{href.split('https://')[1]}</p>
      </Link>
  );
}

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="text-xs text-neutral-500 max-w-xl mt-4">
        Discover innovative solutions that transforms the way you work and
        create. Our cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>
    </>
  );
}