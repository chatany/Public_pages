export default function Partners() {
  const partners = [
    "Crystal.svg",
    "Sumsub.svg",
    "Alchemy.png",
    "fireblock.svg",
    "Trading.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden border-t border-b border-border bg-black">
      {/* Marquee Track */}
      <div className="flex w-max marquee items-center py-4 md:py-5">
        {[...partners, ...partners, ...partners, ...partners].map((item, i) => (
          <img
            key={i}
            src={`/${item}`}
            alt={`${item.split(".")[0]} partner logo`}
            className="mx-8 md:mx-12 w-20 md:w-28 whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-300 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
