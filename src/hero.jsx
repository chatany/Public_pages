import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./useAuth";
import HeroCryptoSlide from "./Components/HeroCryptoSlide";
import HeroStocksSlide from "./Components/HeroStocksSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const isLoggedIn = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const pauseTimeoutRef = useRef(null);

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

  // Auto-play timer (10 seconds for comfortable reading)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

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
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    // Resume auto-play after 8 seconds of inactivity on mobile
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Only switch if horizontal movement is dominant and exceeds 75px threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 75) {
      if (diffX > 75) {
        handleNext();
      } else if (diffX < -75) {
        handlePrev();
      }
    }
  };

  return (
    <section
      className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-10 bg-black flex flex-col justify-center items-center select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 w-full">
        {/* Slide Carousel Frame (Responsive on mobile, fixed exact height on desktop) */}
        <div className="relative min-h-[540px] sm:min-h-[500px] md:h-[500px] md:min-h-0 flex items-center overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`w-full md:h-full flex items-center transition-all duration-700 ease-in-out ${
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
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 md:mt-10 z-30">
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

      {/* Outer Arrow Navigation (Only visible on desktop hover, completely hidden on mobile) */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-3 lg:left-6 xl:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#171a1f]/90 hover:bg-[#2edbad] border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(46,219,173,0.4)] backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-3 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#171a1f]/90 hover:bg-[#2edbad] border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(46,219,173,0.4)] backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
