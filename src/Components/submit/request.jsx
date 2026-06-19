import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { FaAngleDown, FaSortDown } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Navbar from "../../Navbar";
import { Footer } from "../../foooter";

export default function SubmitRequestForm() {
  const [open, setOpen] = useState(false);
  const dark = true;
  const [select, setSelect] = useState("");
  const popupRef = useRef(null);
  const [form, setForm] = useState({
    email: "",
    subject: "",
    description: "",
    file: null,
  });
  const [form1, setForm1] = useState({
    requestType: "Deposit not credited",
    email: "",
    subject: "",
    description: "",
    uid: "",
    option: "",
    file: null,
  });
  const [form2, setForm2] = useState({
    requestType: "Deposit not credited",
    email: "",
    subject: "",
    description: "",
    uid: "",
    option: "",
    coin: "",
    network: "",
    txid: "",
    file: null,
  });
  const [form3, setForm3] = useState({
    requestType: "Deposit not credited",
    email: "",
    subject: "",
    description: "",
    uid: "",
    option: "",
    coin: "",
    network: "",
    txid: "",
    file: null,
  });
  const [form4, setForm4] = useState({
    requestType: "Deposit not credited",
    email: "",
    subject: "",
    description: "",
    uid: "",
    option: "",
    coin: "",
    network: "",
    txid: "",
    file: null,
  });
  const methedsArr = [
    "Trading",
    "Account",
    "Referral",
    "Transaction History",
    "Deposits & Withdrawals",
  ];
  const handleChange = (key, value) => {
    if (methedsArr[0] === select) {
      setForm((prev) => ({ ...prev, [key]: value }));
    } else if (methedsArr[1] === select) {
      setForm1((prev) => ({ ...prev, [key]: value }));
    } else if (methedsArr[2] === select) {
      setForm2((prev) => ({ ...prev, [key]: value }));
    } else if (methedsArr[3] === select) {
      setForm3((prev) => ({ ...prev, [key]: value }));
    } else if (methedsArr[4] === select) {
      setForm4((prev) => ({ ...prev, [key]: value }));
    }
  };

  const inputClass =
    "w-full bg-transparent border border-white rounded-lg px-4 py-3 outline-none focus:borderbrand-green text-sm";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Submit a Request — BitZup Support</title>
        <meta
          name="description"
          content="Contact BitZup support. Submit a request for help with your account, trading, deposits, withdrawals or verification — our team typically replies within 24 hours."
        />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <div className="flex w-full justify-between md:px-10 px-3 py-12 md:ml-15 max-md:flex-col">
          <div className="text-base textbrand-green mb-4 text-left">
            <span className=" cursor-pointer">Help Center</span> › Submit a
            request
          </div>
          {/* <div className="relative w-[280px]">
          <IoSearchOutline className="absolute left-3 top-3 text-gray-400" />
          <input
            placeholder="Search"
            className="w-full bg-transparent border borderbrand-green rounded-full pl-10 pr-4 py-2 text-sm outline-none"
          />
        </div> */}
        </div>
        {/* BODY */}
        <div className="md:w-[800px] w-full md:px-10 px-3 md:ml-15 md:py-8 py-4">
          <h1 className="md:text-3xl text-2xl font-bold text-left mb-3">
            Submit a request
          </h1>
          <p className="text-sm text-gray-400 text-left mb-8">
            Tell us what's going on and our support team will get back to you — usually within 24 hours.
          </p>
          <Field
            label="Category"
            helper="Pick the topic that fits best (Account, Deposits & withdrawals, Trading, Verification, Security, Other) so we route you to the right team."
          ></Field>
          <div
            className="relative  cursor-pointer focus:borderbrand-green mb-6"
            ref={popupRef}
            onClick={() => setOpen(!open)}
          >
            <div className={inputClass}>
              <div className="w-full flex justify-between h-full  items-center">
                <div className="text-sm font-normal capitalize">
                  {select ? (
                    <div className="flex gap-3 items-center">{select} </div>
                  ) : (
                    "Select Type"
                  )}
                </div>

                <FaAngleDown
                  className={`size-3.5 ${open ? "transition-transform rotate-180" : ""}`}
                />
              </div>
            </div>

            {open && (
              <div
                className={`absolute z-dropdown mt-2 w-full shadow-xl  ${
                  dark
                    ? "bg-surface text-primary"
                    : "bg-white text-secondary"
                } rounded-xl  max-h-[300px] custom-scroll overflow-y-auto`}
              >
                <ul>
                  {methedsArr.length > 0 ? (
                    methedsArr.map((coin, ind) => (
                      <li
                        key={ind}
                        className={`flex ${
                          dark ? "" : "hover:bg-primary"
                        } items-center justify-between w-full p-[16px_12px_16px_12px] rounded-lg cursor-pointer`}
                        onClick={() => {
                          setSelect(coin);
                          setOpen(!open);
                        }}
                      >
                        <div className="flex items-center justify-between w-full gap-2">
                          <div className="flex gap-2 items-center">
                            <span className="font-medium">{coin}</span>
                            {/* <span className="text-gray-500 text-sm">{coin.coin}</span> */}
                          </div>
                          {select === coin && (
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

          {select === methedsArr[0] && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Field
                label="Email"
                helper="Use the email linked to your BitZup account so we can verify and reply."
              >
                <input
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" helper="One line summarizing the issue.">
                <input
                  className={inputClass}
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </Field>

              {/* Description */}
              <Field
                label="Description"
                helper="What happened, when, and any error messages or transaction IDs. The more detail, the faster we can help."
              >
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Field>

              <Field
                label="Attachments"
                helper="Add screenshots if they help (PNG/JPG, max 10MB each). Never share your password, 2FA codes or seed phrase."
              >
                <label className="w-full border border-border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer focus:borderbrand-green transition">
                  {/* LEFT TEXT */}
                  <span
                    className={`${form.file ? "text-white" : "textbrand-green"}`}
                  >
                    {form.file ? form.file.name : "Add file or drop files here"}
                  </span>

                  {/* REMOVE BUTTON (optional) */}
                  {form.file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleChange("file", null);
                      }}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleChange("file", e.target.files[0])}
                  />
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bgbrand-green text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit request
              </button>
            </form>
          )}
          {select === methedsArr[1] && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Field
                label="Email"
                helper="Use the email linked to your BitZup account so we can verify and reply."
              >
                <input
                  className={inputClass}
                  value={form1.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" helper="One line summarizing the issue.">
                <input
                  className={inputClass}
                  value={form1.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </Field>

              {/* Description */}
              <Field
                label="Description"
                helper="What happened, when, and any error messages or transaction IDs. The more detail, the faster we can help."
              >
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  value={form1.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Field>

              {/* UID */}
              <Field label="UID" helper="Please fill in your account UID">
                <input
                  className={inputClass}
                  value={form1.uid}
                  onChange={(e) => handleChange("uid", e.target.value)}
                />
              </Field>

              {/* Optional */}
              <Field
                label="May we ask the reason for your account closure request?"
                helper="We’re sorry to see you go. Is there something we can do to change your mind? Your feedback matters — and we’d love to hear how we can make your experience better."
              >
                <textarea
                  rows={6}
                  className={inputClass}
                  value={form1.option}
                  onChange={(e) => handleChange("option", e.target.value)}
                />
              </Field>

              {/* File Upload */}
              <Field
                label="Attachments"
                helper="Add screenshots if they help (PNG/JPG, max 10MB each). Never share your password, 2FA codes or seed phrase."
              >
                <label className="w-full border border-border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer focus:borderbrand-green transition">
                  {/* LEFT TEXT */}
                  <span className={`${form1.file ? "text-white" : ""}`}>
                    {form1.file
                      ? form1.file.name
                      : "Add file or drop files here"}
                  </span>

                  {/* REMOVE BUTTON (optional) */}
                  {form1.file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleChange("file", null);
                      }}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleChange("file", e.target.files[0])}
                  />
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bgbrand-green text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit request
              </button>
            </form>
          )}
          {select === methedsArr[2] && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Field
                label="Email"
                helper="Use the email linked to your BitZup account so we can verify and reply."
              >
                <input
                  className={inputClass}
                  value={form2.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" helper="One line summarizing the issue.">
                <input
                  className={inputClass}
                  value={form2.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </Field>

              {/* Description */}
              <Field
                label="Description"
                helper="What happened, when, and any error messages or transaction IDs. The more detail, the faster we can help."
              >
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  value={form2.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Field>

              {/* UID */}
              <Field label="UID" helper="Please fill in your account UID">
                <input
                  className={inputClass}
                  value={form2.uid}
                  onChange={(e) => handleChange("uid", e.target.value)}
                />
              </Field>

              {/* Optional */}
              <Field
                label="New referral link"
                helper="Please enter the referral link or invitation code you would like to change or add (Please note that the referral relationship can only be changed once every 6 months.)"
              >
                <input
                  className={inputClass}
                  value={form2.option}
                  onChange={(e) => handleChange("option", e.target.value)}
                />
              </Field>

              {/* File Upload */}
              <Field
                label="Attachments"
                helper="Add screenshots if they help (PNG/JPG, max 10MB each). Never share your password, 2FA codes or seed phrase."
              >
                <label className="w-full border border-border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer focus:borderbrand-green transition">
                  {/* LEFT TEXT */}
                  <span
                    className={`${form2.file ? "text-white" : "textbrand-green"}`}
                  >
                    {form2.file
                      ? form2.file.name
                      : "Add file or drop files here"}
                  </span>

                  {/* REMOVE BUTTON (optional) */}
                  {form2.file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleChange("file", null);
                      }}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleChange("file", e.target.files[0])}
                  />
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bgbrand-green text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit request
              </button>
            </form>
          )}
          {select === methedsArr[3] && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Field
                label="Email"
                helper="Use the email linked to your BitZup account so we can verify and reply."
              >
                <input
                  className={inputClass}
                  value={form3.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" helper="One line summarizing the issue.">
                <input
                  className={inputClass}
                  value={form3.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </Field>

              {/* Description */}
              <Field
                label="Description"
                helper="What happened, when, and any error messages or transaction IDs. The more detail, the faster we can help."
              >
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  value={form3.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Field>

              {/* UID */}
              <Field label="UID" helper="Please fill in your account UID">
                <input
                  className={inputClass}
                  value={form3.uid}
                  onChange={(e) => handleChange("uid", e.target.value)}
                />
              </Field>

              {/* Optional */}
              <Field
                label="Time period"
                helper="Please provide the time range you wish to export"
              >
                <input
                  className={inputClass}
                  value={form3.option}
                  onChange={(e) => handleChange("option", e.target.value)}
                />
              </Field>

              {/* Coin */}
              <Field
                label="Please select the transaction history you wish to export"
              >
                <input
                  className={inputClass}
                  value={form3.coin}
                  onChange={(e) => handleChange("coin", e.target.value)}
                />
              </Field>

              {/* File Upload */}
              <Field
                label="Attachments"
                helper="Add screenshots if they help (PNG/JPG, max 10MB each). Never share your password, 2FA codes or seed phrase."
              >
                <label className="w-full border border-border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer focus:borderbrand-green transition">
                  {/* LEFT TEXT */}
                  <span
                    className={`${form3.file ? "text-white" : "textbrand-green"}`}
                  >
                    {form3.file
                      ? form3.file.name
                      : "Add file or drop files here"}
                  </span>

                  {/* REMOVE BUTTON (optional) */}
                  {form3.file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleChange("file", null);
                      }}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleChange("file", e.target.files[0])}
                  />
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bgbrand-green text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit request
              </button>
            </form>
          )}
          {select === methedsArr[4] && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Field
                label="Email"
                helper="Use the email linked to your BitZup account so we can verify and reply."
              >
                <input
                  className={inputClass}
                  value={form4.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" helper="One line summarizing the issue.">
                <input
                  className={inputClass}
                  value={form4.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </Field>

              {/* Description */}
              <Field
                label="Description"
                helper="What happened, when, and any error messages or transaction IDs. The more detail, the faster we can help."
              >
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  value={form4.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Field>

              {/* UID */}
              <Field label="UID" helper="Please fill in your account UID">
                <input
                  className={inputClass}
                  value={form4.uid}
                  onChange={(e) => handleChange("uid", e.target.value)}
                />
              </Field>

              {/* Optional */}
              <Field label="Please select the correct option (optional)">
                <input
                  className={inputClass}
                  value={form4.option}
                  onChange={(e) => handleChange("option", e.target.value)}
                />
              </Field>

              {/* Coin */}
              <Field label="Coin (currency)">
                <input
                  className={inputClass}
                  value={form4.coin}
                  onChange={(e) => handleChange("coin", e.target.value)}
                />
              </Field>

              {/* Network */}
              <Field
                label="Network (blockchain)"
                helper="Please select the correct network chain"
              >
                <input
                  className={inputClass}
                  value={form4.network}
                  onChange={(e) => handleChange("network", e.target.value)}
                />
              </Field>

              {/* TXID */}
              <Field
                label="TXID (Transaction ID)"
                helper="Please provide the TXID for this transaction"
              >
                <input
                  className={inputClass}
                  value={form4.txid}
                  onChange={(e) => handleChange("txid", e.target.value)}
                />
              </Field>

              {/* File Upload */}
              <Field
                label="Attachments"
                helper="Add screenshots if they help (PNG/JPG, max 10MB each). Never share your password, 2FA codes or seed phrase."
              >
                <label className="w-full border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer focus:borderbrand-green transition">
                  {/* LEFT TEXT */}
                  <span
                    className={`${form4.file ? "text-white" : "textbrand-green"}`}
                  >
                    {form4.file
                      ? form4.file.name
                      : "Add file or drop files here"}
                  </span>

                  {/* REMOVE BUTTON (optional) */}
                  {form4.file && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleChange("file", null);
                      }}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleChange("file", e.target.files[0])}
                  />
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bgbrand-green text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit request
              </button>
            </form>
          )}

          {/* Info Sections */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">What happens next</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You'll get a confirmation email with a ticket number, and you can track replies in your inbox or your Support dashboard. Most requests are answered within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Before you submit</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Many answers are instant in our <a href="/support" className="textbrand-green hover:underline">Support Center</a> — try a quick search first.
                {" "}
                Check <a href="/official-verification" className="textbrand-green hover:underline">Official Verification</a> before acting on any email, link or caller claiming to be BitZup.
              </p>
            </div>
        </div>
      </div>
    </div>
    <Footer isShow={false} />
    </>
  );
}

/* ---------- reusable field ---------- */

function Field({ label, children, helper }) {
  return (
    <div className="text-left w-full focus-within:border-brand-green">
      <label className="block text-sm mb-2">{label}</label>
      {children}
      {helper && <div className="text-xs text-gray-500 mt-1">{helper}</div>}
    </div>
  );
}
