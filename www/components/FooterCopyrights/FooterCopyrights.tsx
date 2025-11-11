import Link from "next/link";

export const FooterCopyrights = () => {
  return (
    <p className="absolute bottom-2 z-50 flex w-full items-center justify-center gap-x-1 bg-transparent py-4 text-center text-xs">
      Made with ❤️ by
      <Link
        href={"https://github.com/Teczer"}
        target="_blank"
        className="font-bold transition-all hover:scale-110 hover:cursor-pointer"
      >
        @Teczer_
      </Link>
    </p>
  );
};
