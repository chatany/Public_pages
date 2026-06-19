import { IoCheckmark, IoClose } from "react-icons/io5";

const VerifyPopup = ({
  isOpen,
  type = "error", // success | error
  url,
  onClose,
  onConfirm,
  onReport,
  category,
}) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center bg-bg/70 backdrop-blur-sm">
      <div className="w-[420px] rounded-2xl border border-border bg-surface p-8 text-white shadow-2xl">
        {/* ICON */}
        <div className="flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${
              isSuccess ? "bg-green-500/20" : "bg-red-500/20"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                isSuccess ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {isSuccess ? (
                <IoCheckmark className="text-xl text-white" />
              ) : (
                <IoClose className="text-xl text-white" />
              )}
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="mt-6 text-center text-lg font-semibold">
          {isSuccess
            ? "Bitzup official channel"
            : "Not a Bitzup official channel"}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-center text-sm text-gray-400">
          The URL you queried under the{" "}
          <span className={isSuccess ? "text-green-400" : "text-red-400"}>
            {category}
          </span>{" "}
          category{" "}
          {isSuccess
            ? "has been verified as an official Bitzup channel:"
            : "could not be verified as an official Bitzup channel:"}
        </p>

        {/* URL BOX */}
        <div className="mt-4 rounded-lg bg-surface px-4 py-3 text-center text-sm text-gray-200 text-left">
          {url}
        </div>

        {/* INFO TEXT */}
        <p className="mt-4 text-sm text-gray-400 text-left">
          {isSuccess
            ? "The verification result is only valid for this category. Please make sure you've selected the correct category to avoid phishing risks."
            : "Please double-check that you've selected the correct category, as an incorrect selection may affect the verification results."}
        </p>

        {/* SECURITY ALERT */}
        <div className="mt-4 rounded-lg bg-surface p-4 text-left">
          <p className="font-semibold text-sm mb-2">Security alerts</p>
          <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
            <li>
              Contact customer service if you are still unable to confirm.
            </li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-3">
          {isSuccess ? (
            <button
              onClick={onClose}
              className="w-full rounded-lg bg-gray-200 py-3 font-medium text-black hover:bg-gray-300"
            >
              OK
            </button>
          ) : (
            <>
              {/* <button
                onClick={onReport}
                className="w-full rounded-lg bg-red-500 py-3 font-medium text-white hover:bg-red-600"
              >
                Report
              </button> */}

              <button
                onClick={onConfirm || onClose}
                className="cursor-pointer w-full rounded-lg bg-brand-green py-3 font-medium text-black hover:bgbrand-green/70"
              >
                Confirm
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyPopup;
