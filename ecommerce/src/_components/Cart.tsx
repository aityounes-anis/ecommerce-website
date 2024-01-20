import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { ShoppingCart, ShoppingBasket } from "lucide-react";

import { CartItem, CheckoutButton } from ".";

export type ProductsType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

const Cart = ({
  products,
  productsQuantity,
  updateCartProducts,
  removeProduct,
}: {
  products: ProductsType[];
  productsQuantity: number;
  updateCartProducts: (productId: number, newQuantity: number) => void;
  removeProduct: (productId: number) => void;
}) => {
  let totalPrice = 0;
  products.map((product) => {
    totalPrice += product.price * product.quantity;
    console.log(product.quantity);
  });

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="relative">
            <span className="absolute top-0 right-0 font-bold bg-black text-white w-5 h-5 text-center rounded-full">
              {productsQuantity}
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
          <div className="py-2">
            <Separator />
          </div>
          <div>
            {productsQuantity == 0 ? (
              <div className="flex flex-col items-center justify-center h-[450px] space-y-6">
                <ShoppingBasket size={100} />
                <p className="text-xl font-semibold">Panier Vide!</p>
              </div>
            ) : (
              <div className="w-full py-8 space-y-8">
                {products.map((product) => (
                  <div key={product.id}>
                    <CartItem
                      id={product.id}
                      name={product.name}
                      quantity={product.quantity}
                      price={product.price}
                      image={product.image}
                      updateCartProducts={updateCartProducts}
                      removeProduct={removeProduct}
                    />
                    <div className="py-2">
                      <Separator />
                    </div>
                  </div>
                ))}
                <div className="w-[200px] sm:w-[275px] absolute bottom-10 space-y-4 border-t-2 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Sous-total: </h1>
                    <p className="font-bold text-lg">{totalPrice}€</p>
                  </div>
                  <CheckoutButton />
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
