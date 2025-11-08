import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="bg-[#3d2f2a] text-white min-h-screen">
      <Header />
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 py-6">
        {/* ---------- PAGE TITLE ---------- */}
        <div className="bg-[#FFA601] text-black py-2 px-3 rounded-t-md font-bold">
          <h1>About Us</h1>
        </div>

        {/* ---------- INTRODUCTION ---------- */}
        <div className="bg-[#2a2220] p-5 rounded-b-md border border-[#FFA601]">
          <p className="text-gray-200 mb-3 text-sm leading-relaxed">
            Established as a <strong>Proprietor firm</strong> in the year{" "}
            <strong>2011</strong>, we{" "}
            <strong>"JIA ENTERPRISE"</strong> are a leading{" "}
            <strong>Manufacturer</strong> of a wide range of{" "}
            <strong>
              Brake Coil, Rubber Shut, Siemens MCCB, Programming Cable, Siemens
              PLC
            </strong>{" "}
            and other industrial automation products.
          </p>
          <div className="flex items-center gap-2 bg-[#201917] px-3 py-2 rounded-md w-fit mt-2">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/3/CE/FX/SO/118260807/indiamart-trustseal-250x250.jpg"
              alt="Trust Seal"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm text-gray-200">
              <strong>IndiaMART Trust Seal Verified</strong>
            </span>
          </div>
        </div>

        {/* ---------- COMPANY PROFILE ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md overflow-hidden">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2">
            Company Profile
          </div>

          {/* ---------- BASIC INFORMATION ---------- */}
          <div className="bg-[#2a2220]">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601]">
              Basic Information
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Nature of Business", "Service Provider and Others"],
                  ["Additional Business", "Factory / Manufacturing"],
                  ["Company CEO", "Dipak Solanki"],
                  [
                    "Registered Address",
                    "Ground Floor, Block No-E, Shop No-4, Sumel Business Park 7, Near Soni Ni Chali, Rakhiyal, Ahmedabad - 380023, Gujarat, India",
                  ],
                  ["Total Number of Employees", "Upto 10 People"],
                  ["GST Registration Date", "15-07-2020"],
                  ["Legal Status of Firm", "Proprietorship"],
                  ["Annual Turnover", "1.5 - 5 Cr"],
                  ["GST Partner Name", "Dipak Laxmanbhai Solanki"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-[#423836]">
                    <td className="px-4 py-2 text-gray-300 font-medium w-1/3">
                      {label}
                    </td>
                    <td className="px-4 py-2 text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------- STATUTORY PROFILE ---------- */}
          <div className="bg-[#2a2220] mt-2">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601]">
              Statutory Profile
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-t border-[#423836]">
                  <td className="px-4 py-2 font-medium w-1/3 text-gray-300">
                    Import Export Code (IEC)
                  </td>
                  <td className="px-4 py-2 text-gray-200">BITPS0834A</td>
                </tr>
                <tr className="border-t border-[#423836]">
                  <td className="px-4 py-2 font-medium text-gray-300">Banker</td>
                  <td className="px-4 py-2 text-gray-200">
                    SBI, STATE BANK OF INDIA, KOTAK BANK, KOTAK MAHINDRA BANK
                  </td>
                </tr>
                <tr className="border-t border-[#423836]">
                  <td className="px-4 py-2 font-medium text-gray-300">GST No.</td>
                  <td className="px-4 py-2 text-gray-200">
                    24BITPS0834A1ZC
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ---------- PACKAGING & PAYMENT ---------- */}
          <div className="bg-[#2a2220] mt-2">
            <div className="border-b border-[#FFA601] px-4 py-3 font-semibold text-[#FFA601]">
              Packaging / Payment and Shipment Details
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-t border-[#423836]">
                  <td className="px-4 py-2 font-medium w-1/3 text-gray-300">
                    Payment Mode
                  </td>
                  <td className="px-4 py-2 text-gray-200">
                    Cash, Credit Card, Cheque, Bank Transfer, Online
                  </td>
                </tr>
                <tr className="border-t border-[#423836]">
                  <td className="px-4 py-2 font-medium text-gray-300">
                    Shipment Mode
                  </td>
                  <td className="px-4 py-2 text-gray-200">By Road</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- COMPANY ALBUM ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2">
            Company Album
          </div>
          <div className="bg-[#2a2220] grid md:grid-cols-3 gap-3 p-4">
            {[
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2022/3/KC/BC/BZ/118260807/infrastructure.jpg",
                title: "Infrastructure & Team",
              },
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZD/HK/SM/118260807/manufacturing-unit.jpg",
                title: "Manufacturing Unit",
              },
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2022/3/DK/PP/JM/118260807/infrastructural-setup.jpg",
                title: "Infrastructural Set-Up",
              },
            ].map((album, idx) => (
              <div
                key={idx}
                className="border border-[#FFA601] rounded-md overflow-hidden"
              >
                <img
                  src={album.img}
                  alt={album.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-2 bg-[#1e1816] text-center text-sm font-semibold">
                  {album.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- ABOUT COMPANY SECTION ---------- */}
        <div className="mt-6 border border-[#FFA601] rounded-md">
          <div className="bg-[#FFA601] text-black font-bold px-3 py-2">
            About Company
          </div>
          <div className="bg-[#2a2220] p-5 text-sm text-gray-200 leading-relaxed">
            <p className="mb-2">
              Established in year <strong>2020</strong>,{" "}
              <strong>JIA ENTERPRISE</strong> is the leading Manufacturer Trader
              of <strong>Programming Cable, Siemens PLC, Bulker Unloading
              System, Storage Silo</strong> and more.
            </p>
            <p>
              The range of products offered by us is of premium quality that
              boasts of client’s confidence. We ensure that each and every
              finished product passes through stringent quality inspection
              processes, ensuring flawless delivery at our client’s end.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
