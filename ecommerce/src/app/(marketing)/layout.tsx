import { MarketingLine, Navbar } from "@/_components";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("h-[100vh] bg-slate-100", textFont.className)}>
      <MarketingLine />
      <Navbar />
      <main className="bg-slate-100 h-[100vh]">{children}</main>
    </div>
  );
}
