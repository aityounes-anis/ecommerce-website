"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type CounterType = {
  quantity: number;
  setProductQuantity: (newQuantity: number) => void;
};

const Counter = ({ quantity, setProductQuantity }: CounterType) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const addQuantity = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    setProductQuantity(newQuantity);
  };
  const subQuantity = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
      setProductQuantity(newQuantity);
    } else {
      setCurrentQuantity(currentQuantity);
      setProductQuantity(currentQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button type="button" size="icon" onClick={subQuantity}>
        <Minus />
      </Button>
      <p>{currentQuantity}</p>
      <Button type="button" size="icon" onClick={addQuantity}>
        <Plus />
      </Button>
    </div>
  );
};

export default Counter;
