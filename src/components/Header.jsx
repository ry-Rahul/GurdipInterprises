import { IoIosMail, IoMdSearch } from "react-icons/io";
// ✅ Import all required dependencies
import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../store/ContextProvider";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import QuickContactModal from "../components/modal/QuickContactModal";
import address from "../constants/address";
import { products } from "../assets/product.json";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // ✅ State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactType, setContactType] = useState("");
  const { searchQuery, setSearchQuery } = useContext(Context);
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Open modal for Call or Email
  const openModal = (type) => {
    setContactType(type);
    setIsModalOpen(true);
  };

  // ✅ Handle search input
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

  // ✅ Handle product select
  const handleSelect = (item) => {
    const categorySlug = item.category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/product/${categorySlug}`, {
      state: { scrollToItem: item.name },
    });
    setShowDropdown(false);
    setSearchQuery("");
    setFilteredResults([]);
  };

  // ✅ Close dropdown when clicked outside
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
      <header className="bg-[#130505] text-white px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* ---------------- LEFT: Logo + Info ---------------- */}
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/logo.png"
                onClick={() => navigate("/")}
                alt="Gurdip Enterprise Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded"
              />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold tracking-wide">
                  DS AQUA ENGINEERING
                </h1>
                <div className="hidden sm:flex items-center gap-4 text-xs text-gray-300 mt-1">
                  <span className="flex items-center gap-1 text-white">
                    <FaLocationDot className="text-[10px]" />
                    {address.address.city}, {address.address.state}
                  </span>
                  <span className="flex items-center gap-1 text-white">
                    ✓ GST No. 09CPEPS4868B1ZK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- MOBILE: Location + GST ---------------- */}
          <div className="flex sm:hidden flex-col text-xs text-gray-300 mt-1">
            <span className="flex items-center gap-1 text-white">
              <FaLocationDot className="text-[10px]" />
              {address.address.city}, {address.address.state}
            </span>
            <span className="flex items-center gap-1 text-white">
              ✓ GST No. 09CPEPS4868B1ZK
            </span>
          </div>

          {/* ---------------- RIGHT: Buttons + Search ---------------- */}
          <div
            className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto"
            ref={dropdownRef}
          >
            {/* --- CALL + EMAIL BUTTONS --- */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {/* CALL BUTTON */}
              <button
                onClick={() => openModal("Call Request")}
                className="relative bg-[#f5c842] text-black font-semibold rounded-md px-3 py-2 w-full sm:w-48 flex justify-center items-center gap-2 hover:bg-[#e5b832] transition-colors"
              >
                <FiPhoneCall className="w-5 h-5 absolute left-3 sm:static" />
                <div className="text-center">
                  <div className="text-sm font-bold">Call 9811547246</div>
                  <div className="text-[11px]">86% Response Rate</div>
                </div>
              </button>

              {/* EMAIL BUTTON */}
              <button
                onClick={() => openModal("Email Inquiry")}
                className="relative bg-[#e85d2a] text-white font-semibold rounded-md px-3 py-3 w-full sm:w-48 flex justify-center items-center gap-2 hover:bg-[#d14e21] transition-colors"
              >
                <IoIosMail className="w-5 h-5 absolute left-3 sm:static" />
                <span className="whitespace-nowrap">Send Email</span>
              </button>
            </div>

            {/* --- SEARCH BAR --- */}
            <div className="relative mt-2 w-full sm:w-auto">
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <IoMdSearch color="black" className="w-5 h-5 mx-2" />
                <input
                  type="text"
                  placeholder="Search Products/Services"
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setShowDropdown(true)}
                  className="border-0 focus:outline-none text-black px-2 py-2 w-full sm:w-64 text-sm"
                />
                <button className="bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white px-3 py-2 text-sm">
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
