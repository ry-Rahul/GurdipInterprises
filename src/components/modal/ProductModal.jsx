import { X } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProductModal({ isOpen, onClose, product }) {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = async () => {
    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    setLoading(true);

    try {
      // 🧠 Initialize EmailJS (optional if already in index.html)
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS public key

      await emailjs.send(
        "service_0ypd3or", // Replace with your EmailJS Service ID
        "template_1zf326r", // Replace with your EmailJS Template ID
        {
          to_name: "DS Aqua Engineering", // {{to_name}} in template
          from_name: mobile, // {{from_name}} → Customer’s mobile number
          message: `Customer is interested in "${product.name}".\n\nApprox Price: ${
            product.price || "N/A"
          }\n\nProduct details:\n${
            product.details?.description || "No description provided."
          }`,
        }
      );

      alert("✅ Inquiry sent successfully! DS Aqua Engineering will contact you soon.");
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
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg relative flex flex-col md:flex-row overflow-hidden">
        {/* -------- Close Button -------- */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* -------- Left: Product Details -------- */}
        <div className="md:w-1/2 border-r border-gray-200 p-4 flex flex-col items-center text-center">
          <img
            src={product.details?.image?.[0]}
            alt={product.name}
            className="max-h-56 object-contain mb-4"
          />
          <h2 className="text-lg font-bold mb-1">{product.name}</h2>
          {product.price && (
            <p className="text-gray-700 font-semibold mb-2">
              Rs {product.price} / Piece
            </p>
          )}
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Sold By:</span>{" "}
            DS Aqua Engineering
          </p>

          <div className="text-left mt-3 text-sm text-gray-700 space-y-1 w-full">
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

        {/* -------- Right: Contact Form -------- */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">
            Connect with{" "}
            <span className="font-bold text-[#EA4E02]">
              DS Aqua Engineering
            </span>{" "}
            and get details on your mobile quickly
          </h3>

          <label className="text-sm font-semibold mb-2">Mobile Number</label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
            <div className="px-3 py-2 bg-gray-100 flex items-center gap-1">
              <span>🇮🇳</span>
              <span className="text-sm">+91</span>
            </div>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile"
              className="flex-1 p-2 outline-none text-sm"
            />
          </div>

          <p className="text-xs text-gray-500 mb-4">
            We will contact you on this number
          </p>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`${
              loading ? "opacity-70 cursor-wait" : ""
            } bg-[#1B9A83] hover:bg-[#17846F] text-white font-semibold py-2 rounded-md transition`}
          >
            {loading ? "Sending..." : "Submit Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
