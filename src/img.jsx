import { useEffect, useState } from "react";

const items = [1, 2, 3, 4, 5, 6];

export default function Carousel() {
  const visibleCards = 3;
  const totalDots = Math.ceil(items.length / visibleCards);

  const [active, setActive] = useState(0);

  // 👉 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % totalDots);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [totalDots]);

  const translateX = -(active * 100);

  return (
    <div className="w-full bg-black py-20 overflow-hidden">
      {/* Carousel */}
      <div className="mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {items.map((_, i) => (
            <div
              key={i}
              className="min-w-[33.3333%] px-4"
            >
              <div className="h-[300px] rounded-3xl border-[1px] border-white"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition ${
              active === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
