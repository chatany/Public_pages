export default function Partners() {
  const partners = [
    // "CryptoSwift.svg",
    "Crystal.svg",
    "Sumsub.svg",
    "Alchemy.png",
    "fireblock.svg",
    "Trading.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden md:border-t md:border-b border-border">
      {/* Gradient fades */}
      {/* <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent z-10" /> */}

      {/* Marquee Track */}
      <div className="flex w-max marquee">
        {[...partners, ...partners, ...partners, ...partners].map((item, i) => (
          <img
            key={i}
            src={`/${item}`}
            alt={`${item.split(".")[0]} partner logo`}
            className="mx-12 py-9 w-28 whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
