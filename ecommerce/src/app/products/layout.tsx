import { Footer, MarketingLine, Navbar } from "@/_components";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MarketingLine />
      <Navbar />
      <main className="bg-slate-100 h-full w-full overflow-hidden py-11">
        {children}
      </main>
      <Footer />
    </div>
  );
}
