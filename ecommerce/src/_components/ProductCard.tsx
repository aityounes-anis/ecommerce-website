"use client";

import { ProductsType } from "./Cart";
import { useCart } from "@/hook/useCart";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  return (
    <div className="z-10 relative bg-white pb-4 justify-around shadow-sm mt-4 shadow-black hover:cursor-pointer hover:brightness-90 hover:scale-105 transition">
      <div className="flex flex-col items-center space-y-2 ">
        <Image
          src={product.image}
          alt="product-img"
          width={450}
          height={450}
          quality={100}
          className="w-56 h-56"
        />
        <div className="w-52 flex items-start justify-between space-x-2">
          <h1 className="font-semibold md:text-lg">{product.name}</h1>
          <div className="flex flex-col items-center">
            <p className="font-bold text-neutral-800/90 md:text-lg">
              {product.price}€
            </p>
            <Button
              size="icon"
              onClick={() => {
                toast({
                  description: "Vous avez ajouter un produit au panier!",
                });
                addToCart(product);
              }}
            >
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
