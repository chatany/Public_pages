import React from "react";
import Button from "../Common/Button";

export default function HeroCryptoSlide({ isLoggedIn }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
      {/* Content (Expanded, well-spaced, shifted slightly higher on desktop) */}
      <div className="z-base w-full md:w-[52%] lg:w-[50%] flex flex-col justify-center text-left py-0.5 md:py-1 mt-0 md:-mt-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary leading-tight md:leading-[1.14] text-left tracking-tight">
          Buy, trade and earn crypto - all in one place
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-secondary mt-2.5 md:mt-6 text-left leading-relaxed max-w-xl">
          Join millions trading Bitcoin, Ethereum and 2,300+ coins on BitZup.
          Some of the lowest fees in crypto, tools that grow with you, and
          security you can verify.
        </p>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-3 mt-7 md:mt-10 lg:mt-12 max-md:hidden">
          {isLoggedIn ? (
            <>
              <Button
                variant="primary"
                className="h-11 px-7 text-sm font-bold"
                onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
              >
                Trade Now
              </Button>
              <Button
                variant="secondary"
                className="h-11 px-7 text-sm font-semibold"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                className="h-11 px-7 text-sm font-bold"
                onClick={() => (window.location.href = "/trade/register")}
              >
                Create free account
              </Button>
              <Button
                variant="secondary"
                className="h-11 px-7 text-sm font-semibold"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          )}
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

      {/* Circle Video (Center-aligned with the left text section) */}
      <div className="flex justify-center items-center w-full md:w-[48%] lg:w-[50%] my-2 md:-mt-4">
        <video
          src="/B Video.mp4"
          className="size-64 sm:size-72 md:size-[440px] lg:size-[480px] xl:size-[520px] object-cover mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 mt-2 justify-between w-full md:hidden">
        {isLoggedIn ? (
          <>
            <Button
              variant="primary"
              className="h-9 flex-1 text-xs font-bold"
              onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
            >
              Trade
            </Button>
            <Button
              variant="secondary"
              className="h-9 flex-1 text-xs font-medium"
              onClick={() => (window.location.href = "/invest")}
            >
              Explore markets
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              className="h-9 flex-1 text-xs font-bold"
              onClick={() => (window.location.href = "/trade/register")}
            >
              Create free account
            </Button>
            <Button
              variant="secondary"
              className="h-9 flex-1 text-xs font-medium"
              onClick={() => (window.location.href = "/trade/login")}
            >
              Log In
            </Button>
          </>
        )}
      </div>

      {/* Mobile Download Badges */}
      <div className="flex gap-2.5 md:hidden mt-2">
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
