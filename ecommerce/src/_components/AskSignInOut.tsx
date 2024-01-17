import { Button } from "@/components/ui/button";
import Link from "next/link";

const AskSignInOut = () => {
  return (
    <div className="space-x-2">
      <Button type="button" variant="outline" asChild>
        <Link href="/">Créer un nouveau compte</Link>
      </Button>
      <Button type="button" asChild>
        <Link href="/">Se connecter</Link>
      </Button>
    </div>
  );
};

export default AskSignInOut;
