import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart, ShoppingBasket } from "lucide-react";

import Image from "next/image";

const Cart = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="relative">
            <span className="absolute top-0 right-0 font-bold bg-black text-white w-5 h-5 text-center rounded-full">
              4
            </span>
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Votre Panier</SheetTitle>
            <SheetDescription>
              À la recherche de trésors à ajouter.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-[450px] space-y-6">
            <ShoppingBasket size={100} />
            <p className="text-xl font-semibold">Panier Vide!</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
