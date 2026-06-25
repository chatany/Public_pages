import { ArrowRight } from "lucide-react";
import { IoLogoApple } from "react-icons/io";
import QRCode from "react-qr-code";
import { useAuth } from "./useAuth";
import Button from "./Common/Button";

export default function Hero() {
  const isLoggedIn = useAuth();
  return (
    <section className="max-w-7xl mt-30 mx-auto px-6 md:px-8 flex max-md:flex-col max-md:gap-6  justify-between w-full">
      {/* Left Content */}
      <div className=" z-base w-full md:w-[50%] flex flex-col text-left gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight text-left">
          Buy, trade and earn crypto - all in one place
        </h1>
        <p className="text-base text-secondary mt-4 text-left">
          Join millions trading Bitcoin, Ethereum and 2,300+ coins on BitZup.
          Some of the lowest fees in crypto, tools that grow with you, and
          security you can verify.
        </p>

        {/* Input */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          {isLoggedIn ? (
            <>
              <Button
                className="primary h-10"
                onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
              >
                Trade Now
              </Button>
             <Button
                className="secondary h-10"
                variant="secondary"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          ) : (
            <>
              <Button
                className="primary h-10"
                onClick={() => (window.location.href = "/trade/register")}
              >
                Create free account
              </Button>
              <Button
                className="secondary h-10"
                variant="secondary"
                onClick={() => (window.location.href = "/trade/spot")}
              >
                Explore markets
              </Button>
            </>
          )}
        </div>

        {/* Continue With */}
        <div className="flex mt-8 text-secondary text-sm w-full gap-24 max-md:hidden">
          <div>
            {/* <div className="mb-2">or Download App</div> */}
            <div className="flex gap-3">
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
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
                href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN"
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
              {/* </div> */}
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
              {/* </div> */}
            </div>
          </div>

          {/* <div className="max-md:hidden">
            <div className="mb-2">Download App</div>
            <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center p-2">
              <QRCode value={`${window.location.origin}/trade/download`} className="p-0.5 bg-white w-fit h-fit" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Circle */}
      <div className=" flex  max-md:justify-end">
        <video
          src="/B Video.mp4"
          className="md:size-110 object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex items-center gap-3 mt-8 justify-between md:hidden">
        {isLoggedIn ? (
          <>
            <Button
              className="btn-primary h-5 w-fit px-4 text-xs"
              onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
            >
              Trade
            </Button>
            <Button
              className="btn-secondary h-5 w-fit px-4 text-xs"
              onClick={() => (window.location.href = "/invest")}
            >
              Auto Invest
            </Button>
            <Button
              className="btn-secondary h-5 w-fit px-4 text-xs"
              onClick={() => (window.location.href = "/trade/subscription")}
            >
              Earn
            </Button>
          </>
        ) : (
          <>
            <Button
              className="btn-primary h-8 text-xs w-fit px-8"
              onClick={() => (window.location.href = "/trade/register")}
            >
              Create free account
            </Button>
            <Button
              className="btn-secondary h-8 text-xs w-fit px-8"
              onClick={() => (window.location.href = "/trade/login")}
            >
              Log In
            </Button>
          </>
        )}
      </div>
      <div className="flex gap-3 md:hidden">
        {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
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
          href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN"
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
        {/* </div> */}
        {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
        {/* </div> */}
      </div>
    </section>
  );
}
