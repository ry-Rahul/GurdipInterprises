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
    // Validation: Phone number required
    if (!mobile.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    setError("");

    setLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS Public Key

      await emailjs.send(
        "service_0ypd3or", // Replace with your EmailJS Service ID
        "template_1zf326r", // Replace with your EmailJS Template ID
        {
          to_name: "DS Aqua Engineering",
          from_name: name || "N/A",
          from_number: mobile,
          message: `📩 New Inquiry from Website:\n\n👤 Name: ${
            name || "N/A"
          }\n📱 Mobile: ${mobile}\n📝 Requirement:\n${
            requirement || "Not provided."
          }`,
        }
      );

      alert(
        "✅ Your inquiry has been sent! DS Aqua Engineering will contact you soon."
      );

      // Reset fields
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
    // 🌿 Main Section
    <section className="bg-[#3d2f2a] py-12">
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6">
        {/* White Box */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Tell Us What Are You Looking For?
          </h2>

          {/* ---- Name Field ---- */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c842] transition"
            />
          </div>

          {/* ---- Mobile Field ---- */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center border rounded-md overflow-hidden transition ${
                error ? "border-red-500" : "border-gray-300"
              } focus-within:ring-2 focus-within:ring-[#f5c842]`}
            >
              <div className="px-3 py-2 bg-gray-100 flex items-center gap-1 border-r border-gray-200">
                <span>🇮🇳</span>
                <span className="text-sm font-medium">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 p-3 outline-none text-base text-gray-700"
              />
            </div>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          </div>

          {/* ---- Requirement Field ---- */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Requirement
            </label>
            <textarea
              placeholder="Describe what you are looking for (product, quantity, features, etc.)"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="w-full border border-gray-300 rounded-md min-h-32 p-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c842] resize-none transition"
            ></textarea>
          </div>

          {/* ---- Submit Button ---- */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`flex items-center gap-2 px-10 py-3 rounded-md font-bold text-black text-lg shadow-sm transition ${
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
