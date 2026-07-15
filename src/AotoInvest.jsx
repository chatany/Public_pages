import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import { useAuth } from "./useAuth";
import Button from "./Common/Button";

export const AutoInvest = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/trade/auto-invest", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return null;
  }

  const advantages = [
    {
      src: "/innovation.svg",
      title: "Cost Averaging",
      subtitle:
        "Automatically buy at regular intervals to reduce the impact of market volatility on your portfolio.",
    },
    {
      src: "/pathways.svg",
      title: "Automated Strategy",
      subtitle:
        "Build your long-term wealth without the stress of timing the market. Set it and forget it.",
    },
    {
      src: "/compensation.svg",
      title: "Low Barrier",
      subtitle:
        "Start your crypto journey with as little as $10 and a schedule that fits your lifestyle.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Auto Invest Crypto on BitZup — DCA Made Simple</title>
        <meta
          name="description"
          content="Set Auto Invest Buys for Bitcoin, Ethereum, and more on BitZup. Dollar-cost average into crypto on your schedule — daily, weekly, or monthly. Start from any amount."
        />
      </Helmet>
      <Navbar />
      <div className="bg-bg text-primary min-h-screen ">
        <div className="flex items-center max-md:flex-col justify-between md:px-16 p-5 ">
          <div className=" md:text-left text-center flex flex-col gap-10 mt-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-bold md:text-left text-center leading-tight">
                Auto Invest Buys
              </h1>
              <div className="text-xs md:text-lg font-bold text-secondary max-w-md">
                Auto-buy Bitcoin, Ethereum, Solana and 40+ others. Daily,
                weekly, or monthly schedules. Start from $10.
              </div>
            </div>
            <div className="w-full flex max-md:justify-center">
              <Button
                variant="primary"
                onClick={() => (window.location.href = "/trade/register")}
                className="md:h-12 h-8 md:min-w-max px-8 text-base font-bold"
              >
                Set up your first auto invest
              </Button>
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-surface rounded-full md:size-96 size-64" />
          </div>
        </div>
        <div className="mt-20 md:px-16 p-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Recurring buy advantages
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {advantages?.map((item, ind) => (
              <div
                className="flex flex-col gap-5 items-center p-8 rounded-xl border border-border min-h-[15.625rem] bg-surface"
                key={ind}
              >
                <div>
                  <img
                    src={item?.src}
                    alt={item.title}
                    className="size-12 md:size-16"
                  />
                </div>
                <div className="text-xl font-bold text-primary">
                  {item.title}
                </div>
                <div className="text-sm font-medium text-secondary text-center leading-relaxed">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xl md:text-3xl text-center font-bold mt-20 md:px-16 p-5 text-secondary leading-relaxed">
          Auto Invest Buys give you the flexibility to decide how much and how
          often to invest.
        </div>
        <div className="flex flex-col gap-6 items-center bg-surface py-12 px-6 mt-20">
          <div className="font-bold text-xl md:text-3xl text-center">
            Set up Auto Invest Buys on the BitZup app
          </div>
          <Button
            onClick={() => (window.location.href = "/trade/register")}
            variant="primary"
            className="md:h-12 h-8 md:min-w-max px-8 text-base font-bold"
          >
            Set up your first auto invest
          </Button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
