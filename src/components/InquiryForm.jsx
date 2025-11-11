import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function InquiryForm() {
  // 🧠 Form States
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🚀 Handle EmailJS Submission
  const handleSubmit = async () => {
    if (!mobile.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS Public Key

      await emailjs.send("service_0ypd3or", "template_1zf326r", {
        to_name: "DS Aqua Engineering",
        from_name: name || "N/A",
        from_number: mobile,
        message: `📩 New Inquiry from Website:\n\n👤 Name: ${
          name || "N/A"
        }\n📱 Mobile: ${mobile}\n📝 Requirement:\n${
          requirement || "Not provided."
        }`,
      });

      alert(
        "✅ Your inquiry has been sent! DS Aqua Engineering will contact you soon."
      );

      setRequirement("");
      setMobile("");
      setName("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // 🌿 Section Wrapper
    <section className="bg-[#3d2f2a] py-8 sm:py-12">
      {/* ✅ Centered container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* ✅ White Card */}
        <div className="bg-white rounded-lg p-5 sm:p-8 shadow-lg border border-gray-100">
          {/* Header */}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            Tell Us What You Are Looking For?
          </h2>

          {/* 🧾 Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 sm:p-3.5 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c842] transition"
            />
          </div>

          {/* 📱 Mobile Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center border rounded-md overflow-hidden transition ${
                error ? "border-red-500" : "border-gray-300"
              } focus-within:ring-2 focus-within:ring-[#f5c842]`}
            >
              {/* Country Code */}
              <div className="px-3 py-2 bg-gray-100 flex items-center gap-1 border-r border-gray-200 text-sm sm:text-base">
                <span>🇮🇳</span>
                <span className="font-medium">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 p-2.5 sm:p-3 outline-none text-sm sm:text-base text-gray-700"
              />
            </div>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          </div>

          {/* 📝 Requirement Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Requirement
            </label>
            <textarea
              placeholder="Describe your product requirement, quantity, or features..."
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 sm:p-3.5 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c842] resize-none min-h-[100px] sm:min-h-[120px] transition"
            />
          </div>

          {/* 🚀 Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-8 sm:px-10 py-2.5 sm:py-3 rounded-md font-bold text-black text-sm sm:text-lg shadow-sm transition-all ${
                loading
                  ? "bg-gray-300 cursor-wait"
                  : "bg-[#f5c842] hover:bg-[#e5b832]"
              }`}
            >
              <span>➤</span>
              {loading ? "Sending..." : "Send it Now!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
