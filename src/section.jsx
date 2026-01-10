import { useEffect, useState } from "react";
import { Footer } from "./foooter";
import QRCode from "react-qr-code";
import { GrWindows } from "react-icons/gr";
import { AiFillApi, AiTwotoneCloseCircle } from "react-icons/ai";
import { FaAngleRight, FaGooglePlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import PromoSlider from "./img";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsAndroid2 } from "react-icons/bs";

export const Section = () => {
  const tabs = ["All", "Hot", "Losers", "24h Vol", "Gainers"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState(false);
  const dark = true;
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const filteredData = () => {
    return activeTab !== "All" ? data[activeTab] : data1;
  };
  const fetchData = async () => {
    try {
      // setLoading(true);

      const response = await fetch(
        "https://api.bitzup.com/market/exchangeinfo"
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  const fetchData1 = async () => {
    try {
      // setLoading(true);

      const response = await fetch(
        "https://api.bitzup.com/market/exchangeinfoall"
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setData1(result);
    } catch (err) {
      setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  const items = ["1.svg", "2.svg", "3.svg", "4.svg"];
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
  console.log(active, "kk");

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-center gap-5 p-5 max-md:hidden">
        {["1.svg", "2.svg", "3.svg", "4.svg"].map((item, ind) => (
          <div
            key={ind}
            className="w-full w-full h-fit rounded-xl border bg-transparent relative overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute h-full w-full hover:bg-linear-to-b from-[#2EDBAD]/0  via-[#2EDBAD]/0 to-[#2EDBAD]/50 z-50"></div>
            <img src={item} alt="" className="w-full h-full z-60 rounded-xl" />
          </div>
        ))}
      </div>
      <div className="md:hidden p-5">
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
            className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
          >
            <BiChevronRight />
          </button>
        </div>
      </div>

      <div className="flex md:justify-center">
        <div className="flex justify-center flex-col md:p-10">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <div
                name="item1"
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={`py-2 px-3 rounded-md text-[16px] md:text-[32px] whitespace-nowrap cursor-pointer
                ${activeTab === tab ? " " : "text-[#585757]"}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="flex w-full justify-center">
                    <div className="w-[60%] border-b-4 border-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="overflow-y-auto overflow-x-auto h-[400px] text-center md:custom-scroll w-full md:p-[0px_20px_20px_20px]">
            <table className="w-full table-fixed">
              <thead className="">
                <tr className="font-light text-[16px] ">
                  <th
                    className={`text-left p-5 md:text-[20px] text-[12px] font-semibold top-0 sticky p-[20px] ${
                      dark ? "bg-[#000000]" : "bg-white"
                    }`}
                  >
                    Coin
                  </th>
                  <th
                    className={`${
                      dark ? "bg-[#000000]" : "bg-white"
                    } text-right md:text-[20px] text-[12px] font-semibold top-0 sticky p-[20px]`}
                  >
                    Coin Price
                  </th>
                  <th
                    className={`text-right md:text-[20px] text-[12px] font-semibold p-[20px] ${
                      dark ? "bg-[#000000]" : "bg-white"
                    } top-0 sticky`}
                  >
                    24H Change
                  </th>
                  <th
                    className={`text-right md:text-[20px] max-md:hidden text-[12px] font-semibold p-[20px] ${
                      dark ? "bg-[#000000]" : "bg-white"
                    } top-0 sticky`}
                  >
                    24h Volume
                  </th>
                  <th
                    className={`text-right max-md:hidden md:text-[20px] text-[12px] font-semibold  p-[0px_40px_0px_0px] ${
                      dark ? "bg-[#000000]" : "bg-white"
                    } top-0 sticky`}
                  >
                    Trade
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filteredData()) && filteredData()?.length > 0 ? (
                  <>
                    {filteredData()?.map((mover, index) => (
                      <tr
                        key={index}
                        className={` cursor-pointer  md:text-[20px] text-[12px]  `}
                      >
                        <td className="text-center p-5 text-nowrap p-[0px_20px_20px_20px] ">
                          <div className="flex gap-3 items-center w-full ">
                            <div className="">
                              <img
                                src={mover?.coin_icon}
                                alt="icon"
                                className="size-8"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  e.currentTarget.nextSibling.style.display =
                                    "flex";
                                }}
                              />

                              <div className="hidden text-[16px] font-bold size-8 bg-white text-black rounded-full items-center justify-center">
                                {mover?.base_asset_symbol?.[0]}
                              </div>
                            </div>

                            <div className="flex flex-col text-left">
                              <div className="font-medium text-sm">
                                {mover?.base_asset_symbol}
                              </div>
                              <div className="[11px]">{mover?.coin_name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right text-nowrap p-[0px_20px_20px_20px]">
                          <div>
                            <div className="text-xs text-gray-400">
                              ${mover?.current_price}
                            </div>
                          </div>
                        </td>
                        <td className="text-right text-nowrap p-[0px_20px_20px_20px]">
                          <div
                            className={`font-semibold text-[12px] text-nowrap p-1 rounded-md ${
                              mover?.change_in_price > 0
                                ? "text-[#2EBD85]"
                                : "text-[#F6465D]"
                            }
              `}
                          >
                            {mover?.change_in_price > 0 ? "+" : " "}
                            {mover?.change_in_price}%
                          </div>
                        </td>
                        <td className="text-right text-nowrap max-md:hidden p-[0px_20px_20px_20px]">
                          <div>
                            <div className="text-xs text-gray-400">
                              {mover?.volume}
                            </div>
                          </div>
                        </td>
                        <td
                          className={`text-right max-md:hidden text-nowrap  p-[0px_20px_20px_20px] `}
                        >
                          <button
                            className={`${
                              dark ? "bg-[#2EDBAD]" : " text-[#2EDBAD]"
                            } rounded-[16px] p-[8px_26px_8px_26px]`}
                          >
                            Trade
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <div className="h-full w-full flex justify-center items-center"></div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        <div className="font-bold text-[45px]">How to Get Started</div>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <div className="font-bold text-[42px]">1</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Create an Account</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Register and claim exclusive newcomer rewards.
                </div>
                <button className="text-[10px] bg-[#2EDBAD] p-2 text-black rounded-2xl mt-2 flex gap-1 items-center cursor-pointer">
                  Regester now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-[42px]">2</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Quick Buy</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Buy crypto in a few easy steps. .
                </div>
                <button className="text-[10px] bg-[#353535] p-2 text-black hover:bg-[#2EDBAD] rounded-2xl mt-2 flex gap-1 items-center cursor-pointer">
                  Buy Crypto <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold text-[42px]">3</div>
              <div className="text-left">
                <div className="text-[22px] font-bold">Start Trading</div>
                <div className="text-[14px] text-[#B2ADAD] font-normal">
                  Sell and buy crypto, copy trade, and more. .
                </div>
                <button className="text-[10px] bg-[#353535] p-2 hover:bg-[#2EDBAD] text-black rounded-2xl mt-2 flex gap-1 items-center cursor-pointer">
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
      <div>
        <div className="font-bold md:text-[45px] text-[30px]">
          Escort Every Trade
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly ">
          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img src="/secure-shield 1.svg" className="h-[40px] w-[40px]" />
            <div className="text-[20px] font-bold">Secure Smart Contracts</div>
            <div className="text-[14px] font-semibold text-[#B2ADAD]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 max-md:hidden">
            <img src="/reserve 1.svg" className="h-[40px] w-[40px]" />
            <div className="text-[20px] font-bold">Reserve Audit Proof</div>
            <div className="text-[14px] font-semibold text-[#B2ADAD]">
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
            <div className="text-[14px] font-semibold text-[#B2ADAD] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis commodo nunc non malesuada. Cras consequat
              diam sed
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:hidden gap-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/secure-shield 1.svg" className="h-[20px] w-[20px]" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">
                  Secure Smart Contracts
                </div>
                <div className="text-[10px]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/reserve 1.svg" className="h-[20px] w-[20px]" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">Reserve Audit Proof</div>
                <div className="text-[10px]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 ">
                <img src="/wallet 1.svg" className="h-[20px] w-[20px]" />
              </div>
              <div className="text-left flex flex-col gap-1">
                <div className="text-[20px] font-bold">
                  Cold/Hot Wallet based Storage
                </div>
                <div className="text-[10px]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly bg-[#131516] p-5 flex-wrap ">
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
      <div className="flex max-md:flex-col rounded-2xl items-center w-full">
        <div className="md:w-[50%] w-full justify-center flex ">
          <div className=" rounded-full p-20 w-full backdrop-blur flex justify-center relative items-center">
            <img
              src="./home.gif"
              className="w-[160px] h-[335px] md:w-[320px] md:h-[620px] z-20"
            />
            <div
              className="absolute bg-[#2EDBAD]/60 blur-2xl  h-[60%] w-[80%]  rounded-full"
              style={{ background: "blur" }}
            ></div>
          </div>
        </div>
        <div className="md:w-[50%] max-md:hidden  w-full flex flex-col gap-10 items-center h-full">
          <div>
            <div className="text-[50px] font-extrabold text-center">
              Trade Crypto
              <div className="text-[50px] font-extrabold text-center">
                Anywhere Anytime
              </div>
            </div>
          </div>
          <div className="bg-[#353535] max-w-[400px] flex max-h-[220px] rounded-[10px]">
            <div className="w-[50%] p-3 border border-white rounded-2xl">
              {" "}
              <QRCode
                className="w-full h-full bg-white p-2 rounded-md"
                value={""}
              />
            </div>
            <div className="w-[50%] flex flex-col justify-between h-full p-5">
              <div>
                <div className="text-[15px] font-normal">
                  Scan to download app
                </div>
                <div className="text-[26px] font-extrabold">iOS & Android</div>
              </div>
              <div className="text-[14px] font-normal capitalize">
                More Download Options
              </div>
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div className="w-full flex justify-center flex-col items-center">
              <div>
                <AiTwotoneCloseCircle className="size-7" />
              </div>
              <div className="capitalize text-[20px] font-bold">macos</div>
            </div>
            <div className="w-full flex justify-center flex-col items-center">
              <div>
                <GrWindows className="size-7" />
              </div>
              <div className="capitalize text-[20px] font-bold">windows</div>
            </div>
            <div className="w-full flex justify-center flex-col items-center">
              <div>
                <AiFillApi className="size-7" />
              </div>
              <div className="capitalize text-[20px] font-bold">APi</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex w-full justify-center text-[12px] gap-5 md:hidden">
        <div className="flex flex-col items-center font-bold">
          <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
            <BsAndroid2 className="size-4" />
          </div>
          <div>Android</div>
        </div>
        <div className="flex flex-col items-center font-bold">
          <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center">
            <FaGooglePlay className="size-4" />
          </div>
          <div>Google Play</div>
        </div>
      </div>
      <div className="md:hidden p-3 flex flex-col gap-3">
        <div className=" border-2 border-amber-50 w-full rounded-[12px] items-center flex justify-between p-2">
          <div>Create Account</div>
          <div>
            <FaAngleRight />
          </div>
        </div>
        <div className=" border-2 border-amber-50 w-full rounded-[12px] items-center flex justify-between p-2">
          <div>Quick Buy</div>
          <div>
            <FaAngleRight />
          </div>
        </div>
        <div className=" border-2 border-amber-50 w-full rounded-[12px] items-center flex justify-between p-2">
          <div>Start Trading</div>
          <div>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col items-center w-full ">
        <div className="text-[30px] md:text-[50px] md:w-[60%] w-full  font-extrabold">
          Worldwide Buzz Media on Your Narrative
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:hidden  gap-10 w-full">
          <div className="w-full rounded-[15px] border-2 h-70"></div>
          <div className="w-full rounded-[15px] border-2 h-70"></div>
          <div className="w-full rounded-[15px] border-2 h-70"></div>
        </div>
        <div className="max-md:hidden w-full">
          {" "}
          <PromoSlider items={8} />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center bg-[#131516] p-5">
        <div className="font-extrabold text-[20px]">
          Start your crypto journey now !
        </div>
        <button className="p-[10px_20px_10px_20px] cursor-pointer bg-[#2EDBAD] w-fit rounded-[6px]">
          <div className="flex max-md:hidden font-extrabold text-black gap-1 items-center">
            <img src="gift.svg" className="size-4.5" /> Sign up now
          </div>
          <FaArrowRightLong className="size-5 text-black md:hidden" />
        </button>
      </div>
      <Footer />
    </div>
  );
};
