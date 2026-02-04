import { IoLogoApple } from "react-icons/io";
import QRCode from "react-qr-code";

export default function Hero() {
  return (
    <section className=" flex max-md:flex-col max-md:gap-5 md:p-15 p-5 justify-between">
      {/* Left Content */}
      <div className=" z-10 w-full md:w-[50%] flex flex-col text-left border-amber-300">
        <h1 className="text-[25px] md:text-[50px] font-bold text-white leading-tight text-left">
          Bitzup - Where Whales are Made
        </h1>

        {/* Input */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          <input
            placeholder="Email / Phone"
            className="w-[320px] bg-transparent border border-gray-600 rounded-full px-5 py-3 text-sm text-white outline-none"
          />
          <div className="bg-[#2EDBAD] text-black px-6 py-3 rounded-[35px] font-semibold flex justify-center items-center gap-2 text-nowrap">
            <img src="/gift.svg" className="size-4" /> Sign up
          </div>
        </div>

        {/* Continue With */}
        <div className="flex  mt-8 text-gray-400 text-sm w-full gap-[100px] max-md:hidden">
          <div>
            <div className="mb-2">or Continue With</div>
            <div className="flex gap-3">
              <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
                <img src="google.svg" className="size-5" />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
                <IoLogoApple className="size-5" />
              </div>
            </div>
          </div>

          <div className="max-md:hidden">
            <div className="mb-2">Download App</div>
            <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center p-2">
              <QRCode value="" className="p-0.5 bg-white w-fit h-fit" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Circle */}
      <div className=" flex  max-md:justify-end">
        <div className="md:w-[320px] md:h-[320px] w-[260px] h-[150px] rounded-full bg-gradient-to-br bg-[#131516]" />
      </div>
      <div className="flex items-center gap-3 mt-8 justify-center md:hidden">
        <input
          placeholder="Email / Phone"
          className="w-[50%] bg-transparent border border-gray-600 rounded-full px-5 py-3 text-sm text-white outline-none"
        />
        <div className="bg-[#2EDBAD] text-black px-6 py-3 rounded-[35px] font-semibold flex justify-center items-center gap-1  text-nowrap w-fit">
          <img src="/gift.svg" className="size-4" /> Sign up
        </div>
      </div>
      <div className="p-2 gap-5 flex md:hidden">
        {" "}
        <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
          <img src="google.svg" className="size-5" />
        </div>
        <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
          <IoLogoApple className="size-5" />
        </div>
        <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center p-1">
          <QRCode value="" className=" bg-white size-5 p-0.5" />
        </div>
      </div>
    </section>
  );
}
