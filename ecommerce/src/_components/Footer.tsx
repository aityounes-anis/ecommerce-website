import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full px-2 pt-24 flex flex-col items-center bg-gradient-to-tr from-amber-600/80 to-amber-300">
      <div className="w-full m-autolg:max-w-[1275px]">
        <div className="w-full pb-4 px-12 m-auto flex flex-col items-center space-y-8 md:flex-row md:items-start md:justify-between md:m-auto md:max-w-[800px] lg:max-w-[1275px]">
          <div className="flex flex-col items-center space-y-2 md:mt-8 md:text-start md:items-start md:justify-start">
            <h1 className="text-2xl font-bold">À Propos</h1>
            <div className="flex flex-col items-center justify-center md:text-start md:items-start">
              <Button type="button" variant="link">
                <Link href="/">Qui somme-nous ?</Link>
              </Button>
              <Button type="button" variant="link">
                <Link href="/">Mentions Légales</Link>
              </Button>
              <Button type="button" variant="link">
                <Link href="/">Condition Génerales de Vente</Link>
              </Button>
              <Button type="button" variant="link">
                <Link href="/">Poulitique de remboursement</Link>
              </Button>
              <Button type="button" variant="link">
                <Link href="/">Poulitique de confidentialité</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="flex flex-col items-center justify-center md:items-start">
              Contactez-nous sur la page
              <Button type="button" variant="link">
                <Link href="/">notre page contact</Link>
              </Button>
              ou par email à
              <Button type="button" variant="link">
                <Link href="/">example@gmail.com</Link>
              </Button>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:items-start">
            <h1 className="text-2xl font-bold">Connectez-vous</h1>
            <div className="space-x-2 md:space-y-2 flex md:flex-col items-start">
              <Button type="button" variant="outline">
                Créer un nouveau compte
              </Button>
              <Button type="button">Se connecter</Button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-8 px-12 flex items-center justify-between m-auto md:max-w-[800px] lg:max-w-[1275px]">
          <p className="text-center font-semibold text-neutral-800">
            &copy; {currentYear} EL SAJAD
          </p>
          <Image
            src="/../../images/credit-cards.png.webp"
            alt="credit-cards-image"
            width={1000}
            height={1000}
            quality={100}
            className="w-[261.5px] h-[28.5px] hidden md:block"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
