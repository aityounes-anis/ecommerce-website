import { Cart } from ".";

import Image from "next/image";
import Link from "next/link";

import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-3 sticky top-0 left-0 bg-slate-100 z-50">
      <div className="max-w-screen-2xl flex items-center justify-between m-auto py-4 px-4 md:max-w-[800px] lg:max-w-[1275px]">
        <div className="flex items-center">
          <Image
            src="../../images/logo.svg"
            alt="LOGO"
            width={50}
            height={50}
          />
          <p className="font-bold text-md">El SAJAD</p>
        </div>
        <div className="flex space-x-2">
          <Button type="button" variant="ghost" asChild>
            <Link href="/">
              <UserRound />
            </Link>
          </Button>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
