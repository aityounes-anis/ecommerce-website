/* eslint-disable react/no-unescaped-entities */
import { HeroSection } from "@/_components";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <HeroSection />
        <div className="px-4 py-4 space-x-11 -mt-16 w-full h-full flex flex-col items-center justify-center m-auto md:flex-row md:items-center md:justify-between md:max-w-[800px] md:py-8 lg:max-w-[1275px] lg:py-11">
          <div className="text-center space-y-4 py-4 md:text-start lg:space-y-8">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
              Pouqruoi Choisir
              <span className="bg-gradient-to-r from-amber-300 to-amber-200/50 px-2 py-1 rounded-r-lg">
                El SAJAD
              </span>
            </h1>
            <p className="text-neutral-800/85 leading-7 md:text-lg lg:w-2/3 lg:text-lg">
              La Réponse est facile! Profitez d'un pack qui contient les
              nécessitées de chaque Musulman: Tapis de Prière et un TASBIH!
            </p>
          </div>
          <Image
            src="/../../../images/sajad_01.png"
            alt="sajad_01"
            width={400}
            height={400}
            quality={100}
            className="w-[300px] h-[300px] shadow-black shadow-xl"
          />
        </div>
      </main>
    </div>
  );
}
