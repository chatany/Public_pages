// import React, { useState } from "react";
// import {
//   IoSearchOutline,
//   IoChevronForward,
//   IoChevronBack,
//   IoInformationCircleOutline,
// } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa6";
// import Navbar from "../Navbar";
// import { Footer } from "../foooter";

// const currencies = [
//   { code: "USD", name: "US Dollar", color: "#3B82F6" },
//   { code: "EUR", name: "Euro", color: "#2563EB" },
//   { code: "ANG", name: "Netherlands Antillean Guilder", color: "#1E40AF" },
//   { code: "AMD", name: "Armenian Dram", color: "#F59E0B" },
//   {
//     code: "BAM",
//     name: "Bosnia-Herzegovina Convertible Mark",
//     color: "#3B82F6",
//   },
//   { code: "BDT", name: "Bangladeshi Taka", color: "#10B981" },
// ];

// const paymentMethods = [
//   {
//     id: "visa",
//     name: "VISA",
//     rate: "1 USDT ≈ 1.03 USD",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
//   },
//   {
//     id: "mastercard",
//     name: "MasterCard",
//     rate: "1 USDT ≈ 1.03 USD",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
//   },
//   {
//     id: "gpay",
//     name: "Google Pay",
//     rate: "1 USDT ≈ 1.03 USD",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
//   },
//   {
//     id: "applepay",
//     name: "Apple Pay",
//     rate: "1 USDT ≈ 1.03 USD",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
//   },
// ];

// export const BuyCrypto = () => {
//   const [view, setView] = useState("main"); // main, selectCurrency, selectPayment
//   const [spendAmount, setSpendAmount] = useState("15-20,000");
//   const [receiveAmount, setReceiveAmount] = useState("0");
//   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
//   const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
//   const [agreed, setAgreed] = useState(false);

//   const renderMainView = () => (
//     <div className="bg-[#0B0E11] text-white min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-1 p-6 md:p-12">
//         <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
//           {/* Left Content */}
//           <div className="flex-1 text-left mt-10">
//             <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
//               Buy Crypto in
//               <br />
//               Seconds
//             </h1>
//             <p className="text-gray-400 text-lg mb-10">
//               Get trending cryptos in a fast, simple and secure way
//             </p>
//             <div className="flex items-center gap-6 opacity-60">
//               <span className="text-sm">Supported by</span>
//               <div className="flex gap-4">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
//                   className="h-4"
//                   alt="Visa"
//                 />
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
//                   className="h-6"
//                   alt="Mastercard"
//                 />
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
//                   className="h-6"
//                   alt="Apple Pay"
//                 />
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
//                   className="h-6"
//                   alt="Google Pay"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Widget */}
//           <div className="w-full md:w-[450px] card relative">
//             <h2 className="text-2xl font-bold mb-8">Buy Crypto</h2>

//             {/* Spend Section */}
//             <div className="mb-6">
//               <label className="form-label">Spend</label>
//               <div className="relative group">
//                 <input
//                   type="text"
//                   value={spendAmount}
//                   onChange={(e) => setSpendAmount(e.target.value)}
//                   className="form-input pr-24 text-2xl font-bold"
//                   placeholder="15-20,000"
//                 />
//                 <button
//                   onClick={() => setView("selectCurrency")}
//                   className="absolute right-2 top-1.5 flex items-center gap-2 hover:bg-surface-2 p-1.5 px-3 rounded-sm transition-colors border-l border-border"
//                 >
//                   <span className="font-bold">{selectedCurrency.code}</span>
//                   <IoChevronForward className="size-4 text-secondary rotate-90" />
//                 </button>
//               </div>
//             </div>

//             {/* Receive Section */}
//             <div className="mb-6">
//               <label className="form-label">Receive</label>
//               <div className="relative group">
//                 <input
//                   type="text"
//                   value={receiveAmount}
//                   readOnly
//                   className="form-input pr-24 text-2xl font-bold"
//                 />
//                 <div className="absolute right-2 top-1.5 flex items-center gap-2 p-1.5 px-3 border-l border-border">
//                   <div className="size-6 rounded-full bg-trading-up flex items-center justify-center text-[10px] font-bold text-black">
//                     T
//                   </div>
//                   <span className="font-bold">USDT</span>
//                   <IoChevronForward className="size-4 text-secondary rotate-90" />
//                 </div>
//               </div>
//             </div>

//             {/* Deposit To */}
//             <div className="mb-8">
//               <div className="flex justify-between items-center bg-[#2B3139]/50 rounded-xl p-4">
//                 <div className="flex items-center gap-2 text-gray-400 text-sm">
//                   <span>Deposit To</span>
//                   <IoInformationCircleOutline className="size-4" />
//                 </div>
//                 <button className="flex items-center gap-1 text-sm font-medium">
//                   <span className="text-gray-300">Funding</span>
//                   <IoChevronForward className="size-4 text-gray-500" />
//                 </button>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="mb-8">
//               <label className="text-gray-400 text-sm block mb-3">
//                 Payment Method
//               </label>
//               <div
//                 onClick={() => setView("selectPayment")}
//                 className="bg-[#1E2329] border border-[#2B3139] rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:borderbrand-green transition-all"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="size-10 bg-[#2B3139] rounded-xl flex items-center justify-center p-2">
//                     <img
//                       src="https://cryptologos.cc/logos/alchemy-pay-ach-logo.svg"
//                       className="w-full"
//                       alt="Alchemy"
//                     />
//                   </div>
//                   <div>
//                     <div className="font-bold text-sm">Alchemy</div>
//                     <div className="text-xs text-gray-500">
//                       Visa, MasterCard, Apple pay, Google Pay
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-ticker text-gray-400 font-bold">
//                     1 USDT ≈ 1.4095 USD
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="flex items-start gap-3 mb-8">
//               <div
//                 onClick={() => setAgreed(!agreed)}
//                 className={`mt-1 size-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${agreed ? "bgbrand-green borderbrand-green" : "border-border hover:borderbrand-green"}`}
//               >
//                 {agreed && <FaCheck className="text-black size-2.5" />}
//               </div>
//               <p className="text-xs text-[#848E9C] leading-relaxed">
//                 By proceeding, you agree to the{" "}
//                 <span className="text-gray-300 hover:textbrand-green cursor-pointer">
//                   Terms & Conditions
//                 </span>{" "}
//                 and{" "}
//                 <span className="text-gray-300 hover:textbrand-green cursor-pointer">
//                   Privacy Notice
//                 </span>
//               </p>
//             </div>

//             {/* Action Button */}
//             <button className="w-full btn-primary text-lg">
//               Log In/Sign Up
//             </button>
//           </div>
//         </div>

//         {/* How to Buy Crypto Section */}
//         <div className="max-w-[1200px] mx-auto mt-24 mb-24">
//           <h2 className="text-2xl md:text-3xl font-bold text-left mb-12">
//             How to Buy Crypto?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Enter Amount & Select Payment",
//                 desc: "Enter the desired amount, choose a payment method, and select/bind your payment account or card on BitZup",
//               },
//               {
//                 title: "Confirm Order",
//                 desc: "Confirm your transaction details, including the trading pair, amount, fees, and any additional instructions.",
//               },
//               {
//                 title: "Receive Your Crypto",
//                 desc: "Once the payment is processed, the purchased crypto will be credited to your Funding Account.",
//               },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 className="card p-8 text-left hover:bg-surface-2/50 transition-all group"
//               >
//                 <div className="size-12 rounded-full bg-[#2B3139] mb-6 group-hover:bg-brand-primary/10 transition-all"></div>
//                 <h3 className="text-xl font-bold mb-4">{step.title}</h3>
//                 <p className="text-muted text-sm leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );

//   const renderCurrencySelect = () => (
//     <div className="bg-[#0B0E11] fixed inset-0 z-[1001] flex items-center justify-center p-4">
//       <div className="w-full md:w-[450px] bg-[#1E2329] rounded-[30px] border border-white/5 overflow-hidden">
//         <div className="p-6 border-b border-[#2B3139] flex items-center justify-between">
//           <button
//             onClick={() => setView("main")}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//           >
//             <IoChevronBack size={20} />
//             <span className="font-bold">Back</span>
//           </button>
//         </div>
//         <div className="p-6">
//           <div className="relative mb-6">
//             <IoSearchOutline
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full bg-[#0B0E11] rounded-xl py-3 pl-12 pr-4 outline-none border border-transparent focus:borderbrand-green transition-all"
//             />
//           </div>
//           <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scroll pr-2">
//             {currencies.map((curr) => (
//               <div
//                 key={curr.code}
//                 onClick={() => {
//                   setSelectedCurrency(curr);
//                   setView("main");
//                 }}
//                 className="flex items-center gap-4 p-4 hover:bg-[#2B3139] rounded-xl cursor-pointer transition-colors group"
//               >
//                 <div
//                   className="size-3 rounded-full"
//                   style={{ backgroundColor: curr.color }}
//                 ></div>
//                 <div className="flex flex-col">
//                   <span className="font-bold group-hover:textbrand-green transition-colors">
//                     {curr.code}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderPaymentSelect = () => (
//     <div className="bg-[#0B0E11] fixed inset-0 z-[1001] flex items-center justify-center p-4">
//       <div className="w-full md:w-[500px] bg-[#1E2329] rounded-[30px] border border-white/5 overflow-hidden">
//         <div className="p-6 border-b border-[#2B3139] flex items-center justify-between">
//           <button
//             onClick={() => setView("main")}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//           >
//             <IoChevronBack size={20} />
//             <span className="font-bold">Back</span>
//           </button>
//         </div>
//         <div className="p-6 space-y-4">
//           {paymentMethods.map((method) => (
//             <div
//               key={method.id}
//               onClick={() => {
//                 setSelectedPayment(method);
//                 setView("main");
//               }}
//               className={`p-6 rounded-2xl border cursor-pointer transition-all flex justify-between items-center group ${selectedPayment.id === method.id ? "bgbrand-green/5 borderbrand-green" : "bg-[#2B3139]/30 border-transparent hover:borderbrand-green/50"}`}
//             >
//               <div className="flex items-center gap-6">
//                 <img
//                   src={method.icon}
//                   className="h-6 w-12 object-contain"
//                   alt={method.name}
//                 />
//                 <span className="text-xl font-bold">{method.name}</span>
//               </div>
//               <span className="text-sm text-gray-400 font-medium">
//                 {method.rate}
//               </span>
//             </div>
//           ))}

//           <button
//             onClick={() => setView("main")}
//             className="w-full mt-8 btn-primary text-lg"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {view === "main" && renderMainView()}
//       {view === "selectCurrency" && renderCurrencySelect()}
//       {view === "selectPayment" && renderPaymentSelect()}
//     </>
//   );
// };
