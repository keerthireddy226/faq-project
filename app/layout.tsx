import type { Metadata } from "next";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";

import { Cormorant_Garamond, DM_Sans, DM_Mono, Sora } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Edstellar",
    template: "%s | Edstellar",
  },
  description:
    "Corporate training and workforce development solutions by Edstellar.",
    robots: {
    index: false,
    follow: false,
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${cormorant.variable}
        ${dmSans.variable}
        ${dmMono.variable}
        ${sora.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
