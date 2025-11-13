import React, { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const whatsappNumber = "919811547246";

  // Scroll-based show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowButton(true); // scrolling down → show
      } else {
        setShowButton(false); // scrolling up → hide
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close popup when clicking outside
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

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    setShowPopup(false);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <Outlet />

      {/* Floating WhatsApp Button */}
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

      {showPopup && (
        <div
          id="whatsapp-popup"
          onClick={openWhatsApp}
          className={`
            fixed bottom-8 right-[70px]  /* position to left of logo */
            bg-green-600 text-white shadow-xl rounded-lg 
            px-4 py-3 text-sm font-semibold z-40 cursor-pointer
            animate-slide-right flex items-center gap-0
              ${
                showButton
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }
          duration-500
          `}
        >
          <span>Open WhatsApp</span>
        </div>
      )}

      {/* Animations */}
      <style>{`
  /* WhatsApp logo slide */
  .logo-show {
    transform: translateY(0);
    opacity: 1;
  }
  .logo-hide {
    transform: translateY(24px);
    opacity: 0;
  }

  /* Smooth popup animation coming OUT of the button */
  @keyframes bubble {
    0% {
      transform: scale(0.4) translateX(20px);
      opacity: 0;
    }
    70% {
      transform: scale(1.05) translateX(0);
      opacity: 1;
    }
    100% {
      transform: scale(1) translateX(0);
      opacity: 1;
    }
  }
  .animate-bubble {
    animation: bubble 0.2s ease-out;
  }
`}</style>
    </div>
  );
};

export default Layout;
