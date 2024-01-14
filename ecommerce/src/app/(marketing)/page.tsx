/* eslint-disable react/no-unescaped-entities */
import { HeroSection, Carroussel, CircleSection } from "@/_components";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <HeroSection />
        <div className="px-4 py-4 space-x-11 -mt-16 w-full h-full flex flex-col items-center justify-center m-auto md:flex-row md:items-center md:justify-between md:max-w-[800px] md:py-8 lg:max-w-[1275px] lg:py-11">
          <div className="text-center space-y-4 py-4 md:text-start lg:space-y-8">
            <h1 className="text-2xl font-extrabold md:text-3xl lg:text-5xl">
              Pouqruoi Choisir
              <span className="bg-gradient-to-r from-amber-300 to-amber-200/50 px-2 py-1 rounded-r-lg">
                El SAJAD
              </span>
            </h1>
            <p className="text-neutral-800/85 leading-7 md:text-lg lg:w-2/3">
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
        <div className="flex flex-col items-center justify-center m-auto pt-32 pb-8 px-2 space-y-11 md:max-w-[800px] md:flex-row-reverse md:justify-between lg:max-w-[1275px]">
          <div className="text-center space-y-3 md:space-y-4 md:text-start md:w-1/2">
            <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
              Vous ne Pouvez pas trouver votre couleur préférée...
            </h1>
            <p className="text-neutral-800/85 leading-6 md:text-lg">
              Pas de soucis, EL SAJAD va vous aider à trouver ce que vous
              cherchez et vous donne le choix parmi 11 couleurs différentes!
            </p>
          </div>
          <div className="w-64 h-64 lg:w-72 lg:h-72">
            <Carroussel />
          </div>
        </div>
        <div className="py-11 flex flex-col items-center justify-center space-y-16 md:py-32 lg:py-40">
          <div>
            <h1 className="font-extrabold text-2xl md:text-4xl">
              <span className="pr-3 pl-1 bg-gradient-to-r from-amber-300 to-amber-200/85 rounded-r">
                EL SAJAD
              </span>
              vous offre
            </h1>
          </div>
          <div className="w-full m-auto md:max-w-[800px] lg:max-w-[1275px]">
            <div className="flex flex-col items-center justify-center space-y-11 md:flex-row">
              <CircleSection
                number={1}
                title="Livraison gratuite"
                description="dés 30€ d'achats"
              />
              <CircleSection
                number={2}
                title="Garentie"
                description="14 jours de garentie"
              />
              <CircleSection
                number={3}
                title="Sécurisé"
                description="Apple pay / Visa / MasterCard"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
