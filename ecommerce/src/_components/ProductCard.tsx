import { ProductsType } from "./Cart";

const ProductCard = ({ product }: { product: ProductsType }) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductCard;
