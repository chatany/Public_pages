import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaSearch, FaSortDown, FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosLink,
  IoIosMail,
  IoIosSearch,
  IoMdCheckmark,
  IoMdPhonePortrait,
} from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import VerifyPopup from "./Components/verification/success";
import Button from "./Common/Button";

export const Verification = () => {
  const dark = true;
  const [open, setOpen] = useState(false);
  const [success,setSuccess]=useState(null)
  const [errors, setErrors] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const popupRef = useRef(null);
  const methedsArr = [
    {
      name: "Website",
      icon: <IoIosLink className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "Email",
      icon: <IoIosMail className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "X(Twitter)",
      icon: <FaSquareXTwitter className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "Wechat",
      icon: <IoLogoWechat className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "FaceBook",
      icon: <CiFacebook className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
    {
      name: "Phone",
      icon: <IoMdPhonePortrait className="size-5" />,
      placeholder: "Paste a link, email, phone number or handle",
    },
  ];
  const methodsArr = data
    .map((item) => methedsArr[item.account_type])
    .filter(Boolean); // unknown type remove

  const [select, setSelect] = useState(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/market/official-id-type`,
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setErrors(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const payload = {
        type: select.account_type,
        value: inputValue,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/market/verify-official`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setShowPopup(true);
      if (result?.verified) {
       setSuccess(result?.verified)
      } else {
       setSuccess(false);
      }
    } catch (err) {}
  };
  useEffect(() => {
    if (methodsArr.length > 0 && !select) {
      setSelect(methodsArr[0]);
    }
  }, [methodsArr]);
  return (
    <>
      <Helmet>
        <title>Official Verification — Confirm Genuine BitZup Channels</title>
        <meta name="description" content="Protect yourself from scams. Verify that an email, website, phone number or social account genuinely belongs to BitZup before you act." />
      </Helmet>
      <Navbar />
      {showPopup && (
        <VerifyPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          type={success? "success": "error"}
          url={inputValue}
          category={select?.account_type}
        />
      )}
      <div className="bg-bg min-h-screen ">
        <div className="flex justify-center w-full md:min-h-[75vh] min-h-[70vh]">
          <div className="flex flex-col w-[60%] max-md:w-full">
            <div className="flex items-center flex-col p-5 gap-5">
              <div className="md:text-3xl text-2xl text-primary font-bold md:text-left text-center leading-[100%] mt-16">
                Verify it's really BitZup
              </div>
              <div className="md:text-base text-xs font-bold md:leading-6 text-muted text-center max-w-xl">
                Scammers impersonate exchanges. Before you trust a message, link or caller, check here to confirm it's an official BitZup channel.
              </div>
            </div>

            <div className="flex max-md:flex-col justify-center items-center p-5 gap-5 mt-10 md:mb-5">
              <div className="w-[40%] max-md:w-full">
                <div
                  className="max-w-[520px] max-md:w-full relative  cursor-pointer"
                  ref={popupRef}
                >
                  <div
                    className="border bg-recessed border-border rounded-sm px-5 h-14 text-sm text-primary outline-none"
                  >
                    <div
                      className="w-full flex justify-between h-full p-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="text-sm font-normal capitalize">
                        {select ? (
                          <div className="flex gap-3 items-center">
                            <div><img src={`/${select.account_type}.svg`} alt={select.account_type} /></div>
                            {select.account_type}{" "}
                          </div>
                        ) : (
                          <div className="text-text-muted">Select Method</div>
                        )}
                      </div>

                      <FaSortDown
                        className={`size-5 ${open ? "transition-transform rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  {open && (
                    <div
                      className={`absolute z-dropdown mt-2 w-full shadow-xl  ${
                        dark
                          ? "bg-recessed text-primary"
                          : "bg-bg text-primary"
                      } rounded-xl  max-h-[300px] custom-scroll overflow-y-auto`}
                    >
                      <ul>
                        {data.length > 0 ? (
                          data.map((coin, ind) => (
                            <li
                              key={ind}
                              className={`flex ${
                                dark ? "hover:bg-lift" : ""
                              } ${select?.account_type === coin.account_type ?"bg-lift text-text-primary":" text-text-muted"}  hover:text-text-primary items-center justify-between w-full p-[16px_12px_16px_12px] rounded-lg cursor-pointer transition-colors duration-200`}
                              onClick={() => {
                                setSelect(coin);
                                setOpen(!open);
                              }}
                            >
                              <div className={`flex items-center justify-between w-full gap-2  transition-colors duration-200`}>
                                <div className="flex gap-2 items-center ">
                                  <div><img src={`/${coin.account_type}.svg`} alt={coin.account_type} /></div>
                                  <span className="font-medium">
                                    {coin.account_type}
                                  </span>
                                </div>
                                {select?.account_type === coin.account_type && (
                                  <div>
                                    <IoMdCheckmark />
                                  </div>
                                )}
                              </div>
                            </li>
                          ))
                        ) : (
                          <div className="h-full w-full flex justify-center items-center">
                            No Data Found
                          </div>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[60%] max-md:w-full">
                <input
                  placeholder={select?.placeholder || "Paste a link, email, phone number or handle"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border bg-surface border-border rounded-sm px-5 h-14 text-sm font-normal text-primary outline-none "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full md:w-[40%] ">
              <Button
              variant="primary"
                  name="Email"
                  placeholder="Search"
                onClick={handleSubmit}
                className="h-12 w-full flex-gap-2"
                 
                >
                  <IoIosSearch className="  h-6 w-6 text-bg" />
                Verify
              </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
