import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import { Gift, Share2, UserPlus, Trophy } from "lucide-react";
import Button from "./Common/Button";
import { useAuth } from "./useAuth";

export const ReferralPage = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/trade/referral", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>BitZup Referral Program — Earn 30% Trading-Fee Commission</title>
        <meta name="description" content="Invite friends to BitZup and earn up to 30% of their trading fees. Share your referral link, they get a welcome bonus, you both earn real crypto." />
      </Helmet>
      <Navbar/>
    <div className="bg-bg min-h-screen text-primary">
      <div className="flex items-center max-md:flex-col  justify-between md:p-20 p-5">
        <div className=" md:text-left text-center flex flex-col gap-10">
          <h1 className="md:text-3xl text-2xl font-bold md:text-left text-center leading-tight">
            Invite friends. Earn 30% of their fees.
          </h1>
          <p className="text-base font-bold text-secondary max-md:hidden">
            Share your BitZup link and earn up to 30% commission on every trade your friends make — paid in real crypto. They get a welcome bonus; you both win.
          </p>
          <div className="w-full flex max-md:justify-center">
            <Button variant="primary">
              Get my referral link
            </Button>
          </div>
          <p className="text-base font-bold text-secondary md:hidden">
            Share your BitZup link and earn up to 30% commission on every trade your friends make — paid in real crypto. They get a welcome bonus; you both win.
          </p>
        </div>
        <div className="mt-10 relative flex justify-center items-center">
          <div className="absolute bg-brand-green/50 blur-2xl rounded-full md:size-80 size-60" />
          <img src="/referral.svg" className="relative z-base md:size-96 size-72" alt="Referral"/>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:p-20 p-6">
        <h2 className="md:text-2xl text-xl font-bold mb-12">How To Refer Your Friends</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full">
          {/* Step 1 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md   max-md:items-center">
              <div className="text-2xl font-semibold text-secondary">01</div>
              <div className="flex justify-center items-center">
                <img src="/referral1.svg" alt="" className="md:size-40 size-16" />
              </div>
            <div className=" md:hidden text-base font-bold text-primary text-left">
              Share your link — Copy your unique referral link or code and send it to friends.
            </div>
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary"> 
              Share your link — Copy your unique referral link or code and send it to friends.
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md   max-md:items-center">
              <div className="text-2xl font-bold text-secondary">02</div>
               <div className="flex justify-center items-center">

              <img src="/referral2.svg" className="md:size-40 size-16"/>
               </div>
              <div className="md:hidden text-base font-bold text-primary text-left">
              They sign up & trade — Your friend registers and buys at least $50 in crypto within 15 days.
            </div>
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary text-left">
              They sign up & trade — Your friend registers and buys at least $50 in crypto within 15 days.
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md   max-md:items-center">
              <div className="text-2xl font-bold text-secondary">03</div>
              <div className="flex justify-center items-center">

              <img src="/referral3.svg" className="md:size-40 size-16"/>
              </div>
               <div className="md:hidden text-base font-bold text-primary text-left">
              You both get paid — You each receive a $100 trading-fee rebate voucher, plus you keep earning 30% of their trading fees.
            </div>
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary">
              You both get paid — You each receive a $100 trading-fee rebate voucher, plus you keep earning 30% of their trading fees.
            </div>
          </div>
        </div>
        <div className="text-left w-full mt-24">
          <h2 className="text-2xl font-bold mb-8">The rules, in plain English</h2>
          <ul className="text-left space-y-4 text-base text-secondary">
            <li>
              Your friend must be new to BitZup — the link only works for first-time accounts.
            </li>
            <li>
              Invitees unlock a Welcome Bonus in their first 15 days; you earn 30% of their trading fees from day one.
            </li>
            <li>
              One reward type applies per referral, set by your account status at the time your friend registers.
            </li>
            <li>
              Rewards are credited automatically — track them in your Referral dashboard.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center bg-surface py-16 mt-24">
        <h2 className="font-bold text-2xl md:text-3xl text-primary">
          Start earning today
        </h2>
        <p className="text-secondary text-sm md:text-base text-center max-md:px-4">
          The more friends you invite, the more you earn — with no limit on referrals.
        </p>
        <Button variant="primary h-12">
          <Gift className="size-6" strokeWidth={1.5} />
          Get my referral link
        </Button>
      </div>
    <Footer isShow={false}/>
    </div>
    </>
  );
};
export default ReferralPage;
