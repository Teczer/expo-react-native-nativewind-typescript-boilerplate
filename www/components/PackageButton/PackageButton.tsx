"use client";

import { useState } from "react";
import { RainbowButton } from "../magicui/rainbow-button";

export function PackageButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx fast-expo-app@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <RainbowButton size={"lg"} onClick={handleCopy}>
      npx fast-expo-app@latest{" "}
      {copied ? (
        <span className="text-green-500">✔</span>
      ) : (
        <span className="text-blue-400">📋</span>
      )}
    </RainbowButton>
  );
}
