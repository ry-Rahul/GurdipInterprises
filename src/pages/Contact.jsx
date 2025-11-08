"use client";

import { MapPin, MessageSquare, Phone } from "lucide-react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {
  // form states
  const [requirement, setRequirement] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!mobile.trim() || !name.trim() || !requirement.trim()) {
      alert("⚠️ Please fill all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      // Initialize EmailJS (if not globally initialized)
      emailjs.init("JUowiqP2W8P156o5Z"); // Replace with your EmailJS Public Key

      await emailjs.send(
        "service_0ypd3or", // Your Service ID
        "template_1zf326r", // Your Template ID
        {
          to_name: "DS Aqua Engineering",
          from_name: name,
          from_number: mobile,
          message: `📩 New Contact Inquiry from Website:\n\n👤 Name: ${name}\n📱 Mobile: ${mobile}\n📝 Requirement:\n${requirement}`,
        }
      );

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
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      {/* Header + Navigation */}
      <Header />
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-[#2a1f1c] py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f5c842]">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            » Contact Us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#EA4E02]">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Contact Person */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">
                      Contact Person:
                    </p>
                    <p className="font-bold text-lg">Gurdip Yadav (CEO)</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-semibold text-gray-600">Address:</p>
                      <button className="text-blue-600 underline hover:text-blue-800 font-medium">
                        Get Direction
                      </button>
                    </div>
                    <p className="font-bold">Gurdip Enterprise</p>
                    <p className="text-gray-700 leading-relaxed">
                      Ground Floor, Block No-E, Shop No-4,
                      <br />
                      Sumel Business Park 7, Near Soni Ni Chali, Rakhiyal,
                      <br />
                      Ahmedabad - 380023,
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-2">Call Us:</p>
                    <p className="font-bold text-xl text-[#1B9A83]">
                      +91 98115 47246
                    </p>
                    <button className="mt-2 bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold py-2 px-4 rounded flex items-center gap-2 transition">
                      <MessageSquare className="w-4 h-4" />
                      Send SMS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#EA4E02]">
                Contact Us
              </h2>

              {/* Requirement Textarea */}
              <textarea
                placeholder="Describe your requirements in detail, like:
- What are you looking for?
- Features / Specifications
- Application / Usage
- Minimum Order Quantity, etc."
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[150px] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842] placeholder:text-gray-400"
              />

              {/* Mobile Number */}
              <div className="flex gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-2 border rounded bg-gray-50 w-24 justify-center">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-sm font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842] placeholder:text-gray-400"
                />
              </div>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842] placeholder:text-gray-400"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 rounded-lg text-lg font-bold transition-all ${
                  loading
                    ? "bg-gray-400 cursor-wait"
                    : "bg-[#1B9A83] hover:bg-[#17846F] text-white"
                }`}
              >
                {loading ? "Sending..." : "➜ Contact Now"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
