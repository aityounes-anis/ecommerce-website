"use client";

import { AskSignInOut, Cart, Logo } from ".";

import { useEffect, useState } from "react";

import { UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ProductsType } from "./Cart";

const Navbar = () => {
  const initialProducts: ProductsType[] = (() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (
          Array.isArray(parsedCart) &&
          parsedCart.every((item) => typeof item === "object")
        ) {
          return parsedCart as ProductsType[];
        }
      }
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
    }
    return [];
  })();

  const [products, setProducts] = useState<ProductsType[]>(initialProducts);
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
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setProducts(parsedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <nav className="w-full py-3 sticky top-0 left-0 bg-slate-100/95 z-50 shadow-sm shadow-black">
      <div className="max-w-screen-2xl flex items-center justify-between m-auto py-4 px-4 md:max-w-[800px] lg:max-w-[1275px]">
        <Logo />
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger>
              <UserRound />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connectez vous!</DialogTitle>
                <DialogDescription>
                  Restez connectés pour être informés de nos nouveaux produits !
                </DialogDescription>
                <div className="pt-4">
                  <AskSignInOut />
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Cart
            products={products}
            productsQuantity={productsQuantity}
            updateCartProducts={updateCartProducts}
            removeProduct={removeProduct}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
