import React from "react";
import Image from "next/image";
import bgImage from "../_assets/hero_bg.jpg";
import { Lateef, Play } from "next/font/google";

const lateef = Lateef({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <section>
      <div className="relative container rounded-3xl overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={bgImage}
          alt="port"
          width={1536}
          height={576}
        />
        <div
          className="relative flex items-center justify-center z-10
					font-medium shadow-md py-12 sm:py-24 md:py-48"
        >
          <div className="flex flex-col gap-8 px-16">
            {/* hero title */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image
                src="./logo-light.svg"
                width={90}
                height={90}
                alt="Marlena Logo"
                className="mt-2"
              />
              <h1 className="flex flex-col">
                <span
                  className={`${lateef.className} uppercase font-medium 
									text-5xl md:text-7xl tracking-widest`}
                >
                  Marlena
                </span>
                <span className=" tracking-widest text-base md:text-xl">
                  Group of Companies LTD
                </span>
              </h1>
            </div>
            {/* hero subtitle */}
            <p
              className={`${play.className} tracking-wide text-center text-lg md:text-2xl xl:ml-64`}
            >
              Перевалка Грузов и Логистические Услуги
            </p>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full 
					bg-gradient-to-r from-green-900 via-slate-900 to-violet-900 opacity-70"
        />
      </div>
    </section>
  );
}
