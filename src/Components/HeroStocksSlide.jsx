import React from "react";

export default function HeroStocksSlide({ isLoggedIn }) {
  return (
    <div className="w-full flex max-md:flex-col max-md:gap-6 justify-between items-center">
      {/* Left Content */}
      <div className="z-base w-full md:w-[50%] flex flex-col text-left">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2edbad]/10 text-[#2edbad] border border-[#2edbad]/30 w-fit mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2edbad] shadow-[0_0_8px_#2edbad] animate-pulse"></span>
          <span>NEW · STOCKS, GOLD, OIL & COMMODITIES NOW LIVE</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] text-left tracking-tight">
          Trade the world's biggest markets with{" "}
          <span className="text-[#2edbad] bg-gradient-to-r from-[#2edbad] via-[#16c784] to-[#2edbad] bg-clip-text text-transparent">
            0% fees
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-sm md:text-base text-[#b2b8c2] mt-4 text-left leading-relaxed max-w-xl">
          US stocks, gold, silver, oil and commodities — now tradable on BitZup
          alongside 2,300+ crypto assets. Zero commission, no hidden spread
          mark-ups, one account for everything.
        </p>

        {/* Desktop Action Buttons */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          <button
            onClick={() =>
              (window.location.href = isLoggedIn
                ? "/trade/spot"
                : "/trade/register")
            }
            className="h-11 px-7 rounded-full bg-[#2edbad] hover:bg-[#2ebd85] text-black font-bold text-sm flex items-center justify-center transition-all duration-200 hover:shadow-[0_0_20px_rgba(46,219,173,0.4)] active:scale-95 cursor-pointer"
          >
            Start trading now
          </button>
          <button
            onClick={() => (window.location.href = "/trade/spot")}
            className="h-11 px-7 rounded-full border border-[#2b3139] hover:border-[#2edbad] hover:text-[#2edbad] bg-transparent text-white font-semibold text-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            See all markets
          </button>
        </div>

        {/* Desktop Download Badges */}
        <div className="flex mt-8 text-secondary text-sm w-full gap-24 max-md:hidden">
          <div>
            <div className="flex gap-3">
              <a
                href="https://apps.apple.com/app/bitzup/id6749609757"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/apple-badge.png"
                  className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
                  alt="App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bitzup"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/google-play-badge.png"
                  className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
                  alt="Google Play"
                />
              </a>
              <a
                href="https://download.bitzup.com/app-release.apk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/android-badge.png"
                  className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
                  alt="Android"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Video */}
      <div className="flex justify-center items-center w-full md:w-[48%] overflow-visible py-2 md:py-0">
        <video
          src="/hero_markets_video_v4_intro.mp4"
          className="w-full max-w-[540px] h-auto object-contain rounded-xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Mobile Action Buttons */}
      <div className="flex items-center gap-3 mt-4 justify-between w-full md:hidden">
        <button
          onClick={() =>
            (window.location.href = isLoggedIn
              ? "/trade/spot"
              : "/trade/register")
          }
          className="h-9 px-5 rounded-full bg-[#2edbad] text-black font-bold text-xs flex-1 flex items-center justify-center"
        >
          Start trading now
        </button>
        <button
          onClick={() => (window.location.href = "/trade/spot")}
          className="h-9 px-5 rounded-full border border-[#2b3139] text-white font-medium text-xs flex-1 flex items-center justify-center"
        >
          See all markets
        </button>
      </div>

      {/* Mobile Download Badges */}
      <div className="flex gap-3 md:hidden mt-2">
        <a
          href="https://apps.apple.com/app/bitzup/id6749609757"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/apple-badge.png"
            className="w-auto md:h-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
            alt="App Store"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.bitzup"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/google-play-badge.png"
            className="w-auto md:h-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Google Play"
          />
        </a>
        <a
          href="https://download.bitzup.com/app-release.apk"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/android-badge.png"
            className="w-auto md:h-10 h-8 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Android"
          />
        </a>
      </div>
    </div>
  );
}
