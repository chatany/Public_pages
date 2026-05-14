import { useEffect, useState, useRef } from "react";
import { socket } from "./socket";
import { Footer } from "./foooter";
import QRCode from "react-qr-code";
import { GrWindows } from "react-icons/gr";
import { AiFillApi, AiTwotoneCloseCircle } from "react-icons/ai";
import { FaAngleRight, FaChevronRight, FaGooglePlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import PromoSlider from "./img";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsAndroid2 } from "react-icons/bs";
function CoinIcon({ mover }) {
  const [imgError, setImgError] = useState(false);
  const iconSrc = mover?.coin_icon;

  return (
    <div className="size-8 flex items-center justify-center">
      {!imgError&&iconSrc  ? (
        <img
          src={iconSrc}
          alt="icon"
          className="size-8 rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="md:text-[20px] text-[15px] font-bold size-8 bg-white text-black rounded-full flex items-center justify-center">
          {mover?.base_asset_symbol?.[0]}
        </div>
      )}
    </div>
  );
}
export const Section = () => {
  const tabs = ["Hot", "Gainers", "Losers", "New"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState(false);
  const dark = true;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const latestMarketRef = useRef(null);
  console.log(latestMarketRef.current, "latestMarketRef.current");

  const filteredData = () => {
    return activeTab !== "All" ? data[activeTab] : data1;
  };

  console.log(filteredData(), "ee");

  const fetchData = async () => {
    try {
      // 1. Fetch Bitzup Exchange Info (Primary Data)
      const bitzupRes = await fetch("https://test.bitzup.com/market/exchangeInfoPublic");
      if (!bitzupRes.ok) throw new Error("Bitzup API failed");
      const bitzupData = await bitzupRes.json();

      // 2. Fetch CoinGecko Markets (For Icons)
      const coingeckoRes = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false",
      );
      
      let iconMap = {};
      if (coingeckoRes.ok) {
        const coingeckoData = await coingeckoRes.json();
        // Create a map for quick lookup: symbol -> image_url
        coingeckoData.forEach(coin => {
          iconMap[coin.symbol.toUpperCase()] = coin.image;
        });
      }

      // 3. Inject Icons into Bitzup Data
      const finalData = {};
      Object.keys(bitzupData).forEach(category => {
        finalData[category] = bitzupData[category].map(item => ({
          ...item,
          coin_icon_url: iconMap[item.base_asset_symbol] || null
        }));
      });

      setData(finalData);
      // For the search list (data1), we can flatten the categories or use a specific one
      setData1(Object.values(finalData).flat());
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  useEffect(() => {
    fetchData();
    // fetchData1();
  }, []);

  useEffect(() => {
    const handleMarket = (event) => {
      try {
        const socketData = JSON.parse(event);
        if (socketData) {
          latestMarketRef.current = socketData;

          setData((prevData) => {
            const updatedData = { ...prevData };

            // Loop through each category in the current data (Hot, Gainers, etc.)
            Object.keys(updatedData).forEach((category) => {
              updatedData[category] = updatedData[category].map((item) => {
                // Find if the socket data has an update for this specific pair_symbol
                // Socket data might be a category-based object or a flat array
                const update = Array.isArray(socketData)
                  ? socketData.find((s) => s.pair_symbol === item.pair_symbol)
                  : socketData[category]?.find(
                      (s) => s.pair_symbol === item.pair_symbol,
                    );

                return update ? { ...item, ...update } : item;
              });
            });

            return updatedData;
          });
        }
      } catch (err) {
        console.error("Market socket error:", err);
      }
    };

    socket.emit("market");
    socket.on("market", handleMarket);

    return () => {
      socket.off("market", handleMarket);
    };
  }, []);
  const items = ["2.svg", "1.svg", "3.svg", "4.svg"];

  const visibleCards = 2;
  const totalSlides = items.length - visibleCards + 1;

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const next = () => {
    setActive((prev) => Math.min(prev + 1, totalSlides));
  };

  const prev = () => {
    setActive((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-center  md:p-[0px_60px_0px_60px]">
        <div className="w-full md:flex justify-center grid grid-cols-2 md:grid-cols-4 gap-[5%]  max-md:hidden mt-20 ">
          {["2.svg", "1.svg", "3.svg", "4.svg"].map((item, ind) => (
            <div
              key={ind}
              className="w-full rounded-xl border bg-transparent relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute h-full w-full hover:bg-linear-to-b from-[#2EDBAD]/0  via-[#2EDBAD]/0 to-[#2EDBAD]/50 z-50"></div>
              <img
                src={item}
                alt=""
                className="w-full h-full z-60 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-1 max-md:hidden ">
        <button
          onClick={prev}
          className=" rounded-[3px] border border-[#4C4B4B] flex items-center justify-center transition"
        >
          <BiChevronLeft className="size-6" />
        </button>
        <button
          onClick={next}
          className="rounded-[3px] border border-[#4C4B4B] flex items-center justify-center transition"
        >
          <BiChevronRight className="size-6" />
        </button>
      </div>
      <div className="md:hidden ">
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 50}%)` }}
          >
            {items.map((item, ind) => (
              <div key={ind} className="min-w-[50%] px-3">
                <div className="w-full rounded-2xl border border-white/70 bg-black relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2EDBAD]/40 opacity-0 hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className=" rounded-[3px] border border-[#4C4B4B] flex items-center justify-center transition"
          >
            <BiChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="rounded-[3px] border border-[#4C4B4B] flex items-center justify-center transition"
          >
            <BiChevronRight className="size-6" />
          </button>
        </div>
      </div>

      <div className="flex md:justify-center mt-10 md:px-[60px] px-4">
        <div className="flex justify-center flex-col w-full">
          {/* Tabs and View More */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 md:gap-8 overflow-x-auto custom-scroll pb-2">
              {Object.keys(data).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 whitespace-nowrap cursor-pointer font-bold text-sm md:text-[40px] transition-all
                ${activeTab === tab ? "text-white" : "text-[#585757]"}`}
                >
                  {tab === "Hot" && "🔥"} {tab}
                  {activeTab === tab && (
                    <div className="h-[1px] bg-white w-[50%] mt-1 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Market List */}
          <div className="w-full">
            {/* Header */}
            <div className="grid grid-cols-3 md:grid-cols-5  text-xs md:text-[20px] font-normal px-2 md:px-6 py-4">
              <div className="text-left">Coin</div>
              <div className="text-right">Current Price</div>
              <div className="text-right">Change</div>
              <div className="text-right max-md:hidden">24h Volume</div>
              <div className="text-right max-md:hidden">Action</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col">
              {filteredData()?.map((mover, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 md:grid-cols-5 px-2 md:px-6 py-5 hover:bg-white/5 transition-all items-center cursor-pointer border-t border-white/5"
                >
                  {/* Coin Column */}
                  <div className="flex items-center gap-2 md:gap-4">
                    <CoinIcon mover={mover} />
                    <div className="flex flex-col">
                      <span className="font-normal text-white text-left text-sm md:text-xl">
                        {mover?.base_asset_symbol}
                      </span>
                      <span className="text-[10px] text-left md:text-[12px] text-gray-500 font-medium">
                        {mover?.coin_name}
                      </span>
                    </div>
                  </div>

                  {/* Price Column */}
                  <div className="text-right font-normal text-white text-sm md:text-md">
                    ${mover?.current_price}
                  </div>

                  {/* Change Column */}
                  <div
                    className={`text-right font-normal text-sm md:text-[18px] ${
                      mover?.change_in_price > 0
                        ? "text-[#2EBD85]"
                        : "text-[#F6465D]"
                    }`}
                  >
                    {mover?.change_in_price > 0 ? "+" : ""}
                    {mover?.change_in_price}%
                  </div>

                  {/* Desktop Only: Volume */}
                  <div className="text-right text-gray-400 font-normal max-md:hidden md:text-md">
                    {mover?.volume}
                  </div>

                  {/* Desktop Only: Action */}
                  <div
                    className="text-right max-md:hidden"
                    onClick={() =>
                      (window.location.href = `/trade/spot/${mover?.pair_symbol}`)
                    }
                  >
                    <button className="bg-[#2EDBAD] cursor-pointer  text-black rounded-full px-6 py-2 text-sm font-bold hover:opacity-90 transition-all">
                      Trade
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="items-center cursor-pointer flex justify-center gap-2"
        onClick={() => (window.location.href = `/trade/spot/BTCUSDT`)}
      >
        {" "}
        View all 2500+ Coins <FaChevronRight className="size-3" />
      </div>
      <div>
        <div className="text-center text-[30px] p-3 font-bold md:hidden">
          Trade Crypto Anywhere Anytime
        </div>
        <div className="flex max-md:flex-col rounded-2xl items-center md:justify-between w-full md:p-[0px_60px_0px_60px]">
          <div className="md:w-[50%] w-full justify-center flex ">
            <div className=" rounded-full p-20 w-full backdrop-blur flex justify-center relative items-center">
              <img
                src="./home.gif"
                className="w-[253px] h-[500px] md:w-[320px] md:h-[620px] z-20"
              />
              <div className="absolute bg-[#2EDBAD] blur-[200px]  h-[60%] w-50 rounded-full"></div>
            </div>
          </div>
          <div className=" flex w-full justify-center items-center text-[12px] gap-5 md:hidden">
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                  <a
                    href="https://apps.apple.com/app/bitzup/id6749609757"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 1.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 2.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="Google Play"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 3.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="Android"
                    />
                  </a>
                  {/* </div> */}
                  {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                  {/* </div> */}
                </div>
          </div>
          <div className="md:w-[50%] h-full max-md:hidden  w-full flex flex-col gap-10 items-center h-full">
            <div>
              <div className="text-[30px] md:text-[50px] font-bold text-center">
                Trade Crypto
                <div className="text-[30px] md:text-[50px] font-bold text-center">
                  Anywhere Anytime
                </div>
              </div>
            </div>
            <div className="bg-[#181818] max-w-[400px] flex max-h-[220px] rounded-[10px]">
            <div className="w-[40%] p-3 border border-white rounded-2xl">
              {" "}
              <QRCode
                className="w-full h-full bg-white p-2 rounded-md"
                value={""}
              />
            </div>
            <div className="w-[60%] flex flex-col justify-between  p-5">
              <div className="">
                <div className="text-[15px] font-normal leading-[100%] whitespace-nowrap">
                  Scan to download app
                </div>
                <div className="text-[26px] font-bold whitespace-nowrap">
                  iOS & Android
                </div>
              </div>
              <div className="text-[14px] font-normal capitalize whitespace-nowrap">
                More Download Options
              </div>
            </div>
          </div>
            <div className="flex gap-[60px] h">
              <div>
                {/* <div className="mb-2 text-left">or Download App</div> */}
                <div className="flex gap-3 mt-4">
                  {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                  <a
                    href="https://apps.apple.com/app/bitzup/id6749609757"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 1.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 2.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="Google Play"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1j6LthGR1st195GnqnKqWrPsnYNF3uBjt/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Group 3.png"
                      className="w-auto h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                      alt="Android"
                    />
                  </a>
                  {/* </div> */}
                  {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:hidden flex flex-col gap-10 mt-10 w-full  md:p-[0px_60px_0px_60px]">
        <div className="font-bold text-[50px]">How to Get Started</div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div className="font-bold text-[42px] w-7.5">1</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Create an Account</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Register and claim exclusive newcomer rewards.
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/register")}
                  className="text-[10px] bg-[#2EDBAD] justify-center p-2 text-black rounded-[20px] mt-2 flex gap-1 items-center cursor-pointer w-30"
                >
                  Register now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold text-[42px] w-7.5">2</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Quick Buy</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Buy or deposit crypto in a few easy steps. .
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/spot")}
                  className="text-[10px] justify-center bg-[#353535] w-30 p-2 text-black hover:bg-[#2EDBAD] rounded-[20px] mt-2 flex gap-1 items-center cursor-pointer"
                >
                  Buy Crypto <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold text-[42px] w-7.5">3</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Start Trading</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Sell and buy crypto, copy trade, and more. .
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/spot")}
                  className="text-[10px] bg-[#353535] justify-center p-2 w-30 hover:bg-[#2EDBAD] text-black rounded-[20px] mt-2 flex gap-1 items-center cursor-pointer"
                >
                  Trade Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[420px] h-[320px] rounded-[30px] bg-[#131516]">
            <img src="" />
          </div>
        </div>
      </div>
      <div className="text-[30px] font-bold md:hidden">How to Get Started</div>
      <div className="  md:p-15 md:hidden p-3 flex flex-col gap-3 mt-10">
        <div
          onClick={() => (window.location.href = "/trade/register")}
          className=" border-[#FFFFFF] border-1 w-full rounded-[8px] items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Create Account</div>
          <div className="bg-[#131516] p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
        <div
          onClick={() => (window.location.href = "/trade/spot")}
          className=" border-[#FFFFFF] border-1 w-full rounded-[8px] items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Quick Buy</div>
          <div className="bg-[#131516] p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
        <div
          onClick={() => (window.location.href = "/trade/spot")}
          className=" border-[#FFFFFF] border-1 w-full rounded-[8px] items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Start Trading</div>
          <div className="bg-[#131516] p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:p-[0px_60px_0px_60px]">
        <div className="font-bold md:text-[50px] text-[30px] mb-15">
          Escort Every Trade
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-60 ">
          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img src="/secure-shield 1.svg" className="h-[40px] w-[40px]" />
            <div className="text-[20px] font-bold">Secure Smart Contracts</div>
            <div className="text-[14px] font-semibold text-[#686868]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img src="/reserve 1.svg" className="h-[40px] w-[40px]" />
            <div className="text-[20px] font-bold">Reserve Audit Proof</div>
            <div className="text-[14px] font-semibold text-[#686868]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img src="/wallet 1.svg" className="h-[40px] w-[40px]" />
            <div className="text-[20px] font-bold">
              Cold/Hot Wallet based Storage
            </div>
            <div className="text-[14px] font-normal text-[#686868] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-9">
          <div className="flex flex-col md:hidden gap-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/secure-shield 1.svg" className="size-7" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">
                  Secure Smart Contracts
                </div>
                <div className="text-[10px] text-[#B2ADAD]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/reserve 1.svg" className="size-7" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">Reserve Audit Proof</div>
                <div className="text-[10px] text-[#B2ADAD]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/wallet 1.svg" className="size-6" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">
                  Cold/Hot Wallet based Storage
                </div>
                <div className="text-[10px] text-[#B2ADAD]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  md:p-15 grid grid-cols-2 md:grid-cols-4  gap-10 justify-evenly bg-[#131516] flex-wrap mt-10 p-[20px_0px_20px_0px]">
        <div>
          <div className="md:text-[49px] text-[30px] font-bold">$19.64B</div>
          <div className="md:text-[20px] text-[15px] font-semibold text-[#B2ADAD]">
            24h Volume
          </div>
        </div>
        <div>
          <div className="md:text-[49px] text-[30px] font-bold">4,100+</div>
          <div className="md:text-[20px] text-[15px] font-semibold text-[#B2ADAD]">
            Cryptocurrencies
          </div>
        </div>
        <div>
          <div className="md:text-[49px] text-[30px] font-bold">10.16%</div>
          <div className="md:text-[20px] text-[15px] font-semibold text-[#B2ADAD]">
            Simple Earn APR
          </div>
        </div>
        <div>
          <div className="md:text-[49px] text-[30px] font-bold">124%</div>
          <div className="md:text-[20px] text-[15px] font-semibold text-[#B2ADAD]">
            Total Reserve Ratio
          </div>
        </div>
      </div>

      {/* <div className=" md:p-15 p-5 flex flex-col items-center w-full mt-10">
        <div className="text-[30px] md:text-[50px] md:w-[60%] w-full mb-10   font-bold">
          Worldwide Buzz Media on Your Narrative
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:hidden  gap-10 w-full">
          <div className="w-full rounded-[15px] border-2 h-50"></div>
          <div className="w-full rounded-[15px] border-2 h-50"></div>
          <div className="w-full rounded-[15px] border-2 h-50"></div>
        </div>
        <div className="max-md:hidden w-full">
          {" "}
          <PromoSlider items={8} />
        </div>
      </div> */}
      {/* <PrivacyPolicy/> */}
      {/* <Menu  children={<PrivacysPolicy/>}/> */}
      <Footer />
    </div>
  );
};
