import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./useAuth";
import HeroCryptoSlide from "./Components/HeroCryptoSlide";
import HeroStocksSlide from "./Components/HeroStocksSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const isLoggedIn = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: "markets",
      component: <HeroStocksSlide isLoggedIn={isLoggedIn} />,
    },
    {
      id: "crypto",
      component: <HeroCryptoSlide isLoggedIn={isLoggedIn} />,
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="relative w-full pt-28 md:pt-36 pb-16 md:pb-24 bg-black flex flex-col justify-center items-center select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 w-full">
        {/* Slide Carousel Frame */}
        <div className="relative min-h-[480px] md:min-h-[520px] flex items-center overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`w-full transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 relative z-10 translate-x-0 scale-100"
                    : "opacity-0 absolute inset-0 z-0 pointer-events-none scale-[0.98] " +
                      (index < currentSlide
                        ? "-translate-x-12"
                        : "translate-x-12")
                }`}
              >
                {slide.component}
              </div>
            );
          })}
        </div>

        {/* Slide Pill Indicators */}
        <div className="flex items-center justify-center gap-3 mt-12 md:mt-16 z-30">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 md:h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "w-10 md:w-12 bg-[#2edbad] shadow-[0_0_12px_rgba(46,219,173,0.8)]"
                    : "w-10 md:w-12 bg-[#242831] hover:bg-[#323742]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Outer Arrow Navigation (placed at far screen edges so they never overlap content) */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 lg:left-6 xl:left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#171a1f]/80 hover:bg-[#2edbad]/20 border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-[#2edbad] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 cursor-pointer max-md:hidden backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#171a1f]/80 hover:bg-[#2edbad]/20 border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-[#2edbad] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 cursor-pointer max-md:hidden backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
