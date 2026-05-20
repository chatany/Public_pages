import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import { Gift, Share2, UserPlus, Trophy } from "lucide-react";

export const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>Refer Friends to BitZup — Earn Up to 30% Commission</title>
        <meta name="description" content="Refer friends to BitZup and earn up to 30% of their trading fees. Share your link, track rewards in real time, and build passive crypto income." />
      </Helmet>
      <Navbar/>
    <div className="bg-bg min-h-screen text-primary">
      <div className="flex items-center max-md:flex-col  justify-between md:p-20 p-5">
        <div className=" md:text-left text-center flex flex-col gap-10">
          <h1 className="md:text-3xl text-2xl font-bold md:text-left text-center leading-tight">
            30% Commission Rebate.
            <br className="max-md:hidden" /> Invite Your Friends Now.
          </h1>
          <p className="text-base font-bold text-secondary max-md:hidden">
            Get 30% of your friends' trading fees. Invite now and profit
            together.
          </p>
          <div className="w-full flex max-md:justify-center">
            <button className="btn-primary w-48">
              Invite Now
            </button>
          </div>
          <p className="text-base font-bold text-secondary md:hidden">
            Get 30% of your friends' trading fees. Invite now and profit
            together.
          </p>
        </div>
        <div className="mt-10">
          <div className="bg-surface rounded-full md:size-96 size-72" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:p-20 p-6">
        <h2 className="md:text-2xl text-xl font-bold mb-12">How To Refer Your Friends</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full">
          {/* Step 1 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md gap-10  max-md:items-center">
              <div className="text-2xl font-semibold text-secondary">01</div>
              {/* <Share2 className="size-8 text-brand-green" strokeWidth={1.5} /> */}
            <div className=" md:hidden text-base font-bold text-primary">
              Share your referral link with friends
            </div>
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary"> 
              Share your referral link with friends
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md gap-10  max-md:items-center">
              <div className="text-2xl font-bold text-secondary">02</div>
              <div className="md:hidden text-base font-bold text-primary text-left">
              Refer friends to sign up and buy crypto worth over $50
            </div>
              {/* <UserPlus className="size-8 text-brand-green" strokeWidth={1.5} /> */}
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary text-left">
              Refer friends to sign up and buy crypto worth over $50
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-6">
            <div className="card max-md:h-32 h-48 md:h-60 flex flex-col max-md:flex-row  max-md gap-10  max-md:items-center">
              <div className="text-2xl font-bold text-secondary">03</div>
               <div className="md:hidden text-base font-bold text-primary">
              Receive 100 USD trading fee rebate voucher each
            </div>
              {/* <Trophy className="size-8 text-brand-green" strokeWidth={1.5} /> */}
            </div>
            <div className=" max-md:hidden text-lg font-bold text-primary">
              Receive 100 USD trading fee rebate voucher each
            </div>
          </div>
        </div>
        <div className="text-left w-full mt-24">
          <h2 className="text-2xl font-bold mb-8">Rules</h2>
          <ul className="text-left space-y-4 text-base text-secondary">
            <li>
              1. Share your referral code or link with a friend who does not
              have a BitZup account.
            </li>
            <li>
              2. Your invitee can get a Welcome Bonus within their first 15
              days of registration. You will receive 30% of your invitee's
              trading fees as a reward.
            </li>
            <li>
              3. You will receive only one reward type per referral, based on
              your account status when your invitees register.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center bg-surface py-16 mt-24">
        <h2 className="font-bold text-2xl md:text-3xl text-primary">
         Start Earning Now!
        </h2>
        <button className="btn-primary px-12">
          <Gift className="size-6" strokeWidth={1.5} />
          Invite Now
        </button>
      </div>
    <Footer isShow={false}/>
    </div>
    </>
  );
};
export default ReferralPage;
