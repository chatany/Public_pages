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
  const [data, setData] = useState([]);
  const [inputValue,setInputValue]=useState("")

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
        "https://test.bitzup.com/market/official-id-type",
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
  useEffect(() => {
    fetchData();
    // fetchData1();
  }, []);
  console.log(data, "jj");
const handleSubmit = async () => {
  try {
    const payload = {
      account_type: select.name,
      value: inputValue,
    };

    const response = await fetch(
      "https://test.bitzup.com/market/verify-official",
      {
        method: "POST", // 👈 important
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // 👈 JSON send
      }
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    setData(result);

  } catch (err) {
    setError(err.message);
  }
};
useEffect(() => {
  if (methodsArr.length > 0 && !select) {
    setSelect(methodsArr[0]);
  }
}, [methodsArr]);
  return (
    <>
      <Navbar />
      <VerifyPopup
        isOpen={true}
        onClose={() => setOpen(false)}
        url="https://www.bitget.site/official-verification"
      />
      <div className="bg-black min-h-screen ">
        <div className="flex justify-center w-full md:min-h-[75vh] min-h-[70vh]">
          <div className="flex flex-col w-[60%] max-md:w-full">
            <div className="flex items-center flex-col p-5 gap-5">
              <div className="md:text-[54px] text-[45px] font-bold md:text-left text-center leading-[100%] mt-15">
                Bitzup Official Verification
              </div>
              <div className="md:text-[18px] text-[12px] font-bold md:leading-[25px]  text-[#686868]  text-center">
                Please use Bitzup Verify to check whether the source officially
                represents Bitzup <br className="max-md:hidden" /> including
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
                    className={`
    border bg-[#131516] border-[#131516] rounded-full px-5 h-[57px] text-sm text-white outline-none
     
    `}
                  >
                    <div
                      className="w-full flex justify-between h-full p-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="text-[15px] font-normal capitalize">
                        {select ? (
                          <div className="flex gap-3 items-center">
                            <div>{select.icon}</div>
                            {select.name}{" "}
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
                          ? "bg-[#17181A] text-[#EAECEF]"
                          : "bg-[#FFFFFF] text-[#262030]"
                      } rounded-xl  max-h-[300px] custom-scroll overflow-y-auto`}
                    >
                      <ul>
                        {methedsArr.length > 0 ? (
                          methedsArr.map((coin, ind) => (
                            <li
                              key={ind}
                              className={`flex ${
                                dark ? "" : "hover:bg-[#F5F5F5]"
                              } items-center justify-between w-full p-[16px_12px_16px_12px] rounded-lg cursor-pointer`}
                              onClick={() => {
                                setSelect(coin);
                                setOpen(!open);
                              }}
                            >
                              <div className="flex items-center justify-between w-full gap-2">
                                <div className="flex gap-2 items-center">
                                  <div>{coin.icon}</div>
                                  <span className="font-medium">
                                    {coin.name}
                                  </span>
                                  {/* <span className="text-gray-500 text-sm">{coin.coin}</span> */}
                                </div>
                                {select?.name === coin.name && (
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
                  onChange={(e)=>setInputValue(e.target.value)}
                  
                  className="w-full border bg-[#131516] border-[#131516] rounded-full px-5 h-[57px] text-[15px] font-normal text-[#686868] outline-none "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[50%] max-md:w-[90%] ">
                <button
                  name="Email"
                  placeholder="Search"
                  onClick={handleSubmit}
                  className={`border w-full bg-[#FFFFFF] cursor-pointer border-[#FFFFFF] rounded-full px-12 h-[57px] text-sm text-black outline-none
     `}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") handleSubmit();
                  // }}
                  // value={userData.password}
                  // onChange={(e) => handle("password", e)}
                  // type={showPassword ? "password" : "text"}
                >Search</button>
                <div className="cursor-pointer ">
                  <IoIosSearch className="absolute left-5 top-4 h-6 w-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
