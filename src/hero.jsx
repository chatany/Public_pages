import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./useAuth";
import HeroCryptoSlide from "./Components/HeroCryptoSlide";
import HeroStocksSlide from "./Components/HeroStocksSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const isLoggedIn = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const SLIDE_DURATION = 10000; // 9 seconds per slide

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

  // Infinite cyclic auto-play timer: Stocks (0) -> Crypto (1) -> Stocks (0) -> Crypto (1)...
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
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
      className="relative w-full pt-16 md:pt-16 pb-2 md:pb-3 bg-black flex flex-col justify-center items-center select-none group md:h-[calc(100vh-74px)] md:min-h-[580px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Slide Carousel Frame (Tightly holds large visuals & content) */}
        <div className="relative w-full flex-1 flex items-center overflow-hidden min-h-[460px] md:min-h-0">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`w-full h-full flex items-center transition-all duration-700 ease-in-out ${
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

        {/* Slide Pill Indicators with Continuous Timer Progress */}
        <div className="flex items-center justify-center gap-3 mt-2 md:mt-3 z-30 shrink-0">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="relative h-1.5 md:h-2 w-12 md:w-14 rounded-full bg-[#242831] overflow-hidden cursor-pointer hover:bg-[#323742] transition-colors"
              >
                {isActive ? (
                  <div
                    key={`${slide.id}-${currentSlide}`}
                    className="absolute inset-0 bg-[#2edbad] rounded-full shadow-[0_0_12px_rgba(46,219,173,0.8)] origin-left"
                    style={{
                      animation: `heroSlideProgress ${SLIDE_DURATION}ms linear forwards`,
                    }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Outer Arrow Navigation (Only visible on desktop hover, completely hidden on mobile) */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#171a1f]/90 hover:bg-[#2edbad] border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(46,219,173,0.4)] backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#171a1f]/90 hover:bg-[#2edbad] border border-[#2b3139] hover:border-[#2edbad] text-[#848e9c] hover:text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(46,219,173,0.4)] backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
