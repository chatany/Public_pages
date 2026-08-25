import React, { useRef, useEffect } from "react";
import Button from "../Common/Button";

export default function HeroStocksSlide({ isLoggedIn }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
      {/* Content (Top on mobile via order-1, Right on desktop via md:order-2) */}
      <div className="z-base w-full md:w-[50%] lg:w-[48%] flex flex-col justify-center text-left order-1 md:order-2 py-0.5 md:py-1 mt-0 md:-mt-4">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold bg-[#2edbad]/10 text-[#2edbad] border border-[#2edbad]/30 w-fit mb-2 md:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2edbad] shadow-[0_0_8px_#2edbad] animate-pulse"></span>
          <span>NEW · STOCKS, METALS, OIL & COMMODITIES NOW LIVE</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight md:leading-[1.14] text-left tracking-tight">
          Trade the world's biggest markets with{" "}
          <span className="text-[#2edbad] bg-gradient-to-r from-[#2edbad] via-[#16c784] to-[#2edbad] bg-clip-text text-transparent">
            0% fees
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm md:text-base text-[#b2b8c2] mt-2.5 md:mt-6 text-left leading-relaxed max-w-xl">
          US stocks, gold, silver, oil and commodities - now tradable on BitZup
          alongside 2,300+ crypto assets. Zero commission, no hidden spread
          mark-ups, one account for everything.
        </p>

        {/* Desktop Action Buttons */}
        <div className="flex items-center gap-3 mt-7 md:mt-10 lg:mt-12 max-md:hidden">
          <Button
            variant="primary"
            className="h-11 px-7 text-sm font-bold"
            onClick={() =>
              (window.location.href = isLoggedIn
                ? "/trade/spot"
                : "/trade/register")
            }
          >
            Start trading now
          </Button>
          <Button
            variant="secondary"
            className="h-11 px-7 text-sm font-semibold"
            onClick={() => (window.location.href = "/trade/spot")}
          >
            See all markets
          </Button>
        </div>

        {/* Desktop Download Badges */}
        <div className="flex mt-7 md:mt-10 lg:mt-12 text-secondary text-sm w-full gap-24 max-md:hidden">
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

      {/* Video (Center-aligned with the text section) */}
      <div className="flex justify-center items-center w-full md:w-[50%] lg:w-[52%] order-2 md:order-1 my-2 md:-mt-4">
        <video
          ref={videoRef}
          src="/hero_markets_video_v4_intro.mp4"
          className="w-full max-w-full sm:max-w-lg md:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] max-h-[300px] sm:max-h-[360px] md:max-h-[480px] lg:max-h-[520px] object-contain rounded-2xl mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
        />
      </div>

      {/* Mobile Action Buttons (Bottom on mobile via order-3) */}
      <div className="flex items-center gap-3 mt-2 justify-between w-full md:hidden order-3">
        <Button
          variant="primary"
          className="h-9 flex-1 text-xs font-bold"
          onClick={() =>
            (window.location.href = isLoggedIn
              ? "/trade/spot"
              : "/trade/register")
          }
        >
          Start trading now
        </Button>
        <Button
          variant="secondary"
          className="h-9 flex-1 text-xs font-medium"
          onClick={() => (window.location.href = "/trade/spot")}
        >
          See all markets
        </Button>
      </div>

      {/* Mobile Download Badges (Bottom on mobile via order-4) */}
      <div className="flex gap-2.5 md:hidden mt-2 order-4">
        <a
          href="https://apps.apple.com/app/bitzup/id6749609757"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/apple-badge.png"
            className="w-auto h-8 cursor-pointer hover:opacity-80 transition-opacity"
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
            className="w-auto h-8 cursor-pointer hover:opacity-80 transition-opacity"
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
            className="w-auto h-8 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Android"
          />
        </a>
      </div>
    </div>
  );
}
