"use client";

import { MapPin, MessageSquare, Phone } from "lucide-react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useState } from "react";

export default function ContactPage() {
  // state for form fields
  const [requirement, setRequirement] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      {/* header and navigation */}
      <Header />
      <Navigation />

      {/* breadcrumb */}
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

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-12">
            {/* contact details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

              <div className="space-y-6">
                {/* contact person */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                    👤
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">
                      Contact Person:
                    </p>
                    <p className="font-bold text-lg">Dipak Solanki (CEO)</p>
                  </div>
                </div>

                {/* address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
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

                {/* phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-2">Call Us:</p>
                    <p className="font-bold text-xl">08048976553</p>
                    <button className="mt-2 bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold py-2 px-4 rounded flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Send SMS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

              {/* requirement textarea */}
              <textarea
                placeholder="To Get Best QUOTES Describe Your Requirements in Detail Like:
- What Are You Looking For
- Features / Specifications
- Application / Usage
- Minimum Order Quantity, etc"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[150px] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
              />

              {/* phone number input */}
              <div className="flex gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-2 border rounded bg-gray-50 w-24 justify-center">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
                />
              </div>

              {/* name input */}
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
              />

              {/* submit button */}
              <button className="w-full bg-[#8b3a3a] hover:bg-[#7a2f2f] text-white font-bold py-4 rounded-lg text-lg transition-colors">
                ➜ Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
