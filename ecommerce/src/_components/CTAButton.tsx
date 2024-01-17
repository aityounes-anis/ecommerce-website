import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type VariantButtonType =
  | "default"
  | "destructive"
  | "link"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

const CTAButton = ({ variantButton }: { variantButton: VariantButtonType }) => {
  return (
    <>
      <Button
        type="button"
        variant={variantButton}
        className="space-x-2"
        asChild
      >
        <Link href="/">
          Commendez maintenant
          <span>
            <ChevronRight />
          </span>
        </Link>
      </Button>
    </>
  );
};

export default CTAButton;
