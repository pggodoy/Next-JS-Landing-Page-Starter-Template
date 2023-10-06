import React, { useEffect, useRef } from "react";

// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    // Function to move to the next slide
    const nextSlide = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    const startRotation = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(nextSlide, 6000); // Adjust the interval as needed
      }
    };

    const stopRotation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startRotation();

    return () => {
      stopRotation();
    };
  }, [emblaApi]);

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="overflow-hidden w-full" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex">{children}</div>
    </div>
  );
};
export default Carousel;