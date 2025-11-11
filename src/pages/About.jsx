import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import React from "react";

const About = () => {
  return (
    <main className="bg-[#3d2f2a] text-white min-h-screen">
      <Header />
      <Navigation />

      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-10">
        {/* ---------- PAGE TITLE ---------- */}
        <div className="bg-[#FFA601] text-black py-2 px-3 rounded-t-md font-bold text-center sm:text-left text-base sm:text-lg">
          <h1>About Us</h1>
        </div>

        {/* ---------- INTRODUCTION ---------- */}
        <div className="bg-[#2a2220] p-4 sm:p-5 rounded-b-md border border-[#FFA601]">
          <p className="text-gray-200 mb-3 text-xs sm:text-sm md:text-base leading-relaxed">
            Established as a <strong>Proprietor firm</strong> in the year{" "}
            <strong>2019</strong>, we <strong>"DS Aqua Engineering"</strong> are
            a leading <strong>Manufacturer</strong> of a wide range of{" "}
            <strong>
              Brake Coil, Rubber Shut, Siemens MCCB, Programming Cable, Siemens
              PLC
            </strong>{" "}
            and other industrial automation products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#201917] px-3 py-2 rounded-md w-full sm:w-fit mt-2 text-center">
            <img
              src="/trustMark.png"
              alt="Trust Seal"
              className="w-14 h-14 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            <span className="text-xs sm:text-sm text-gray-200">
              <strong>Trust Seal Verified</strong>
            </span>
          </div>
        </div>

        {/* ---------- COMPANY PROFILE ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md overflow-hidden">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2 text-sm sm:text-base">
            Company Profile
          </div>

          {/* ---------- BASIC INFORMATION ---------- */}
          <div className="bg-[#2a2220] overflow-x-auto">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601] text-sm sm:text-base">
              Basic Information
            </div>
            <table className="w-full text-xs sm:text-sm min-w-[450px]">
              <tbody>
                {[
                  ["Nature of Business", "Service Provider and Others"],
                  ["Additional Business", "Factory / Manufacturing"],
                  ["Company CEO", "Gurdeep Yadav"],
                  [
                    "Registered Address",
                    "Amod Residency, Shop Number 2, Near Arya Farm House, Pandit Colony, Sector 73, Noida, Gautam Budh Nagar, 201301 ,Uttar Pradesh, India",
                  ],
                  ["Total Number of Employees", "Upto 10 People"],
                  ["GST Registration Date", "22-02-2022"],
                  ["Legal Status of Firm", "Proprietorship"],
                  ["Annual Turnover", "1.5 - 5 Cr"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-[#423836]">
                    <td className="px-3 sm:px-4 py-2 text-gray-300 font-medium w-1/3 whitespace-nowrap">
                      {label}
                    </td>
                    <td className="px-3 sm:px-4 py-2 text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------- STATUTORY PROFILE ---------- */}
          <div className="bg-[#2a2220] mt-2 overflow-x-auto">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601] text-sm sm:text-base">
              Statutory Profile
            </div>
            <table className="w-full text-xs sm:text-sm min-w-[450px]">
              <tbody>
                {[
                  [
                    "Banker",
                    "SBI, STATE BANK OF INDIA, KOTAK BANK, KOTAK MAHINDRA BANK",
                  ],
                  ["GST No.", "09CPEPS4868B1ZK"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-[#423836]">
                    <td className="px-3 sm:px-4 py-2 font-medium text-gray-300 w-1/3 whitespace-nowrap">
                      {label}
                    </td>
                    <td className="px-3 sm:px-4 py-2 text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------- PACKAGING & PAYMENT ---------- */}
          <div className="bg-[#2a2220] mt-2 overflow-x-auto">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601] text-sm sm:text-base">
              Packaging / Payment and Shipment Details
            </div>
            <table className="w-full text-xs sm:text-sm min-w-[450px]">
              <tbody>
                {[
                  [
                    "Payment Mode",
                    "Cash, Credit Card, Cheque, Bank Transfer, Online",
                  ],
                  ["Shipment Mode", "By Road"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-[#423836]">
                    <td className="px-3 sm:px-4 py-2 font-medium text-gray-300 w-1/3 whitespace-nowrap">
                      {label}
                    </td>
                    <td className="px-3 sm:px-4 py-2 text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- COMPANY ALBUM ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2 text-sm sm:text-base">
            Company Album
          </div>
          <div className="bg-[#2a2220] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 sm:p-4">
            {[
              {
                id: 1,
                name: "Siemens Programming Cable",
                image: "/siemens-programming-cable.jpg",
              },
              { id: 2, name: "Siemens 6es7972", image: "/siemens-6es7972.jpg" },
              {
                id: 3,
                name: "Bge Y20-A1-174-3",
                image: "/industrial-connector.jpg",
              },
              {
                id: 4,
                name: "Siemens PLC S7 300",
                image: "/siemens-plc-s7-300.jpg",
              },
              {
                id: 5,
                name: "Programming cable USB AC362",
                image: "/usb-programming-cable.jpg",
              },
              {
                id: 6,
                name: "Bge 1.5 Sew Eurodrive Rectifier",
                image: "/rectifier-module.jpg",
              },
            ].map((album, idx) => (
              <div
                key={idx}
                className="border border-[#FFA601] rounded-md overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={album.image || "/placeholder.svg"}
                  alt={album.name}
                  className="h-36 sm:h-40 w-full object-cover"
                />
                <div className="p-2 bg-[#1e1816] text-center text-xs sm:text-sm font-semibold">
                  {album.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- ABOUT COMPANY SECTION ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2 text-sm sm:text-base">
            About Company
          </div>
          <div className="bg-[#2a2220] p-4 sm:p-5 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            <p className="mb-2">
              Established in year <strong>2019</strong>,{" "}
              <strong>DS Aqua Engineering</strong> is the leading Manufacturer
              Trader of{" "}
              <strong>
                Programming Cable, Siemens PLC, Bulker Unloading System, Storage
                Silo
              </strong>{" "}
              and more.
            </p>
            <p>
              The range of products offered by us is of premium quality that
              boasts of client's confidence. We ensure that each and every
              finished product passes through stringent quality inspection
              processes, ensuring flawless delivery at our client's end.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
