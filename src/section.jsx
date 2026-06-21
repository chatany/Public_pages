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
import Button from "./Common/Button";
import { useAuth } from "./useAuth";
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
  const isLoggedIn = useAuth();
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

      setData(bitzupData);

      setActiveTab(Object.keys(bitzupData)[0]);
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="w-full md:flex justify-center grid grid-cols-2 md:grid-cols-4 gap-8  max-md:hidden mt-20 ">
          {[
            "promo-banner-2.svg",
            "promo-banner-1.svg",
            "promo-banner-3.svg",
            "promo-banner-4.svg",
          ].map((item, ind) => (
            <div
              key={ind}
              className="w-full rounded-xl border border-border bg-transparent relative overflow-hidden transition-transform duration-300 hover:scale-105"
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
      {/* <div className="flex justify-center gap-3 mt-1 max-md:hidden ">
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
      </div> */}
      <div className="md:hidden ">
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 50}%)` }}
          >
            {items.map((item, ind) => (
              <div key={ind} className="min-w-[50%] px-3">
                <div className="w-full rounded-2xl border border-border  bg-black relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full mt-10">
        <div className="flex justify-center flex-col w-full">
          {/* Ticker heading and sub */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Live crypto prices, updated every second
            </h2>
            <p className="text-sm md:text-base text-secondary mt-2">
              Track Bitcoin, Ethereum and 2,300+ coins in real time. Tap any
              market to trade in seconds.
            </p>
          </div>
          {/* Tabs and View More */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2">
              {Object.keys(data).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 whitespace-nowrap cursor-pointer font-bold text-lg md:text-3xl transition-all relative
                ${activeTab === tab ? "text-primary" : "text-muted hover:text-primary"}`}
                >
                  {tab === "Hot" && "🔥"} {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 h-1 bg-brand-green w-full rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Market List */}
          <div className="w-full">
            {/* Header */}
            <div className="grid grid-cols-3 md:grid-cols-5  text-xs md:text-base font-normal px-2 md:px-6 py-4">
              <div className="text-left">Coin</div>
              <div className="text-right">Current Price</div>
              <div className="text-right">Change</div>
              <div className="text-right max-md:hidden">24h Volume</div>
              <div className="text-right max-md:hidden">Action</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col">
              {filteredData()
                ?.slice(0, 5)
                .map((mover, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 md:grid-cols-5 md:px-6 h-16 hover:bg-surface transition-all items-center cursor-pointer border-border group"
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
                    <div className="text-right  text-primary text-base">
                      ${mover?.current_price}
                    </div>

                    {/* Change Column */}
                    <div
                      className={`text-right text-base ${
                        mover?.change_in_price > 0
                          ? "text-trading-up"
                          : "text-trading-down"
                      }`}
                    >
                      {mover?.change_in_price > 0 ? "+" : ""}
                      {mover?.change_in_price}%
                    </div>

                    {/* Desktop Only: Volume */}
                    <div className="text-right text-secondary max-md:hidden">
                      {mover?.volume}
                    </div>

                    {/* Desktop Only: Action */}
                    <div
                      className="text-right max-md:hidden"
                      onClick={() =>
                        (window.location.href = `/trade/spot/${mover?.pair_symbol}`)
                      }
                    >
                      <Button variant="primary" className="cursor-pointer  h-10 text-xs">
                        Trade
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="items-center cursor-pointer flex justify-center gap-2 hover:text-brand-green transition-colors font-semibold"
        onClick={() => (window.location.href = `/trade/spot/BTCUSDT`)}
      >
        {" "}
        View all 2,300+ coins <FaChevronRight className="size-3" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="text-center text-2xl p-3 font-bold md:hidden">
          Your portfolio, in your pocket
          <p className="text-xs font-normal text-secondary mt-1">
            Buy, trade and track your crypto on the BitZup app for iOS and
            Android.
          </p>
        </div>
        <div className="flex max-md:flex-col rounded-2xl items-center md:justify-between w-full">
          <div className="md:w-[50%] w-full justify-center flex ">
            <div className=" rounded-full p-20  w-full backdrop-blur flex justify-center relative items-center">
              <video
                src="/new exp.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-[253px] h-[500px] md:w-[320px] md:h-[620px] z-20 rounded-4xl"
              />
              <div className="absolute   blur-[500px] h-[60%] w-50 rounded-full"></div>
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
                href="https://download.bitzup.com/app-release.apk"
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
              <div className="text-3xl md:text-3xl font-bold text-center text-primary">
                Your portfolio, in your pocket
              </div>
              <p className="text-sm text-secondary text-center   leading-relaxed">
                Buy, trade and track your crypto on the BitZup app for iOS and
                Android.
                <br /> Scan the code to download.
              </p>
            </div>
            <div className="max-w-sm flex max-h-56 p-4 gap-6 bg-surface rounded-md">
              <div className="w-[40%] p-2 border border-border rounded-lg bg-white">
                <QRCode
                  className="w-full h-full"
                  value={`${window.location.origin}/trade/download`}
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
                    href="https://download.bitzup.com/app-release.apk"
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
      <div className="max-md:hidden flex flex-col gap-10 mt-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="font-bold text-3xl text-center">
          {isLoggedIn ? "Grow your assets with BitZup" : "Start trading crypto in 3 simple steps"}
        </div>
        <div className="flex justify-between items-center">
          {isLoggedIn ? (
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">1</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">Spot & Futures Trading</div>
                  <div className="text-sm text-secondary font-normal">
                    Trade Bitcoin, Ethereum, and 2,300+ coins with some of the lowest fees.
                  </div>
                  <Button
                    onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
                    variant="secondary"
                    className="text-xs h-8 w-fit"
                  >
                    Trade Now <FaArrowRightLong />
                  </Button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">2</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">Auto Invest DCA</div>
                  <div className="text-sm text-secondary font-normal">
                    Dollar-cost average into your favorite cryptocurrencies automatically.
                  </div>
                  <Button
                    onClick={() => (window.location.href = "/invest")}
                    className="text-xs h-8 w-fit"
                    variant='secondary'
                  >
                    Start Auto Invest <FaArrowRightLong />
                  </Button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">3</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">Simple Earn Yield</div>
                  <div className="text-sm text-secondary font-normal">
                    Earn high-yield passive income on 300+ crypto assets.
                  </div>
                  <Button
                    className="text-xs h-8 w-fit"
                    variant='secondary'
                    onClick={() => (window.location.href = "/trade/subscription")}
                  >
                    Earn Yield <FaArrowRightLong />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">1</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Create your free account
                  </div>
                  <div className="text-sm text-muted font-normal">
                    Sign up in under 2 minutes and claim your new-user rewards.
                  </div>
                  <Button
                    onClick={() => (window.location.href = "/trade/register")}
                    variant="secondary"
                    className="text-xs h-8 w-fit"
                  >
                    Register now <FaArrowRightLong />
                  </Button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">2</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">Add funds</div>
                  <div className="text-sm text-secondary font-normal">
                    Buy crypto with your card or bank transfer, or deposit from
                    another wallet.
                  </div>
                  <Button
                    onClick={() => (window.location.href = "/trade/spot")}
                    className="text-xs h-8 w-fit"
                    variant='secondary'
                  >
                    Buy Crypto  {" "}<FaArrowRightLong />
                  </Button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-bold text-3xl w-7.5">3</div>
                <div className="text-left flex flex-col gap-1">
                  <div className="text-lg font-bold">Start trading</div>
                  <div className="text-sm text-secondary font-normal">
                    Trade spot and futures traders automatically.
                  </div>
                  <Button
                    className="text-xs h-8 w-fit"
                    variant='secondary'
                    onClick={() => (window.location.href = "/trade/spot")}
                  >
                    Trade Now <FaArrowRightLong />
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="w-[26.25rem] h-80 rounded-xl bg-surface overflow-hidden">
            <img
              src="/feature-summary.png"
              className="w-full h-full object-cover"
              alt="How to get started illustration"
            />
          </div>
        </div>
      </div>
      <div className=" w-full md:text-3xl text-2xl font-bold md:hidden text-center ">
        {isLoggedIn ? "Grow your assets with BitZup" : "Start trading crypto in 3 simple steps"}
      </div>
      <div className="  md:p-15 md:hidden p-3 flex flex-col gap-3 mt-10">
        {isLoggedIn ? (
          <>
            <div
              onClick={() => (window.location.href = "/trade/spot/BTCUSDT")}
              className="border-border border w-full rounded-md items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Spot & Futures Trading</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => (window.location.href = "/invest")}
              className=" border-border border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Auto Invest DCA</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => (window.location.href = "/trade/subscription")}
              className=" border-border border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Simple Earn Yield</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => (window.location.href = "/trade/register")}
              className="border-border border w-full rounded-md items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Create your free account</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => (window.location.href = "/trade/spot")}
              className=" border-border border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Add funds</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
            <div
              onClick={() => (window.location.href = "/trade/spot")}
              className=" border-border border w-full rounded-lg items-center flex justify-between p-4 cursor-pointer"
            >
              <div>Start trading</div>
              <div className="bg-surface p-2 rounded-md">
                <FaChevronRight />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col mt-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="font-bold md:text-3xl text-2xl mb-15 text-center">
          Your security is engineered in, not bolted on
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/secure-shield 1.svg"
              className="size-10"
              alt="Audited smart contracts"
            />
            <div className="text-lg font-bold">Audited smart contracts</div>
            <div className="text-sm font-semibold text-muted text-center">
              Every contract is independently audited and battle-tested before
              it goes live, so your funds are protected at the code level.
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/reserve 1.svg"
              className="size-10"
              alt="Proof-of-reserves"
            />
            <div className="text-lg font-bold">Proof-of-reserves</div>
            <div className="text-sm font-semibold text-muted text-center">
              We hold your assets 1:1 and publish regular reserve audits. Verify
              our backing yourself, any time.
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img
              src="/wallet 1.svg"
              className="size-10"
              alt="Cold & hot wallet storage"
            />
            <div className="text-lg font-bold">Cold & hot wallet storage</div>
            <div className="text-sm font-normal text-muted text-center ">
              The vast majority of assets sit in offline cold storage, with
              multi-signature controls guarding every withdrawal.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:pl-9">
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
                <div className="text-lg font-bold">Audited smart contracts</div>
                <div className="text-xs text-secondary">
                  Every contract is independently audited and battle-tested
                  before it goes live, so your funds are protected at the code
                  level.
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
                <div className="text-lg font-bold">Proof-of-reserves</div>
                <div className="text-xs text-secondary">
                  We hold your assets 1:1 and publish regular reserve audits.
                  Verify our backing yourself, any time.
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
                  Cold & hot wallet storage
                </div>
                <div className="text-xs text-secondary">
                  The vast majority of assets sit in offline cold storage, with
                  multi-signature controls guarding every withdrawal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface mt-10 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Trusted by traders worldwide
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 justify-evenly w-full">
          <div>
            <div className="md:text-3xl text-xl font-bold text-center">
              $19.64B
            </div>
            <div className="text-eyebrow text-secondary text-center">
              Traded in 24h
            </div>
          </div>
          <div>
            <div className="md:text-3xl text-xl font-bold text-center">
              2,300+
            </div>
            <div className="text-eyebrow text-secondary text-center">
              Coins listed
            </div>
          </div>
          <div>
            <div className="md:text-3xl text-xl font-bold text-center">
              10.16%
            </div>
            <div className="text-eyebrow text-secondary text-center">
              APR on Simple Earn
            </div>
          </div>
          <div>
            <div className="md:text-3xl text-xl font-bold text-center">
              100%+
            </div>
            <div className="text-eyebrow text-secondary text-center">
              Reserves, independently audited
            </div>
          </div>
        </div>
      </div>

      {/* <PrivacyPolicy/> */}
      {/* <Menu  children={<PrivacysPolicy/>}/> */}
      <Footer />
    </div>
  );
};
