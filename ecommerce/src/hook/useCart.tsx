"use client";

import { useState } from "react";

import { ProductsType } from "@/_components/Cart";

export const useCart = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const productsQuantity = products.length;

  const updateCartProducts = (productId: number, newQuantity: number) => {
    const updatedCartProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setProducts(updatedCartProducts);
  };

  const removeProduct = (productId: number) => {
    const newCartProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(newCartProducts);
    localStorage.setItem("cart", JSON.stringify(newCartProducts));
  };

  return {
    products,
    setProducts,
    updateCartProducts,
    removeProduct,
    productsQuantity,
  };
};
