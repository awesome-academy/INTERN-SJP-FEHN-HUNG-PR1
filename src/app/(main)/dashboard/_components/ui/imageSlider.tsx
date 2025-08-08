// src/components/ui/ImageSlider.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel"; 
import { cn } from '@/lib/utils';

const ImageSlider = () => {
  const slideImages = [
    { id: 1, src: '/img-slide.png', alt: 'Slide 1' },
    { id: 2, src: '/img-slide.png', alt: 'Slide 2' },
    { id: 3, src: '/img-slide.png', alt: 'Slide 3' },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  return (
    <div className="relative w-full h-full">
      <Carousel
        setApi={setApi} 
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className='h-full'>
          {slideImages.map((slide) => (
            <CarouselItem key={slide.id} className='h-full'>
              <Image 
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={590}
                className='w-full h-full object-cover'
                priority={slide.id === 1}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              current === index + 1 ? "bg-green-500" : "bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
