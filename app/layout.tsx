import Header from "./_components/header";
import Footer from "./_components/footer";

import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";

import "./globals.css";

const nunito = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Marlena Group of Companies LTD",
  description:
    "The Marlena Group of Companies provides freight forwarding services for transshipment of liquid and bulk cargoes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
