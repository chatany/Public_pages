import React from "react";
import Button from "../Common/Button";

export default function HeroCryptoSlide({ isLoggedIn }) {
  return (
    <div className="w-full flex max-md:flex-col max-md:gap-6 justify-between items-center">
      {/* Left Content */}
      <div className="z-base w-full md:w-[51%] flex flex-col text-left gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight text-left">
          Buy, trade and earn crypto - all in one place
        </h1>
        <p className="text-base text-secondary mt-4 text-left">
          Join millions trading Bitcoin, Ethereum and 2,300+ coins on BitZup.
          Some of the lowest fees in crypto, tools that grow with you, and
          security you can verify.
        </p>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          {isLoggedIn ? (
            <>
              <Button
                variant="primary"
                className="h-10 text-sm"
                onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
              >
                Trade Now
              </Button>
              <Button
                variant="secondary"
                className="h-10 text-sm"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                className="h-10 text-sm"
                onClick={() => (window.location.href = "/trade/register")}
              >
                Create free account
              </Button>
              <Button
                variant="secondary"
                className="h-10 text-sm"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          )}
        </div>

        {/* Download Badges Desktop */}
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

      {/* Right Circle Video */}
      <div className="flex max-md:justify-center justify-end w-full md:w-[45%]">
        <video
          src="/B Video.mp4"
          className="md:size-110 object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 mt-4 justify-between w-full md:hidden">
        {isLoggedIn ? (
          <>
            <Button
              variant="primary"
              className="h-8 w-fit px-4 text-xs"
              onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
            >
              Trade
            </Button>
            <Button
              variant="secondary"
              className="h-8 w-fit px-4 text-xs"
              onClick={() => (window.location.href = "/invest")}
            >
              Explore markets
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              className="h-8 text-xs w-fit px-8"
              onClick={() => (window.location.href = "/trade/register")}
            >
              Create free account
            </Button>
            <Button
              variant="secondary"
              className="h-8 text-xs w-fit px-8"
              onClick={() => (window.location.href = "/trade/login")}
            >
              Log In
            </Button>
          </>
        )}
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
