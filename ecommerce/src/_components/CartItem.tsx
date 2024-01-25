"use client";

import { Counter } from ".";
import { ProductsType } from "./Cart";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const CartItem = ({
  id,
  name,
  quantity,
  price,
  image,
  updateCartProducts,
  removeProduct,
}: ProductsType & {
  updateCartProducts: (productId: number, newQuantity: number) => void;
  removeProduct: (productId: number) => void;
}) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setProductQuantity(newQuantity);
    updateCartProducts(id, newQuantity);
  };

  const totalProductPrice = price * productQuantity;

  return (
    <div className="flex flex-row-reverse items-basline justify-between">
      <Image
        src={image}
        alt="img"
        width={250}
        height={250}
        className="w-24 h-24"
      />
      <div className="flex flex-col items-start space-y-2">
        <h1 className="font-semibold">{name}</h1>
        <div className="flex items-center space-x-4">
          <Counter
            quantity={productQuantity}
            setProductQuantity={handleQuantityChange}
          />
          <p className="font-semibold">{totalProductPrice}€</p>
        </div>
        <Button
          type="button"
          variant="link"
          size="icon"
          onClick={() => removeProduct(id)}
        >
          <p className="text-red-600 ml-6">Effacer</p>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
