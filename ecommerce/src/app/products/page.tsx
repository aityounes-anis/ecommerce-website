import { ProductCard } from "@/_components";
import { data } from "@/data/products";

export default function Products() {
  return (
    <div className="w-full px-6 m-auto">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-xl">Nos Produits</h1>
        <div className="flex flex-col items-center space-y-4">
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
