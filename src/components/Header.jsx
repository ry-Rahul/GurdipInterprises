"use client";

import { IoIosMail, IoMdSearch } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../store/ContextProvider";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import QuickContactModal from "../components/modal/QuickContactModal";
import address from "../constants/address";
import { products } from "../assets/product.json";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactType, setContactType] = useState("");

  const { searchQuery, setSearchQuery } = useContext(Context);
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const navigate = useNavigate();

  // ---------------- OPEN MODAL ----------------
  const openModal = (type) => {
    setContactType(type);
    setIsModalOpen(true);
  };

  // ---------------- SEARCH HANDLER ----------------
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

  // ---------------- REDIRECT TO PRODUCT PAGE ----------------
  const handleSelect = (item) => {
    console.log(item);
    setShowDropdown(false);
    setSearchQuery("");
    setFilteredResults([]);

    const categorySlug = item.category.toLowerCase().replace(/\s+/g, "-");

    setTimeout(() => {
      navigate(`/product/${categorySlug}`, {
        state: { scrollToItem: item.name },
      });
    }, 10);
  };

  // ---------------- CLOSE DROPDOWN WHEN CLICK OUTSIDE ----------------
  useEffect(() => {
    const handler = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return (
    <>
      {/* ============= MOBILE HEADER ============= */}
      <header className="lg:hidden bg-[#130505] text-white px-4 py-3 border-b border-orange-600/20">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* LOGO */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <img
              src="/logo.png"
              alt="DS Aqua Engineering Logo"
              onClick={() => navigate("/")}
              className="w-12 h-12 rounded cursor-pointer"
            />
            <div className="">
              <h1 className="text-sm font-bold tracking-wide p-0 m-0">
                DS AQUA
              </h1>
              <p className="text-xs ">Engineering</p>
            </div>
          </div>

          {/* CALL + EMAIL ICONS */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => openModal("Call Request")}
              className="bg-[#f5c842] text-black p-3 rounded-lg hover:bg-[#e5b832] transition-all"
            >
              <FiPhoneCall className="w-5 h-5" />
            </button>

            <button
              onClick={() => openModal("Email Inquiry")}
              className="bg-[#e85d2a] text-white p-3 rounded-lg hover:bg-[#d14e21] transition-all"
            >
              <IoIosMail className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SEARCH BAR MOBILE */}
        <div className="relative" ref={mobileDropdownRef}>
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <IoMdSearch className="w-4 h-4 mx-3 text-black" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
              className="text-black px-2 py-2.5 w-full text-sm outline-none"
            />
          </div>

          {/* DROPDOWN MOBILE */}
          {showDropdown && (
            <ul className="absolute left-0 right-0 bg-white text-black mt-1 rounded-lg shadow-lg border border-gray-200 max-h-48 overflow-auto z-50">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setTimeout(() => handleSelect(item), 50);
                    }}
                    className="px-4 py-2 text-sm hover:bg-[#f5c842] cursor-pointer border-b border-gray-100"
                  >
                    <div className="font-semibold text-xs">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.category}</div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-center text-gray-500 text-xs">
                  No results
                </li>
              )}
            </ul>
          )}
        </div>
      </header>

      {/* ============= DESKTOP HEADER ============= */}
      <header className="hidden lg:block bg-[#130505] text-white px-8 py-6 border-b border-orange-600/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            {/* LEFT */}
            <div className="flex items-center gap-6 flex-1">
              <img
                src="/logo.png"
                alt="Logo"
                onClick={() => navigate("/")}
                className="w-16 h-16 rounded cursor-pointer"
              />

              <div>
                <h1 className="text-3xl font-bold tracking-wide">
                  DS AQUA ENGINEERING
                </h1>

                <div className="flex items-center gap-8 text-sm text-gray-300 mt-3">
                  <span className="flex items-center gap-2">
                    <FaLocationDot className="text-base" />
                    {address.address.city}, {address.address.state}
                  </span>

                  <span>✓ GST No. 09CPEPS4868B1ZK</span>
                </div>
              </div>
            </div>

            {/* RIGHT — SAME HEIGHT BUTTONS */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => openModal("Call Request")}
                className="bg-[#f5c842] text-black font-bold rounded-lg px-6 py-4 h-[60px] flex items-center gap-3 hover:bg-[#e5b832] transition-all"
              >
                <FiPhoneCall className="w-5 h-5" />
                <span className="text-sm font-bold">9811547246</span>
              </button>

              <button
                onClick={() => openModal("Email Inquiry")}
                className="bg-[#e85d2a] text-white font-bold rounded-lg px-6 py-4 h-[60px] flex items-center gap-3 hover:bg-[#d14e21] transition-all"
              >
                <IoIosMail className="w-5 h-5" />
                <span className="text-sm font-bold">Send Email</span>
              </button>
            </div>
          </div>

          {/* SEARCH BAR DESKTOP */}
          <div className="relative max-w-md" ref={desktopDropdownRef}>
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <IoMdSearch className="w-5 h-5 mx-4 text-black" />
              <input
                type="text"
                placeholder="Search Products & Services"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setShowDropdown(true)}
                className="text-black px-3 py-3 w-full text-sm outline-none"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 text-sm font-bold">
                Search
              </button>
            </div>

            {/* DROPDOWN DESKTOP */}
            {showDropdown && (
              <ul className="absolute left-0 bg-white text-black mt-2 rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-auto z-50 w-full">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, idx) => (
                    <li
                      key={idx}
                      onMouseDown={() => handleSelect(item)}
                      className="px-5 py-3 hover:bg-[#f5c842] cursor-pointer border-b border-gray-100"
                    >
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        {item.category}
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-5 py-4 text-center text-gray-500 text-sm">
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* CONTACT MODAL */}
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
