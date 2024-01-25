import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const CheckoutButton = () => {
  return (
    <div>
      <Button size="lg">
        <div className="flex items-center space-x-2">
          <Lock />
          <h1 className="font-bold">Commender</h1>
        </div>
      </Button>
    </div>
  );
};

export default CheckoutButton;
