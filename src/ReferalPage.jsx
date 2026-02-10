import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import { Footer } from "./foooter";

export const ReferralPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen ">
      <div className="flex items-center max-md:flex-col  justify-between md:p-20 p-5">
        <div className=" md:text-left text-center flex flex-col gap-10">
          <div className="md:text-[54px] text-[35px] font-bold text-center leading-[100%]">
            30% Commission Rebate.
            <br className="max-md:hidden" /> Invite Your Friends Now.
          </div>
          <div className="text-[18px] font-bold leading-[100%] text-[#686868] max-md:hidden">
            Get 30% of your friends' trading fees. Invite now and profit
            together.
          </div>
          <div className="w-full flex max-md:justify-center">
            <button className="bg-[#2EDBAD] h-[47px] w-[180px] text-[18px] w-f p-1 font-bold text-black rounded-[33px]">
              Invite Now
            </button>
          </div>
          <div className="text-[18px] font-bold leading-[100%] text-[#686868] md:hidden">
            Get 30% of your friends' trading fees. Invite now and profit
            together.
          </div>
        </div>
        <div className="mt-10">
          <img className="bg-[#131516] rounded-full  md:size-96.5 size-73" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:p-20 p-5">
        <div className="text-[35px] font-bold mb-10">How To Refer Your Friends</div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full text-black">
          <div className="col-span-1 flex flex-col gap-5 text-white">
            <div className="bg-[#131516] md:h-[240px] h-[120px] w-full rounded-[10px] col-span-1 p-2">
              <div className=" md:hidden flex h-full w-full justify-center items-center gap-3">
                <div className="text-[35px] font-bold w-[20%] text-right p-4 text-white">
                  01
                </div>
                <div className="text-[16px] w-[70%] text-left font-bold">
                  Share your referral link with friends
                </div>
              </div>
              <div>
                <div className="text-[35px] font-bold w-[20%] h-full  mt-10 text-right  text-white max-md:hidden">
                  01
                </div>
              </div>
            </div>
            <div className="text-white text-[22px] max-md:hidden font-bold">
              Share your referral link with friends
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5 text-white">
            <div className="bg-[#131516] md:h-[240px] h-[120px] w-full rounded-[10px] col-span-1">
              <div className=" md:hidden flex h-full w-full justify-center items-center gap-3">
                <div className="text-[35px] font-bold w-[20%] text-right p-4">
                  02
                </div>
                <div className="text-[16px] w-[70%] text-left font-bold">
                  Refer friends to sign up and buy crypto worth over $50
                </div>
              </div>
              <div className="text-[35px] font-bold w-[20%] text-right max-md:hidden h-full  mt-10">02</div>
            </div>
            <div className="text-[22px] font-bold text-white font-bold text-left max-md:hidden">
              Refer friends to sign up and buy crypto worth over $50
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="bg-[#131516] md:h-[240px] h-[120px] w-full rounded-[10px] col-span-1">
              <div className=" md:hidden flex h-full w-full justify-center items-center gap-3">
                <div className="text-[35px] font-bold w-[20%] text-right p-4 text-white">
                  03
                </div>
                <div className="text-[16px] text-white font-bold w-[70%] text-left">
                  Receive 100 USD trading fee rebate voucher each
                </div>
              </div>
              <div className="text-[35px] font-bold w-[20%] h-full  mt-10 text-right text-white max-md:hidden">03</div>
            </div>
            <div className="text-[22px] font-bold text-white max-md:hidden">
              Receive 100 USD trading fee rebate voucher each
            </div>
          </div>
        </div>
        <div className="text-left mt-30">
          <div className="text-[35px] font-bold mb-10">Rules</div>
          <div>
            {" "}
            <ul className="text-left leading-[29px] text-[18px] text-[#686868]">
              <li>
                1. Share your referral code or link with a friend who does not
                have a BloFin account.
              </li>
              <li>
                2. Your invitee can get a Welcome Bonus within their first 15
                days of registration. You will receive 30% of your invitee's
                trading fees as a reward
              </li>
              <li>
                3. You will receive only one reward type per referral, based on
                your account status when your invitees register: the regular
                referral reward if they sign up before you become an Affiliate,
                or the Affiliate-level referral reward if they sign up
                afterwards.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-30 gap-5 items-center bg-[#131516] md:p-[40px_0px_40px_0px] p-[10px_0px_10px_0px] mt-10">
        <div className="font-bold text-[35px] md:text-[50px]">
         Start Earning Now !
        </div>
        <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#2EDBAD] md:h-[58px] h-[30px] w-fit rounded-[41px] rounded-[6px] gap-2">
          <div className="flex max-md:hidden font-semibold text-black gap-1 items-center justify-center md:w-[180px] text-[18px]">
            <button src="gift.svg" className="text-[20px] rounded-[20px] text-[16px]" > Log In</button>
          </div>
          <button className={`w-[160px] text-black md:hidden rounded-[20px] text-[16px] text-center`} >Invite Now</button>
        </button>
      </div>
    </div>
    <Footer isShow={false}/>
    </>
  );
};
