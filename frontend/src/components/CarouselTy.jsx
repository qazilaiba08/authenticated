"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";


export default function ImageCarousel() {
  const images = [
  { src: "/images/carous.jpeg" },
  { src: "/images/carou.jpeg" },
  { src: "/images/3.jpeg" },
  { src: "/images/carousel.jpeg" },
];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel className="relative">
        <CarouselContent>
         {images.map((image, index) => (
       <CarouselItem key={index} className="flex justify-center">
       <img
          src={image.src}
          alt={`Slide ${index + 1}`}
          className="rounded-lg object-cover w-full h-64 md:h-80"
        />
        </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
