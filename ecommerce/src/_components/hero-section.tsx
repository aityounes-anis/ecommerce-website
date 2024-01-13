import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src="/../../../images/hero-section-background.png"
          alt="hero-section-image"
          width={2000}
          height={2000}
          quality={100}
          className="w-full h-[80vh] object-cover brightness-50 -z-50"
        />
        <div className="flex flex-col items-center justify-center text-center relative bottom-[500px] space-y-8 md:bottom-[400px]">
          <div className="space-y-3">
            <h1 className="text-xl text-amber-300/85 font-bold md:text-3xl">
              Designs Uniques et Personalisés
            </h1>
            <p className="text-neutral-200/80 leading-6">
              Découvrez nos Tapis de Compact et Portables, Parfaits pour Ne
              Jamais Manquer un Moment de Prière, Où vous soyez!
            </p>
          </div>
          <div>
            <Button
              type="button"
              variant="outline"
              className="space-x-2"
              asChild
            >
              <Link href="/">
                Commendez maintenant
                <span>
                  <ChevronRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
