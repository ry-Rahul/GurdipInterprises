import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ProductModal({ isOpen, onClose, product }) {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  // ✅ Handle form submission
  const handleSubmit = async () => {
    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    setLoading(true);
    try {
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS public key

      await emailjs.send("service_0ypd3or", "template_1zf326r", {
        to_name: "DS Aqua Engineering",
        from_name: mobile,
        message: `Customer is interested in "${
          product.name
        }".\n\nApprox Price: ${product.price || "N/A"}\n\nProduct details:\n${
          product.details?.description || "No description provided."
        }`,
      });

      alert(
        "✅ Inquiry sent successfully! DS Aqua Engineering will contact you soon."
      );
      setMobile("");
      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ Overlay
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* ✅ Modal Box */}
      <div
        className="bg-white w-full max-w-4xl rounded-lg shadow-lg relative flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        >
          <X size={22} />
        </button>

        {/* ✅ LEFT: Product Info */}
        <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 p-4 sm:p-6 flex flex-col items-center text-center">
          <img
            src={product.image?.[0] || "/placeholder.svg"}
            alt={product.name}
            className="max-h-48 sm:max-h-56 object-contain mb-4"
          />
          <h2 className="text-base sm:text-lg font-bold mb-1 text-gray-900">
            {product.name}
          </h2>

          {product.price && (
            <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">
              Rs {product.price} / Piece
            </p>
          )}

          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-semibold">Sold By:</span> DS Aqua Engineering
          </p>

          <div className="text-left mt-3 text-xs sm:text-sm text-gray-700 space-y-1 w-full">
            {Object.entries(product.details || {})
              .filter(([key]) => !["image", "description"].includes(key))
              .slice(0, 5)
              .map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </span>{" "}
                  {value}
                </p>
              ))}
          </div>
        </div>

        {/* ✅ RIGHT: Contact Form */}
        <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
          <h3 className="text-sm sm:text-lg font-semibold mb-3 sm:mb-4 text-center md:text-left">
            Connect with{" "}
            <span className="font-bold text-[#EA4E02]">
              DS Aqua Engineering
            </span>{" "}
            and get details on your mobile quickly
          </h3>

          {/* Mobile Input */}
          <label className="text-xs sm:text-sm font-semibold mb-2">
            Mobile Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-2 sm:mb-3">
            <div className="px-2 sm:px-3 py-2 bg-gray-100 flex items-center gap-1">
              <span>🇮🇳</span>
              <span className="text-xs sm:text-sm">+91</span>
            </div>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile"
              className="flex-1 p-2 sm:p-2.5 outline-none text-xs sm:text-sm"
            />
          </div>

          <p className="text-xs text-gray-500 mb-3 sm:mb-4 text-center md:text-left">
            We will contact you on this number
          </p>

          {/* ✅ Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base transition ${
              loading
                ? "bg-gray-300 cursor-wait"
                : "bg-[#1B9A83] hover:bg-[#17846F] text-white"
            }`}
          >
            {loading ? "Sending..." : "Submit Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
