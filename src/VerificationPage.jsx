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
      placeholder: "Please enter the link",
    },
    {
      name: "Email",
      icon: <IoIosMail className="size-5" />,
      placeholder: "Please enter the full information to verify",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "X(Twitter)",
      icon: <FaSquareXTwitter className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "Wechat",
      icon: <IoLogoWechat className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "FaceBook",
      icon: <CiFacebook className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "Phone",
      icon: <IoMdPhonePortrait className="size-5" />,
      placeholder: "Please enter the phone number",
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
      // setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/market/official-id-type`,
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      
      // if(result?.verified)
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // fetchData1();
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
          method: "POST", // 👈 important
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload), // 👈 JSON send
        },
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setShowPopup(true);
      // setData(result);
      if (result?.verified) {
       setSuccess(result?.verified)
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
        <title>BitZup KYC Verification — Secure Your Account</title>
        <meta name="description" content="Complete your BitZup KYC in minutes. Upload your ID and selfie to unlock trading, higher withdrawal limits, and a fully secured account." />
      </Helmet>
      <Navbar />
      {showPopup && (
        <VerifyPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          type={success? "success": "error"}
          url={inputValue}
          category={select.account_type}
        />
      )}
      <div className="bg-bg min-h-screen ">
        <div className="flex justify-center w-full md:min-h-[75vh] min-h-[70vh]">
          <div className="flex flex-col w-[60%] max-md:w-full">
            <div className="flex items-center flex-col p-5 gap-5">
              <div className="md:text-3xl text-3xl text-primary font-bold md:text-left text-center leading-[100%] mt-16">
                BitZup Official Verification
              </div>
              <div className="md:text-base text-xs font-bold md:leading-6  text-muted  text-center">
                Please use BitZup Verify to check whether the source officially
                represents BitZup <br className="max-md:hidden" /> including
                website link, email address, Discord ID, Twitter account, or
                Telegram ID.
              </div>
            </div>

            <div className="flex max-md:flex-col justify-center items-center p-5 gap-5 mt-10 md:mb-5">
              <div className="w-[40%] max-md:w-full">
                <div
                  className="max-w-[520px] max-md:w-full relative  cursor-pointer"
                  ref={popupRef}
                >
                  <div
                    className="border bg-surface border-border rounded-full px-5 h-14 text-sm text-primary outline-none"
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
                          "Select Method"
                        )}
                      </div>

                      <FaSortDown
                        className={`size-5 ${open ? "transition-transform rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  {open && (
                    <div
                      className={`absolute z-10 mt-2 w-full shadow-xl  ${
                        dark
                          ? "bg-surface-2 text-primary"
                          : "bg-bg text-primary"
                      } rounded-xl  max-h-[300px] custom-scroll overflow-y-auto`}
                    >
                      <ul>
                        {data.length > 0 ? (
                          data.map((coin, ind) => (
                            <li
                              key={ind}
                              className={`flex ${
                                dark ? "hover:bg-border" : "hover:bg-surface"
                              } items-center justify-between w-full p-[16px_12px_16px_12px] rounded-lg cursor-pointer transition-colors duration-200`}
                              onClick={() => {
                                setSelect(coin);
                                setOpen(!open);
                              }}
                            >
                              <div className="flex items-center justify-between w-full gap-2">
                                <div className="flex gap-2 items-center">
                                  <div><img src={`/${coin.account_type}.svg`} alt={coin.account_type} /></div>
                                  <span className="font-medium">
                                    {coin.account_type}
                                  </span>
                                  {/* <span className="text-gray-500 text-sm">{coin.coin}</span> */}
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
                  placeholder={select?.placeholder || "Please enter the link."}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border bg-surface border-border rounded-full px-5 h-14 text-sm font-normal text-primary outline-none "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[90%] md:w-[40%] ">
              <button
                  name="Email"
                  placeholder="Search"
                onClick={handleSubmit}
                  className="border flex justify-center items-center gap-2 w-full bg-primary cursor-pointer border-border rounded-full px-12 h-14 text-sm text-bg outline-none"
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") handleSubmit();
                  // }}
                  // value={userData.password}
                  // onChange={(e) => handle("password", e)}
                  // type={showPassword ? "password" : "text"}
                >
                {/* <div className="cursor-pointer "> */}
                  <IoIosSearch className="  h-6 w-6 text-bg" />
                {/* </div> */}
                Search
              </button>
              </div>
            </div>
          </div>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
