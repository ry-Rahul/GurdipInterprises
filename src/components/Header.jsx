import { Mail, Phone } from "lucide-react"; // Importing icons from lucide-react

import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-[#130505] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 flex-wrap">
        {/* ------------------- LEFT SIDE: Logo + Company Info ------------------- */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Gurdip Enterprise Logo"
            className="w-12 h-12 rounded"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Gurdip Enterprise
            </h1>
            <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
              <span className="flex items-center gap-1 text-white">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                  <FaLocationDot />
                </span>
                Ahmedabad, Gujarat
              </span>

              <span className="flex items-center gap-1 text-white">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                  ✓
                </span>
                GST No. 24BITPS0834A1ZC
              </span>
            </div>
          </div>
        </div>

        {/* ------------------- RIGHT SIDE: Contact + Search ------------------- */}
        <div className="flex flex-col items-center gap-3 flex-wrap">
          {/* Phone Button */}

          <div className="flex items-center gap-2 ">
            <div className="flex gap-4 relative">
              <div className="w-14 h-14 rounded-full bg-[#f5c842] flex items-center justify-center absolute top-[-5px] left-[-25px]">
                <FiPhoneCall
                  className="w-6 h-6"
                  color="black"
                  fill="currentColor"
                />
              </div>
              <button
                className="bg-[#f5c842] text-black font-semibold 
          rounded-md px-2 pl-6 py-1 w-52 flex justify-center gap-2"
              >
                <div className="text-center">
                  <div className="text-sm font-bold">Call 8048976553</div>
                  <div className="text-[12px]">86% Response Rate</div>
                </div>
              </button>
            </div>

            <div className="flex gap-4 relative">
              <button className="bg-[#e85d2a]  w-32 text-white font-semibold rounded-md px-2 py-3 flex items-center gap-2">
                Send Email
              </button>

              <div
                className="w-14 h-14 rounded-full bg-[#e85d2a] flex items-center justify-center 
              absolute top-[-5px] right-[-25px]"
              >
                <IoIosMail
                  className="w-6 h-6"
                  color="white"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <IoMdSearch color="black" className="w-5 h-5 mx-2" />
            <input
              type="text"
              placeholder="Search Products/Services"
              className="border-0 focus:outline-none text-black px-4 py-2 w-64"
            />
            <button className="bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white px-2 py-2 rounded-none">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
