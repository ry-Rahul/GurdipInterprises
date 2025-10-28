import { Phone, Search } from "lucide-react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useState } from "react";

export default function Product() {
  // State management for form fields
  const [requirement, setRequirement] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      {/* Header and Navigation */}
      <Header />
      <Navigation />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar Contact Form */}
          <div className="bg-white rounded-lg p-6 h-fit sticky top-4 shadow">
            <h3 className="text-xl font-bold mb-4 bg-[#4a7c9e] text-white px-4 py-2 -mx-6 -mt-6 rounded-t-lg">
              Contact Us <span className="text-[#f5c842]">Quickly</span>
            </h3>

            {/* Textarea */}
            <textarea
              placeholder="Describe your buying requirements in detail:"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#f5c842] text-sm"
            />

            {/* Phone input */}
            <div className="flex gap-2 mb-4">
              <div className="flex items-center gap-2 px-3 py-2 border rounded bg-gray-50 w-24 justify-center">
                <span className="text-xl">🇮🇳</span>
                <span className="text-sm">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your number:"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f5c842] text-sm"
              />
            </div>

            {/* Name input */}
            <input
              type="text"
              placeholder="Enter your name:"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#f5c842] text-sm"
            />

            {/* Submit button */}
            <button className="w-full bg-[#e85d2a] hover:bg-[#d84d1a] text-white font-bold py-3 rounded-lg transition-colors">
              Contact Now
            </button>
          </div>

          {/* Main Product Section */}
          <div className="space-y-6">
            {/* Intro Section */}
            <div className="bg-black text-white p-6 rounded-lg">
              <p className="text-sm mb-3 leading-relaxed">
                WE ARE TRADERS IN{" "}
                <span className="font-bold">SIEMENS PLC PROGRAMMING CABLE</span>
                ,{" "}
                <span className="font-bold">
                  SIEMENS PLC AND ANALOGE MODULE
                </span>
                ,{" "}
                <span className="font-bold">
                  EXPANSION MODULE INPUT MODULE OUTPUT MODULE
                </span>{" "}
                AND OTHER ACCESSORIES IN PAN INDIA LOCATION
              </p>
              <button className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-5 py-2 rounded-lg transition-colors">
                Yes! I am Interested
              </button>
            </div>

            {/* Product Details Card */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Product Title and CTA */}
              <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    Siemens Logo Programming Cable
                  </h1>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Approx.</span>
                    <span className="text-3xl font-bold">Rs 1,650</span>
                    <span className="text-gray-600">/ Piece</span>
                    <button className="ml-4 border border-gray-400 rounded-lg px-3 py-1 text-sm hover:bg-gray-100 transition">
                      Get Latest Price
                    </button>
                  </div>
                </div>

                {/* Request Callback */}
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition">
                  <Phone className="w-4 h-4" />
                  REQUEST CALLBACK
                </button>
              </div>

              {/* Product Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-gray-50 relative group">
                    <div className="aspect-square bg-white flex items-center justify-center">
                      <img
                        src="/siemens-logo-usb-programming-cable.jpg"
                        alt="Siemens Logo Programming Cable"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <button className="absolute top-6 right-6 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-20 h-20 border rounded bg-gray-50 flex items-center justify-center"
                      >
                        <img
                          src={`/cable-view-.jpg?height=80&width=80&query=Cable view ${i}`}
                          alt={`View ${i}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Get Quote Button */}
                  <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition">
                    Get Best Quote
                  </button>
                </div>

                {/* Product Specifications */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Product Details:</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ["Minimum Order Quantity", "1 Piece"],
                        ["Cable Type", "USB"],
                        ["Color", "Black"],
                        ["Material", "PVC"],
                        ["Model Name/Number", "logo cable"],
                        ["Usage/Application", "logo plc"],
                        ["Length", "2 mtr"],
                        ["Voltage", "230"],
                        ["Power", "230V"],
                        ["Packaging Type", "standard"],
                        ["Quantity Per Pack", "1 nos"],
                        ["I Deal In", "New Only"],
                      ].map(([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="py-2 pr-4 font-medium text-gray-700">
                            {key}
                          </td>
                          <td className="py-2 font-semibold">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Established as a <span className="font-bold">Proprietor</span>{" "}
                  firm in the year <span className="font-bold">2011</span>, we{" "}
                  <span className="font-bold">Gurdip Enterprise</span> are a
                  leading <span className="font-bold">Manufacturer</span> of a
                  wide range of{" "}
                  <span className="font-bold">
                    Brake Coil, Rubber Shut, Siemens MCCB
                  </span>
                  , etc.
                </p>
                <h4 className="font-bold mt-4 mb-2">Additional Information:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Item Code: USB-LOGO</li>
                  <li>• Production Capacity: 100</li>
                  <li>• Delivery Time: 1 Week</li>
                  <li>• Packaging Details: Standard Packing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
