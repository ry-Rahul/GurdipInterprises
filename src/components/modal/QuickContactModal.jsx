import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function QuickContactModal({ isOpen, onClose, product }) {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  // ✅ EmailJS Submit Function
  const handleSubmit = async () => {
    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    setLoading(true);

    try {
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS Public Key

      await emailjs.send(
        "service_0ypd3or", // Replace with your EmailJS Service ID
        "template_1zf326r", // Replace with your EmailJS Template ID
        {
          to_name: "DS Aqua Engineering",
          from_name: mobile,
          message: `Customer is interested in "${
            product.name
          }".\n\nApprox Price: ${product.price || "N/A"}\n\nProduct Details:\n${
            product.details?.description || "No description provided."
          }`,
        }
      );

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
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 z-52"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>

        {/* -------- Left: Company Info -------- */}
        <div className="md:w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-white border rounded-lg shadow-sm w-32 h-32 flex items-center justify-center mb-4">
            <img
              src="/logo.png"
              alt="DS Aqua Engineering"
              className="w-28 h-28 object-contain"
            />
          </div>
          <h2 className="font-bold text-gray-700 text-lg">
            DS Aqua Engineering
          </h2>
        </div>

        {/* -------- Right: Contact Form -------- */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4 leading-snug">
            Connect with{" "}
            <span className="text-[#17846F] font-bold">
              DS Aqua Engineering
            </span>{" "}
            and get details on your mobile quickly
          </h3>

          {/* Input Label */}
          <label className="text-sm font-semibold mb-2">Mobile Number</label>

          {/* Input Box */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4 focus-within:ring-2 focus-within:ring-[#17846F] transition">
            <div className="px-4 py-2 bg-gray-100 flex items-center gap-1 border-r border-gray-200">
              <span>🇮🇳</span>
              <span className="text-sm font-medium">+91</span>
            </div>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="flex-1 p-3 outline-none text-sm"
            />
          </div>

          {/* Info Text */}
          <p className="text-xs text-gray-500 mb-5">
            We will contact you on this number
          </p>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold text-base transition ${
              loading
                ? "bg-gray-400 cursor-wait"
                : "bg-[#17846F] hover:bg-[#147560]"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
