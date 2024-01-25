import { ProductsType } from "./Cart";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ProductCard = ({ product }: { product: ProductsType }) => {
  return (
    <div className="z-10 relative bg-white pb-4 shadow-sm shadow-black hover:cursor-pointer hover:brightness-90 hover:scale-105 transition">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={product.image}
          alt="product-img"
          width={450}
          height={450}
          quality={100}
          className="w-56 h-56"
        />
        <div className="w-52 flex items-start justify-between space-x-2">
          <h1 className="font-semibold">{product.name}</h1>
          <div className="flex flex-col items-center">
            <p className="text-neutral-800/90">{product.price}€</p>
            <Button size="icon">
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
