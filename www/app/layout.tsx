import { ThemeProvider } from "@/components/theme-provider";
import "./global.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  authors: [{ name: "Mehdi Hattou | Teczer", url: "https://mehdi-hattou.com" }],
  category: "developer tools",
  generator: "Next.js",
  applicationName: "Fast Expo App",
  title: "Fast Expo App",
  description:
    "Instantly generate a modern Expo app with this powerful CLI tool. Kickstart your mobile projects with Expo, Nativewind, TypeScript, React Native, MMKV, Prettier, ESLint, Jest, and more—all preconfigured with best practices. Save time and focus on building, not setting up.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Fast Expo App",
    statusBarStyle: "black-translucent",
  },
  keywords: [
    // Français
    "expo",
    "expo app",
    "expo cli",
    "npx fast-expo-app",
    "générateur d'application",
    "générer application expo",
    "starter mobile",
    "boilerplate expo",
    "meilleures pratiques",
    "projet mobile",
    "création application mobile",
    "template expo",
    "outils développeur mobile",
    "mobile moderne",
    "démarrage rapide",
    "fast-expo-app",
    // Anglais
    "expo",
    "expo app",
    "expo cli",
    "npx fast-expo-app",
    "react native",
    "nativewind",
    "mmkv",
    "typescript",
    "jest",
    "cli",
    "app generator",
    "expo app generator",
    "expo boilerplate",
    "expo starter",
    "mobile starter",
    "mobile boilerplate",
    "best practices",
    "mobile project",
    "mobile app creation",
    "expo template",
    "developer tools",
    "modern mobile app",
    "quick start",
    "fast-expo-app",
    "mobile app generator",
    "fullstack mobile",
    "expo setup",
    "modern expo app",
    "typescript template",
    "jest testing",
    "expo typescript",
    "expo mmkv",
    "expo nativewind",
    "expo jest",
    "npm cli",
    "npm package",
    "cross-platform",
    "cross-platform app",
    "react native starter",
    "react native boilerplate",
    "mobile development",
    "mobile app tools",
  ],
  openGraph: {
    type: "website",
    url: "https://fast-expo-app-web.vercel.app/",
    title: "Fast Expo App",
    description:
      "Instantly generate a modern Expo app with this powerful CLI tool. Kickstart your mobile projects with Expo, Nativewind, TypeScript, React Native, MMKV, Prettier, ESLint, Jest, and more—all preconfigured with best practices. Save time and focus on building, not setting up.",
    siteName: "Fast Expo App",
    images: [
      "https://fast-expo-app-web.vercel.app/apple-touch-icon-180x180.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://fast-expo-app-web.vercel.app/",
    creator: "@Mehdi_Hattou",
    images: "https://res.cloudinary.com/dw3mwclgk/image/upload/v1748809561/fast-expo-app-icon.png",
    title: "Fast Expo App",
    description:
      "Instantly generate a modern Expo app with this powerful CLI tool. Kickstart your mobile projects with Expo, Nativewind, TypeScript, React Native, MMKV, Prettier, ESLint, Jest, and more—all preconfigured with best practices. Save time and focus on building, not setting up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
