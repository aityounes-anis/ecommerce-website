import { ProductCard } from "@/_components";
import { data } from "@/data/products";

export default function Products() {
  return (
    <div className="w-full px-6 m-auto">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-xl md:text-3xl md:font-extraold">
          Nos Produits
        </h1>
        <div className="flex flex-col flex-wrap items-center py-8 md:max-w-[800px] md:m-auto md:flex-row md:basis-1/5 md:justify-between lg:max-w-[1275px]">
          {data.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
