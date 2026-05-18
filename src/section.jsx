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
      {!imgError && iconSrc ? (
        <img
          src={iconSrc}
          alt={`${mover?.base_asset_symbol || "coin"} icon`}
          className="size-8 rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="md:text-lg text-sm font-bold size-8 bg-surface-2 text-primary rounded-full flex items-center justify-center">
          {mover?.base_asset_symbol?.[0]}
        </div>
      )}
    </div>
  );
}
export const Section = () => {
  // const tabs = ["Top", "Hot", "Gainers", "Falling", "New"];
  const [activeTab, setActiveTab] = useState(null);
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState(false);
  const dark = true;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const latestMarketRef = useRef(null);

  const filteredData = () => {
    return activeTab !== "All" ? data[activeTab] : data1;
  };

  const fetchData = async () => {
    try {
      // 1. Fetch Bitzup Exchange Info (Primary Data)
      const bitzupRes = await fetch(
        `${import.meta.env.VITE_API_BASE}/market/exchangeInfoPublic`,
      );
      if (!bitzupRes.ok) throw new Error("Bitzup API failed");
      const bitzupData = await bitzupRes.json();

      // 2. Fetch CoinGecko Markets (For Icons)
      // const coingeckoRes = await fetch(
      //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false",
      // );

      // let iconMap = {};
      // if (coingeckoRes.ok) {
      //   const coingeckoData = await coingeckoRes.json();
      //   // Create a map for quick lookup: symbol -> image_url
      //   coingeckoData.forEach(coin => {
      //     iconMap[coin.symbol.toUpperCase()] = coin.image;
      //   });
      // }

      // // 3. Inject Icons into BitZup Data
      // const finalData = {};
      // Object.keys(bitzupData).forEach(category => {
      //   finalData[category] = bitzupData[category].map(item => ({
      //     ...item,
      //     coin_icon_url: iconMap[item.base_asset_symbol] || null
      //   }));
      // });

      setData(bitzupData);

      setActiveTab(Object.keys(bitzupData)[0]);
      // For the search list (data1), we can flatten the categories or use a specific one
      // setData1(Object.values(finalData).flat());
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
  const items = [
    "promo-banner-2.svg",
    "promo-banner-1.svg",
    "promo-banner-3.svg",
    "promo-banner-4.svg",
  ];

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
      <div className="flex justify-center  md:px-16">
        <div className="w-full md:flex justify-center grid grid-cols-2 md:grid-cols-4 gap-8  max-md:hidden mt-20 ">
          {[
            "promo-banner-2.svg",
            "promo-banner-1.svg",
            "promo-banner-3.svg",
            "promo-banner-4.svg",
          ].map((item, ind) => (
            <div
              key={ind}
              className="w-full rounded-xl border bg-transparent relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item}
                alt={`BitZup platform promotion ${ind + 1}`}
                className="w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 hover:bg-linear-to-b from-brand-green/0  via-brand-green/0 to-brand-green/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-1 max-md:hidden ">
        <button
          onClick={prev}
          className=" rounded-md border border-border flex items-center justify-center transition"
        >
          <BiChevronLeft className="size-6" />
        </button>
        <button
          onClick={next}
          className="rounded-md border border-border flex items-center justify-center transition"
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
                <div className="w-full rounded-2xl border  bg-black relative overflow-hidden">
                  <img
                    src={item}
                    alt={`BitZup promotion banner ${ind + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-green/40 opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className=" rounded-md border border-border flex items-center justify-center transition"
          >
            <BiChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="rounded-md border border-border flex items-center justify-center transition"
          >
            <BiChevronRight className="size-6" />
          </button>
        </div>
      </div>

      <div className="flex md:justify-center mt-10 md:px-16 px-4">
        <div className="flex justify-center flex-col w-full">
          {/* Tabs and View More */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 md:gap-8 overflow-x-auto custom-scroll pb-2">
              {Object.keys(data).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 whitespace-nowrap cursor-pointer font-bold text-lg md:text-2xl transition-all relative
                ${activeTab === tab ? "text-primary" : "text-secondary hover:text-primary"}`}
                >
                  {tab === "Hot" && "🔥"} {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-brand-green w-full rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Market List */}
          <div className="w-full">
            {/* Header */}
            <div className="grid grid-cols-3 md:grid-cols-5  text-xs md:text-xl font-normal px-2 md:px-6 py-4">
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
                  className="grid grid-cols-3 md:grid-cols-5 px-6 h-16 hover:bg-surface transition-all items-center cursor-pointer border-border group"
                  onClick={() =>
                    (window.location.href = `/trade/spot/${mover?.pair_symbol}`)
                  }
                >
                  {/* Coin Column */}
                  <div className="flex items-center gap-4">
                    <CoinIcon mover={mover} />
                    <div className="flex flex-col">
                      <span className="font-bold text-primary group-hover:text-brand-green transition-colors text-sm md:text-lg">
                        {mover?.base_asset_symbol}
                      </span>
                      <span className="text-xs text-secondary font-medium">
                        {mover?.coin_name}
                      </span>
                    </div>
                  </div>

                  {/* Price Column */}
                  <div className="text-right font-mono text-primary text-lg">
                    ${mover?.current_price}
                  </div>

                  {/* Change Column */}
                  <div
                    className={`text-right font-mono text-lg ${
                      mover?.change_in_price > 0
                        ? "text-trading-up"
                        : "text-trading-down"
                    }`}
                  >
                    {mover?.change_in_price > 0 ? "+" : ""}
                    {mover?.change_in_price}%
                  </div>

                  {/* Desktop Only: Volume */}
                  <div className="text-right text-secondary font-mono max-md:hidden">
                    {mover?.volume}
                  </div>

                  {/* Desktop Only: Action */}
                  <div
                    className="text-right max-md:hidden"
                    onClick={() =>
                      (window.location.href = `/trade/spot/${mover?.pair_symbol}`)
                    }
                  >
                    <button className="bg-brand-green cursor-pointer  text-black rounded-full px-6 py-2 text-sm font-bold hover:opacity-90 transition-all">
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
        <div className="text-center text-2xl p-3 font-bold md:hidden">
          Trade Crypto Anywhere Anytime
        </div>
        <div className="flex max-md:flex-col rounded-2xl items-center md:justify-between w-full md:p-[0px_60px_0px_60px]">
       <div className="md:w-[50%] w-full justify-center flex ">
          <div className=" rounded-full p-20  w-full backdrop-blur flex justify-center relative items-center">
            <div className="w-[253px] h-[500px] md:w-[320px] md:h-[620px] z-20 rounded-4xl overflow-hidden relative flex justify-center items-center">
              <video
                src="/Mobile(2).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
            <div className="absolute bg-[#2EDBAD]  blur-[200px]  h-[60%] w-50 rounded-full"></div>
          </div>
        </div>
          <div className=" flex w-full justify-center items-center text-xs gap-5 md:hidden">
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {/* <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center"> */}
              <a
                href="https://apps.apple.com/app/bitzup/id6749609757"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/apple-badge.png"
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
                  src="/google-play-badge.png"
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
                  src="/android-badge.png"
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
              <div className="text-2xl md:text-3xl font-bold text-center text-primary">
                Trade Crypto
                <div className="text-2xl md:text-3xl font-bold text-center text-primary">
                  Anywhere Anytime
                </div>
              </div>
            </div>
            <div className="max-w-sm flex max-h-56 p-4 gap-6 bg-surface rounded-md">
              <div className="w-[40%] p-2 border border-border rounded-lg bg-white">
                <QRCode
                  className="w-full h-full"
                  value={"https://bitzup.com/download"}
                />
              </div>
              <div className="w-[60%] flex flex-col justify-between py-2">
                <div>
                  <div className="text-eyebrow text-secondary mb-1">
                    Scan to download
                  </div>
                  <div className="text-xl font-bold text-primary">
                    iOS & Android
                  </div>
                </div>
                <div className="text-sm text-secondary hover:text-brand-green cursor-pointer transition-colors font-medium">
                  More Download Options
                </div>
              </div>
            </div>
            <div className="flex gap-16">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:hidden flex flex-col gap-10 mt-10 w-full  md:px-16">
        <div className="font-bold text-3xl text-center">How to Get Started</div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div className="font-bold text-3xl w-7.5">1</div>
              <div className="text-left">
                <div className="text-lg font-bold">Create an Account</div>
                <div className="text-sm text-muted font-normal">
                  Register and claim exclusive newcomer rewards.
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/register")}
                  className="text-xs bg-brand-green justify-center p-2 text-black rounded-full mt-2 flex gap-1 items-center cursor-pointer w-32"
                >
                  Register now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold text-3xl w-7.5">2</div>
              <div className="text-left">
                <div className="text-lg font-bold">Quick Buy</div>
                <div className="text-sm text-secondary font-normal">
                  Buy or deposit crypto in a few easy steps.
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/spot")}
                  className="text-xs justify-center bg-surface-2 w-32 p-2 text-black hover:bg-brand-green rounded-full mt-2 flex gap-1 items-center cursor-pointer"
                >
                  Buy Crypto <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold text-3xl w-7.5">3</div>
              <div className="text-left">
                <div className="text-lg font-bold">Start Trading</div>
                <div className="text-sm text-secondary font-normal">
                  Sell and buy crypto, copy trade, and more.
                </div>
                <button
                  onClick={() => (window.location.href = "/trade/spot")}
                  className="text-xs bg-surface-2 justify-center p-2 w-32 hover:bg-brand-green text-black rounded-full mt-2 flex gap-1 items-center cursor-pointer"
                >
                  Trade Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[26.25rem] h-80 rounded-xl bg-surface overflow-hidden">
            <img
              src="/feature-summary.png"
              className="w-full h-full object-cover"
              alt="How to get started illustration"
            />
          </div>
        </div>
      </div>
      <div className=" w-full text-2xl font-bold md:hidden text-center ">
        How to Get Started
      </div>
      <div className="  md:p-15 md:hidden p-3 flex flex-col gap-3 mt-10">
        <div
          onClick={() => (window.location.href = "/trade/register")}
          className="border-border border w-full rounded-md items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Create Account</div>
          <div className="bg-surface p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
        <div
          onClick={() => (window.location.href = "/trade/spot")}
          className=" border-primary border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Quick Buy</div>
          <div className="bg-surface p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
        <div
          onClick={() => (window.location.href = "/trade/spot")}
          className=" border-primary border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
        >
          <div>Start Trading</div>
          <div className="bg-surface p-2 rounded-md">
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:px-16">
        <div className="font-bold md:text-3xl text-2xl mb-15 text-center">
          How We Protect Every Trade
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/secure-shield 1.svg"
              className="size-10"
              alt="Secure Smart Contracts"
            />
            <div className="text-lg font-bold">Secure Smart Contracts</div>
            <div className="text-sm font-semibold text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/reserve 1.svg"
              className="size-10"
              alt="Reserve Audit Proof"
            />
            <div className="text-lg font-bold">Reserve Audit Proof</div>
            <div className="text-sm font-semibold text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/wallet 1.svg"
              className="size-10"
              alt="Cold and Hot Wallet Storage"
            />
            <div className="text-lg font-bold">
              Cold/Hot Wallet based Storage
            </div>
            <div className="text-sm font-normal text-muted ">
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
                <img
                  src="/secure-shield 1.svg"
                  className="size-7"
                  alt="Secure Shield"
                />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-lg font-bold">Secure Smart Contracts</div>
                <div className="text-xs text-secondary">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img
                  src="/reserve 1.svg"
                  className="size-7"
                  alt="Reserve Proof"
                />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-lg font-bold">Reserve Audit Proof</div>
                <div className="text-xs text-secondary">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img
                  src="/wallet 1.svg"
                  className="size-6"
                  alt="Secure Wallet"
                />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-lg font-bold">
                  Cold/Hot Wallet based Storage
                </div>
                <div className="text-xs text-secondary">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 justify-evenly bg-surface flex-wrap mt-10 py-6">
        <div>
          <div className="md:text-3xl text-2xl font-bold text-center">
            $19.64B
          </div>
          <div className="text-eyebrow text-secondary text-center">
            24h Volume
          </div>
        </div>
        <div>
          <div className="md:text-3xl text-2xl font-bold text-center">
            4,100+
          </div>
          <div className="text-eyebrow text-secondary text-center">
            Cryptocurrencies
          </div>
        </div>
        <div>
          <div className="md:text-3xl text-2xl font-bold text-center">
            10.16%
          </div>
          <div className="text-eyebrow text-secondary text-center">
            Simple Earn APR
          </div>
        </div>
        <div>
          <div className="md:text-3xl text-2xl font-bold text-center">124%</div>
          <div className="text-eyebrow text-secondary text-center">
            Total Reserve Ratio
          </div>
        </div>
      </div>

      {/* <PrivacyPolicy/> */}
      {/* <Menu  children={<PrivacysPolicy/>}/> */}
      <Footer />
    </div>
  );
};
