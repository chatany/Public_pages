import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io";
import QRCode from "react-qr-code";

export default function Hero() {
  return (
    <section className=" flex max-md:flex-col max-md:gap-5 md:p-15 p-3 justify-between">
      {/* Left Content */}
      <div className=" z-10 w-full md:w-[50%] flex flex-col text-left border-amber-300">
        <h1 className="text-[25px] md:text-[50px] font-bold text-white leading-tight text-left">
          Bitzup - Where Whales are Made
        </h1>

        {/* Input */}
        <div className="flex items-center gap-3 mt-8 max-md:hidden">
          <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#2EDBAD] md:h-[58px] h-[30px] w-fit md:rounded-[41px] rounded-[6px] gap-2">
            <div className="flex font-semibold text-black gap-1 items-center text-[18px]">
              <img src="gift.svg" className="size-6" /> Sign up now
            </div>
            {/* <FaArrowRightLong className="size-5 text-black md:hidden" /> */}
          </button>
        </div>

        {/* Continue With */}
        <div className="flex  mt-8 text-gray-400 text-sm w-full gap-[100px] max-md:hidden">
          <div>
            {/* <div className="mb-2">or Download App</div> */}
            <div className="flex gap-3">
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                <a href="https://apps.apple.com/app/bitzup/id6749609757" target="_blank" rel="noreferrer">
                  <img src="/Group 1.png" className="w-auto h-[45px] cursor-pointer hover:opacity-80 transition-opacity" alt="App Store" />
                </a>
                <a href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN" target="_blank" rel="noreferrer">
                  <img src="/Group 2.png" className="w-auto h-[45px] cursor-pointer hover:opacity-80 transition-opacity" alt="Google Play" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Group 3.png" className="w-auto h-[45px] cursor-pointer hover:opacity-80 transition-opacity" alt="Android" />
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
        <div className="md:w-[320px] md:h-[320px] w-[260px] h-[150px] rounded-full bg-gradient-to-br bg-[#131516]" />
      </div>
      <div className="flex items-center gap-3 mt-8 justify-between md:hidden">
         <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#2EDBAD] md:h-[58px] h-[40px] w-fit rounded-[41px] rounded-[6px] gap-2">
            <div className="flex font-semibold text-black gap-1 items-center text-[18px]">
              <img src="gift.svg" className="size-6" /> Sign up now
            </div>
            {/* <FaArrowRightLong className="size-5 text-black md:hidden" /> */}
          </button>
      </div>
      <div className="flex gap-3 md:hidden">
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                <a href="https://apps.apple.com/app/bitzup/id6749609757" target="_blank" rel="noreferrer">
                  <img src="/Group 1.png" className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity" alt="App Store" />
                </a>
                <a href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN" target="_blank" rel="noreferrer">
                  <img src="/Group 2.png" className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity" alt="Google Play" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Group 3.png" className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity" alt="Android" />
                </a>
              {/* </div> */}
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
              {/* </div> */}
            </div>
    </section>
  );
}
