import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import { FooterCopyrights } from "@/components/FooterCopyrights/FooterCopyrights";
import { GithubButton } from "@/components/GithubButton/GithubButton";
import { MainTitle } from "@/components/MainTitle/MainTitle";
import { PackageButton } from "@/components/PackageButton/PackageButton";
import { TerminalCode } from "@/components/TerminalCode/TerminalCode";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black lg:max-h-screen">
      <Link
        href={"https://github.com/Teczer/fast-expo-app"}
        className="absolute top-4 right-4 z-50 hidden size-14 cursor-pointer rounded-full p-3 hover:bg-gray-900 lg:block"
        target="_blank"
      >
        <GithubButton />
      </Link>
      <BackgroundLines className="flex flex-col items-center justify-start gap-10 pt-10 md:items-center md:justify-start md:pt-20">
        <MainTitle />
        <PackageButton />
        <div className="flex h-full w-full flex-col items-center justify-start gap-y-10 md:flex-row md:items-center md:justify-center md:gap-x-20">
          <TerminalCode />
          <div className="hidden md:block">
            <AnimatedBeamDemo />
          </div>
        </div>
      </BackgroundLines>
      <FooterCopyrights />
    </main>
  );
}
