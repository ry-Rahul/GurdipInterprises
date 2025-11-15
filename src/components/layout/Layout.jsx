import React, { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import QuickContactModal from "../modal/QuickContactModal";

const Layout = () => {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 New states for auto modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactType] = useState("Quick Inquiry");

  const whatsappNumber = "919811547246";

  // ---------------- SCROLL SHOW/HIDE BUTTON ----------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ---------------- CLOSE WHATSAPP POPUP WHEN CLICK OUTSIDE ----------------
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.closest("#whatsapp-popup") &&
        !e.target.closest("#whatsapp-btn")
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [showPopup]);

  // ---------------- OPEN WHATSAPP ----------------
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    setShowPopup(false);
  };

  // ---------------- AUTO OPEN MODAL (AFTER 10 SECONDS) ----------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      <Outlet />

      {/* ---------------------------------------------------
          Floating WhatsApp Button
      --------------------------------------------------- */}
      <button
        id="whatsapp-btn"
        onClick={() => setShowPopup((prev) => !prev)}
        className={`
          fixed bottom-6 right-6 z-50 
          bg-green-500 text-white p-4 rounded-full shadow-xl
          hover:bg-green-600 active:scale-95 transition
          flex items-center justify-center
          ${
            showButton
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
          }
          duration-500
        `}
      >
        <FaWhatsapp size={30} />
      </button>

      {/* ---------------------------------------------------
          WhatsApp Slide Popup
      --------------------------------------------------- */}
      {showPopup && (
        <div
          id="whatsapp-popup"
          onClick={openWhatsApp}
          className={`
            fixed bottom-8 right-[94px] z-50
            bg-green-600 text-white shadow-xl rounded-lg 
            px-4 py-3 text-sm font-semibold cursor-pointer
            flex items-center gap-2
            animate-slide-from-left
            transform transition-all duration-500 ease-out
            ${
              showButton
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }
          `}
        >
          <span>Open WhatsApp</span>

          <div className="absolute -right-2 bottom-1/2 transform translate-y-1/2">
            <div className="w-0 h-0 border-l-[8px] border-l-green-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------
          Auto Quick Contact Modal (after 10 sec)
      --------------------------------------------------- */}
      <QuickContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: contactType,
          price: "",
          details: { description: "General contact request from website." },
        }}
      />

      {/* ---------------------------------------------------
          WhatsApp Popup Animation
      --------------------------------------------------- */}
      <style>{`
        @keyframes slide-from-left {
          from {
            transform: translateX(40px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-from-left {
          animation: slide-from-left 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Layout;
