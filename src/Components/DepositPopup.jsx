import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
    navigate("/crypto/deposit");
    setPopup(!popup);
  };

  const handleClose1 = () => {
    navigate("/buy-crypto");
    setPopup(!popup);
  };

  return (
    <div className="h-screen fixed inset-0 z-40 bg-brand-background overflow-hidden">
      <div
        id="popup"
        className="bg-surface-2 text-text-primary sm:w-[425px] w-full p-5 h-full absolute right-0 transition-all"
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-end cursor-pointer">
            <IoMdClose className="size-6 text-text-secondary hover:text-text-primary" onClick={() => setPopup(!popup)} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold leading-[24px]">
              I have crypto assets
            </div>
            <div
              className="flex border border-border md:border-1 hover:border-brand-green hover:text-brand-green p-[16px] items-center rounded-[16px] cursor-pointer transition-colors"
              onClick={handleClose}
            >
              <div>
                <div className="text-[14px] font-medium leading-[22px]">
                  Deposit Crypto
                </div>
                <div className="text-[12px] font-normal leading-[18px] text-text-muted mt-1">
                  Send crypto to your BitZup Account
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold leading-[24px]">
              I don't have crypto assets
            </div>
            <div
              className="flex border border-border md:border-1 hover:border-brand-green hover:text-brand-green p-[16px] items-center rounded-[16px] cursor-pointer transition-colors"
              onClick={handleClose1}
            >
              <div>
                <div className="text-[14px] font-medium leading-[22px]">
                  Credit/Debit Card
                </div>
                <div className="text-[12px] font-normal leading-[18px] text-text-muted mt-1">
                  Visa, Mastercard, Google Pay, and Apple Pay!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
