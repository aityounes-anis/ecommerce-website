import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productNumbers = Array.from({ length: 11 }, (_, index) => index + 1);

const Caroussel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {productNumbers.map((productNumbers) => (
            <CarouselItem key={productNumbers}>
              <Image
                src={`/../../images/products/a${productNumbers}.png`}
                alt={`product_${productNumbers}`}
                width={400}
                height={400}
                quality={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Caroussel;
