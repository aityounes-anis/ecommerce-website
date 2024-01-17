import { CTAButton } from ".";

import AccordionLine from "./AccordionLine";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center px-2 space-y-6 md:space-y-16">
      <h1 className="text-3xl font-bold text-center leading-9 md:text-4xl">
        Tous ce que vous voulez savoir!
      </h1>
      <div className="space-y-4 text-start m-auto md:w-[500px]">
        <AccordionLine
          accordionTrigger="Est-ce qu'EL SAJAD n'offre que des tapis de prière ?"
          accordionContent="Actuellement oui ! Cependant, EL SAJAD est une boutique engagée qui vous proposera bientôt une large gamme de produits de qualité !"
        />
        <AccordionLine
          accordionTrigger="Est-ce que je vais trouvez ma colleur préferée ?"
          accordionContent="Certainement ! EL SAJAD propose une vaste palette de couleurs comprenant 10 teintes : blanc, rouge, beige, rose, bleu, grenat, rose clair, or, noir."
        />
        <AccordionLine
          accordionTrigger="La Livraison, Est-elle rapide ?"
          accordionContent="Bien sûr! La Livraison de nos produits ne prendera pas plus de 3 jours!"
        />
      </div>
      <div className="py-4">
        <CTAButton variantButton="default" />
      </div>
    </div>
  );
};

export default FAQ;
