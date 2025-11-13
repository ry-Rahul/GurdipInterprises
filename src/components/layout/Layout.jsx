import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { Modal } from "antd";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  // WhatsApp number
  const whatsappNumber = "919811547246";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
    setConfirmOpen(false);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <Outlet />

      {/* Floating WhatsApp Button (Mobile + Desktop) */}
      <button
        onClick={() => setConfirmOpen(true)}
        className="
          fixed bottom-6 right-6 
          bg-green-500 text-white p-4 rounded-full shadow-xl
          hover:bg-green-600 active:scale-95 transition 
          flex items-center justify-center
          z-50
        "
      >
        <FaWhatsapp size={30} />
      </button>

      {/* Confirmation Modal */}
      <Modal
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        footer={null}
        centered
      >
        <div className="text-center py-3">
          <h2 className="text-xl font-semibold mb-3">Open WhatsApp?</h2>
          <p className="text-gray-600 mb-5">
            You will be redirected to WhatsApp to chat with us.
          </p>

          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Yes, Continue
          </button>

          <button
            onClick={() => setConfirmOpen(false)}
            className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
