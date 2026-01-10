export default function Partners() {
  const partners = [
    "CryptoSwift.svg",
    "Unlimit.svg",
    "Crystal.svg",
    "Sumsub.svg",
    "Alchemy.svg",
    "fireblock.svg",
    "Trading.svg",
  ];

  return (
    <div className="relative w-[95%] right-[2.5%] left-[2.5%] overflow-hidden border-t-2 border-b-2 ">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max marquee">
        {[...partners, ...partners].map((item, i) => (
          <img
            key={i}
            src={`/${item}`}
            className="mx-12 py-6  text-[20px] whitespace-nowrap"
          />
        
        ))}
      </div>
    </div>
  );
}
