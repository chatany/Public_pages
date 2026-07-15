import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Footer } from "../foooter";
import Button from "../Common/Button";

export const BASE_URL = import.meta.env.VITE_API_BASE || "https://api.bitzup.com";

export const apiRequest = async ({ method, url, data = null, params = null, headers = {} }) => {
  try {
    let fetchUrl = url;
    if (params) {
      const searchParams = new URLSearchParams(params);
      fetchUrl += `?${searchParams.toString()}`;
    }
    const response = await fetch(fetchUrl, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
      credentials: "include",
    });
    
    const responseData = await response.json().catch(() => null);
    return {
      data: responseData,
      status: response.status,
    };
  } catch (error) {
    return {
      data: null,
      status: 0,
    };
  }
};

export const getLastTradeRoute = () => {
  const platform = localStorage.getItem("LAST_TRADE_PLATFORM");
  if (platform === "spot" || platform === "futures") {
    return `/trade/${platform}/BTCUSDT`;
  }
  return `/trade/spot/BTCUSDT`;
};

export const saveLastTradeRoute = (platform) => {
  if (platform === "spot" || platform === "futures") {
    localStorage.setItem("LAST_TRADE_PLATFORM", platform);
  }
};

export const Loder = ({ className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={`fixed inset-0 z-modal flex items-center justify-center bg-black/60 ${className}`}>
      <div className="animate-pulse text-xl font-bold tracking-widest text-brand-green">BitZup...</div>
    </div>
  );
};

export function FeeTierModal({ open, onClose, obj }) {
  const dark = true;
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={` ${dark ? "bg-[#17181a] text-[#EAECEF]" : "bg-[#Ffffff] text-[#262030]"} rounded-xl w-[520px] max-w-[90%] shadow-lg`}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center p-5 border-b ${dark ? "border-[#38393d]" : "border-[#dedfe0]"}`}
        >
          <h2 className="text-lg font-semibold text-text-primary">Fee Tier Details</h2>

          <IoMdClose
            className="text-xl cursor-pointer text-gray-500"
            onClick={onClose}
          />
        </div>

        {/* Table */}
        <div className="p-5 text-text-primary">
          <div
            className={`grid grid-cols-5 text-sm font-medium text-gray-500 border-b ${dark ? "border-[#38393d]" : "border-[#dedfe0]"} pb-3 mb-3`}
          >
            <div>Fee Tiers</div>
            <div className="col-span-2 flex flex-col gap-0.5">
              <div className="text-center w-full">Futures</div>
              <div className="flex justify-evenly">
                <div className="text-center">Maker</div>
                <div className="text-center">Taker</div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-0.5">
              <div className="text-center w-full">Spot</div>
              <div className="flex justify-evenly">
                <div className="text-center">Maker</div>
                <div className="text-center">Taker</div>
              </div>
            </div>
          </div>

          {obj?.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-5 text-sm py-3 border-b ${dark ? "border-[#38393d]" : "border-[#dedfe0]"} last:border-none`}
            >
              <div className="font-medium">{`VIP ${row?.vip_level}`}</div>

              <div className="text-center">{row?.futures_maker_fee}%</div>

              <div className="text-center">{row?.futures_taker_fee}%</div>

              <div className="text-center">{row?.maker_fee}%</div>

              <div className="text-center">{row?.taker_fee}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const VipLevel = () => {
  const [volume, setVolume] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [vipLevel, setVipLevel] = useState([]);
  const [currentEle, setCurrentEle] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resSummary, resLevels] = await Promise.all([
        apiRequest({
          method: "get",
          url: `${BASE_URL}/onboarding/user/vip-summary`,
        }),
        apiRequest({
          method: "get",
          url: `${BASE_URL}/onboarding/user/vip-levels`,
        }),
      ]);
      if (resSummary.status === 200 && resSummary.data?.status == 1) {
        setVolume(resSummary.data.data);
      }
      if (resLevels.status === 200 && resLevels.data?.status == 1) {
        setVipLevel(resLevels.data.data?.levels);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (vipLevel?.length > 0) {
      const targetLevel = volume ? volume.vip_level : 0;
      const item = vipLevel?.find(
        (item) => item?.vip_level === targetLevel,
      ) || vipLevel[0];
      setCurrentEle(item);
    }
  }, [vipLevel, volume]);

  return (
    <div className="bg-bg text-text-primary min-h-screen overflow-x-hidden md:p-10 p-4 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <div className="text-[32px] font-semibold text-text-primary">
            My Fee Rates
          </div>
          <Button
            onClick={() => setShowPopup(!showPopup)}
            variant="ghost"
            className="text-[14px] flex gap-1 items-center px-3 py-1.5"
          >
            {(volume?.vip_level || 0) == 0 ? "Regular" : `VIP ${volume.vip_level}`}
            <FaAngleRight />
          </Button>
        </div>

        <FeeTierModal
          open={showPopup}
          onClose={() => setShowPopup(!showPopup)}
          obj={vipLevel}
        />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="p-5 border border-border rounded-lg flex flex-col gap-5 bg-surface-2/20">
            <div className="text-[18px] font-semibold text-text-primary">Futures Trading Fee Rate</div>
            <div className="bg-surface border border-border rounded-xl flex justify-between p-5">
              <div className="flex flex-col gap-1">
                <div className="text-[12px] text-text-muted">Maker</div>
                <div className="text-[16px] font-semibold text-text-primary">{currentEle?.futures_maker_fee ?? "0.02"}%</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[12px] text-text-muted">Taker</div>
                <div className="text-[16px] font-semibold text-text-primary">{currentEle?.futures_taker_fee ?? "0.05"}%</div>
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-5 border border-border rounded-lg bg-surface-2/20">
            <div className="text-[18px] font-semibold text-text-primary">Spot Trading Fee Rate</div>
            <div className="bg-surface border border-border rounded-xl flex justify-between p-5">
              <div className="flex flex-col gap-1">
                <div className="text-[12px] text-text-muted">Maker</div>
                <div className="text-[16px] font-semibold text-text-primary">{currentEle?.maker_fee ?? "0.1"}%</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[12px] text-text-muted">Taker</div>
                <div className="text-[16px] font-semibold text-text-primary">{currentEle?.taker_fee ?? "0.1"}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[20px] font-semibold text-text-primary">
          VIP Progress
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="p-5 border border-border rounded-lg flex flex-col justify-between min-h-[180px] bg-surface-2/20">
            <div>
              <div className="text-[12px] text-text-muted mb-1">
                30-Day Futures Trading Volume
              </div>
              <div className="text-[16px] font-bold text-text-primary">{volume?.futures_30d ?? "0.00"} USDT</div>
            </div>
            <div className="mt-4">
              <div className="text-[12px] text-text-muted mb-1 leading-relaxed">
                To unlock the next fee tier, increase futures trading volume by
              </div>
              <div className="text-[14px] font-semibold text-text-primary mb-2">
                {currentEle?.futures_asset_volume_max ?? "0.00"} USDT
              </div>
              <div>
                <button
                  className="text-[13px] flex items-center text-brand-green hover:underline cursor-pointer font-medium"
                  onClick={() => {
                    saveLastTradeRoute("futures");
                    navigate(getLastTradeRoute(), { replace: true });
                  }}
                >
                  Trade Futures <FaAngleRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 border border-border rounded-lg flex flex-col justify-between min-h-[180px] bg-surface-2/20">
            <div>
              <div className="text-[12px] text-text-muted mb-1">
                30-Day Spot Trading Volume
              </div>
              <div className="text-[16px] font-bold text-text-primary">{volume?.spot_30d ?? "0.00"} USDT</div>
            </div>
            <div className="mt-4">
              <div className="text-[12px] text-text-muted mb-1 leading-relaxed">
                To unlock the next fee tier, increase futures trading volume by
              </div>
              <div className="text-[14px] font-semibold text-text-primary mb-2">
                {currentEle?.asset_volume_max ?? "0.00"} USDT
              </div>
              <div>
                <button
                  className="text-[13px] flex items-center text-brand-green hover:underline cursor-pointer font-medium"
                  onClick={() => {
                    saveLastTradeRoute("spot");
                    navigate(getLastTradeRoute(), { replace: true });
                  }}
                >
                  Trade Spot <FaAngleRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 border border-border rounded-lg flex flex-col justify-between min-h-[180px] bg-surface-2/20">
            <div>
              <div className="text-[12px] text-text-muted mb-1">Daily Assets</div>
              <div className="text-[16px] font-bold text-text-primary">{volume?.holdings_usd ?? "0.00"} USDT</div>
            </div>
            <div className="mt-4">
              <div className="text-[12px] text-text-muted mb-1 leading-relaxed">
                To unlock the next fee tier, increase your daily assets by
              </div>
              <div className="text-[14px] font-semibold text-text-primary mb-2">
                {currentEle?.asset_holding_max ?? "0.00"} USDT
              </div>
              <div>
                <button
                  className="text-[13px] flex items-center text-brand-green hover:underline cursor-pointer font-medium"
                  onClick={() => navigate("/crypto/deposit")}
                >
                  Deposit <FaAngleRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10">
          <div className="text-[18px] font-semibold mb-3 text-text-primary">Fee Schedule</div>
          <div className="text-[14px] text-text-muted leading-relaxed">
            When the 30-day futures trading volume, 30-day spot trading volume,
            and assets are at different tiers, the highest tier among them will
            be used to determine your trading fee rate level.
          </div>
        </div>

        <div className="md:p-6 p-1 bg-transparent text-text-primary">
          <div className="rounded-xl overflow-x-auto border border-border custom-scroll bg-surface-2/10">
            <div className="min-w-[1000px]">
              {/* Header */}
              <div className="grid grid-cols-6 bg-surface text-text-muted text-sm px-6 py-4 font-semibold uppercase tracking-wider border-b border-border">
                <div className="whitespace-nowrap">VIP Tier</div>
                <div className="px-2">30-Day Futures Trading Volume (USDT)</div>
                <div className="text-center">And / or</div>
                <div className="px-2">30-Day Spot Trading Volume (USDT)</div>
                <div className="text-center">And / or</div>
                <div className="px-2">Assets (USDT)</div>
              </div>

              {/* Rows */}
              {vipLevel?.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 px-6 py-5 border-b border-border last:border-b-0 hover:bg-surface transition items-center"
                >
                  {/* VIP Level */}
                  <div className="flex items-center gap-3">
                    <button
                      className={`w-[88px] py-1.5 rounded-lg text-sm font-bold transition
                ${
                  index === 0 || index === 1
                    ? "bg-gradient-to-r from-surface via-text-muted/30 to-surface text-text-primary border border-border"
                    : "bg-gradient-to-r from-brand-warning/40 via-brand-warning to-brand-warning/40 text-neutral-900 border border-brand-warning/30"
                }`}
                    >
                      {`VIP ${item?.vip_level}`}
                    </button>
                  </div>

                  {/* Futures */}
                  <div className="text-text-secondary font-medium px-2">
                    {item?.futures_asset_volume_min === "0"
                      ? "-"
                      : `≥ ${item?.futures_asset_volume_min}`}
                  </div>
                  <div className="text-text-muted text-center text-xs italic">
                    or
                  </div>

                  {/* Spot */}
                  <div className="text-text-secondary font-medium px-2">
                    {item?.asset_volume_min === "0"
                      ? "-"
                      : `≥ ${item?.asset_volume_min}`}
                  </div>
                  <div className="text-text-muted text-center text-xs italic">
                    or
                  </div>
                  {/* Assets */}
                  <div className="text-text-secondary font-medium px-2">
                    {item?.asset_holding_min === "0"
                      ? "-"
                      : `≥ ${item?.asset_holding_min}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {loading && <Loder className="bg-brand-background" />}
    </div>
  );
};
