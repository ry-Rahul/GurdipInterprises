import { Mail, Phone } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../store/ContextProvider";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import QuickContactModal from "../components/modal/QuickContactModal"; // ✅ import modal
import { products } from "../assets/product.json";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactType, setContactType] = useState("");
  const { searchQuery, setSearchQuery } = useContext(Context);

  // 🧠 Search States
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Modal logic
  const openModal = (type) => {
    setContactType(type);
    setIsModalOpen(true);
  };

  // 🔍 Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const matches = [];

    products.forEach((category) => {
      category.items.forEach((item) => {
        if (item.name.toLowerCase().includes(query)) {
          matches.push({
            name: item.name,
            category: category.category,
          });
        }
      });
    });

    setFilteredResults(matches);
    setShowDropdown(true);
  };

  // 🧭 Handle item click → redirect
  const handleSelect = (item) => {
    const categorySlug = item.category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/product/${categorySlug}`, {
      state: { scrollToItem: item.name },
    });

    setShowDropdown(false);
    setSearchQuery("");
    setFilteredResults([]);
  };

  // 🧹 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header className="bg-[#130505] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 flex-wrap">
          {/* ---------------- LEFT: Logo & Info ---------------- */}
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

          {/* ---------------- RIGHT: Buttons + Search ---------------- */}
          <div
            className="flex flex-col items-center gap-3 flex-wrap"
            ref={dropdownRef}
          >
            {/* --- CALL + EMAIL BUTTONS --- */}
            <div className="flex items-center gap-2 ">
              {/* CALL BUTTON */}
              <div className="flex gap-4 relative">
                <div className="w-14 h-14 rounded-full bg-[#f5c842] flex items-center justify-center absolute top-[-5px] left-[-25px]">
                  <FiPhoneCall className="w-6 h-6" color="black" />
                </div>

                <button
                  onClick={() => openModal("Call Request")}
                  className="bg-[#f5c842] text-black font-semibold rounded-md px-2 pl-6 py-1 w-52 flex justify-center gap-2 hover:bg-[#e5b832] transition-colors"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold">Call 8048976553</div>
                    <div className="text-[12px]">86% Response Rate</div>
                  </div>
                </button>
              </div>

              {/* SEND EMAIL BUTTON */}
              <div className="flex gap-4 relative">
                <button
                  onClick={() => openModal("Email Inquiry")}
                  className="bg-[#e85d2a] w-32 text-white font-semibold rounded-md px-2 py-3 flex items-center gap-2 hover:bg-[#d14e21] transition-colors"
                >
                  Send Email
                </button>

                <div className="w-14 h-14 rounded-full bg-[#e85d2a] flex items-center justify-center absolute top-[-5px] right-[-25px]">
                  <IoIosMail className="w-6 h-6" color="white" />
                </div>
              </div>
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="relative mt-2">
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <IoMdSearch color="black" className="w-5 h-5 mx-2" />
                <input
                  type="text"
                  placeholder="Search Products/Services"
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setShowDropdown(true)}
                  className="border-0 focus:outline-none text-black px-4 py-2 w-64"
                />
                <button className="bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white px-2 py-2 rounded-none">
                  Search
                </button>
              </div>

              {/* 🔽 Search Dropdown */}
              {showDropdown && (
                <ul className="absolute left-0 w-full bg-white text-black mt-1 rounded-md shadow-lg border border-gray-200 max-h-60 overflow-auto z-50">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleSelect(item)}
                        className="px-3 py-2 text-sm hover:bg-[#f5c842] hover:text-black cursor-pointer border-b border-gray-100 last:border-0"
                      >
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-gray-500">
                          {item.category}
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-2 text-center text-gray-500 text-sm">
                      No Data Found
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- QUICK CONTACT MODAL ---------------- */}
      <QuickContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: contactType,
          price: "",
          details: { description: "General contact request from header." },
        }}
      />
    </>
  );
}
