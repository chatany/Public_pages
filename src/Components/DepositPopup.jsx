import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiWallet, BiCreditCard } from "react-icons/bi";

export const DepositPopup = ({ popup, setPopup }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popup]);

  const handleClose = () => {
    navigate("/trade/crypto/deposit");
    setPopup(!popup);
  };

  const handleClose1 = () => {
    navigate("/trade/buy-crypto");
    setPopup(!popup);
  };

  return (
    <div 
      className="h-screen fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-hidden"
      onClick={() => setPopup(false)}
    >
      <div
        id="popup"
        className="bg-surface-2 text-text-primary sm:w-[480px] w-full p-5 h-full absolute right-0 transition-all shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center pb-4">
            <div className="text-[18px] font-bold text-text-primary">Deposit</div>
            <IoMdClose className="size-6 text-text-secondary hover:text-text-primary cursor-pointer" onClick={() => setPopup(!popup)} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-medium text-text-secondary">
              I have crypto assets
            </div>
            <div
              className="flex border border-border md:border-1 hover:border-brand-green hover:text-brand-green p-[16px] items-center justify-between rounded-md cursor-pointer transition-colors bg-surface group gap-4"
              onClick={handleClose}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 bg-brand-green/10 rounded-full shrink-0">
                  <BiWallet className="size-6 text-brand-green" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="text-[14px] font-semibold leading-[22px] text-text-primary group-hover:text-brand-green transition-colors">
                    Deposit Crypto
                  </div>
                  <div className="text-[12px] font-normal leading-[18px] text-text-muted mt-1">
                    Send crypto to your BitZup Account
                  </div>
                </div>
              </div>
              <RiArrowRightSLine className="size-5 transition-colors shrink-0" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-medium text-text-secondary">
              I don't have crypto assets
            </div>
            <div
              className="flex border bg-surface border-border hover:text-brand-green hover:border-brand-green p-[16px] items-center justify-between rounded-md cursor-pointer transition-colors  group gap-4"
              onClick={handleClose1}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 bg-brand-green/10 rounded-full shrink-0">
                  <BiCreditCard className="size-6 text-brand-green" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="text-[14px] font-semibold leading-[22px] text-text-primary group-hover:text-brand-green transition-colors">
                   Credit/Debit Card
                  </div>
                  <div className="text-[12px] font-normal leading-[18px] text-text-muted mt-1">
                     Visa, Mastercard, Google Pay, and Apple Pay!
                  </div>
                </div>
              </div>
              <RiArrowRightSLine className="size-5 transition-colors shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
