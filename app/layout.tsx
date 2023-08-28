import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { League_Spartan } from "next/font/google";
import styles from "../styles/custom.module.css";
import ParticlesBackground from "../components/utils/background/ParticlesBackground";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const inter = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div
            className={clsx(
              "relative flex flex-col h-screen",
              styles.fadeup,
              styles.snap
            )}
          >
            <main
              className={clsx(
                "container mx-auto max-w-5xl px-6 flex-grow",
                inter.className
              )}
            >
              <Navbar />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
