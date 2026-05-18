import { ArrowRight } from "lucide-react";
import { IoLogoApple } from "react-icons/io";
import QRCode from "react-qr-code";

export default function Hero() {
  return (
    <section className=" flex max-md:flex-col max-md:gap-6 md:p-16 p-4 justify-between">
      {/* Left Content */}
      <div className=" z-base w-full md:w-[50%] flex flex-col text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-left">
          BitZup: Where Crypto Traders Become Market Leaders
        </h1>

        {/* Input */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          <button className="btn-primary">
            <div className="flex font-semibold text-black gap-2 items-center text-lg">
              <img src="gift.svg" className="size-6" /> Sign up now
            </div>
          </button>
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
                href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
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
              <QRCode value="" className="p-0.5 bg-white w-fit h-fit" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Circle */}
      <div className=" flex  max-md:justify-end">
        <div className="md:size-80 w-64 h-36 rounded-full bg-surface" />
      </div>
      <div className="flex items-center gap-3 mt-8 justify-between md:hidden">
        <button className="btn-primary h-12 w-fit px-8">
          <div className="flex font-semibold text-black gap-2 items-center text-lg">
            <img src="gift.svg" className="size-6" alt="Gift rewards icon" />{" "}
            Sign up now
          </div>
        </button>
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
            className="w-auto h-10 cursor-pointer hover:opacity-80 transition-opacity"
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
            className="w-auto h-10 cursor-pointer hover:opacity-80 transition-opacity"
            alt="Google Play"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/android-badge.png"
            className="w-auto h-10 cursor-pointer hover:opacity-80 transition-opacity"
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
