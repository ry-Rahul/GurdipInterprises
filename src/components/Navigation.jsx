import { ChevronDown, Menu, X } from "lucide-react";

import { Link } from "react-router-dom";
import { products } from "../assets/product.json";
import { useState } from "react";

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setShowDropdown(false);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="text-white relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex max-w-7xl mx-auto items-center justify-center">
          {/* HOME */}
          <Link
            to="/"
            className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] py-3 border-b border-r border-white text-center flex-1 font-semibold text-white transition-all duration-300"
          >
            Home
          </Link>

          {/* ABOUT US */}
          <Link
            to="/about"
            className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] py-3 border-b border-r border-white transition-colors text-center flex-1 font-semibold"
          >
            About Us
          </Link>

          {/* PRODUCT RANGE (Dropdown) */}
          <Link
            to={"/products"}
            className="relative flex-1 bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] border-b border-r py-3 border-white flex items-center justify-center"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="transition-colors text-center flex items-center gap-2 font-semibold">
              Our Product Range
              <ChevronDown className="w-4 h-4" />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 bg-[#e85d2a] shadow-lg z-50 max-h-[400px] overflow-y-auto">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={`/product/${product.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 hover:bg-[#f5c842] hover:text-black transition-colors border-b border-[#f5c842] text-left"
                  >
                    {product.category}
                  </Link>
                ))}
              </div>
            )}
          </Link>

          {/* CONTACT US */}
          <Link
            to="/contact"
            className="py-3 border-b border-r border-white bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] transition-colors text-center flex-1 font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation Header */}
        <div className="md:hidden">
          <div className="bg-gradient-to-b from-orange-500 to-red-600 py-1 px-4 flex items-center justify-between border-b border-white">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-orange-500 to-red-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/30">
          <span className="font-semibold text-lg text-white">Navigation</span>
          <button
            onClick={closeDrawer}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          {/* HOME */}
          <Link
            to="/"
            onClick={closeDrawer}
            className="block px-6 py-4 border-b border-white/30 hover:bg-[#FFDF3A] hover:text-black transition-colors font-semibold text-white"
          >
            Home
          </Link>

          {/* ABOUT US */}
          <Link
            to="/about"
            onClick={closeDrawer}
            className="block px-6 py-4 border-b border-white/30 hover:bg-[#FFDF3A] hover:text-black transition-colors font-semibold text-white"
          >
            About Us
          </Link>

          {/* PRODUCT RANGE */}
          <div className="border-b border-white/30">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FFDF3A] hover:text-black transition-colors font-semibold text-white text-left"
            >
              <span>Our Product Range</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Product Submenu */}
            {showDropdown && (
              <div className="bg-[#e85d2a]">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={`/product/${product.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    onClick={closeDrawer}
                    className="block px-8 py-3 hover:bg-[#f5c842] hover:text-black transition-colors border-b border-[#f5c842]/30 text-sm text-white"
                  >
                    {product.category}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT US */}
          <Link
            to="/contact"
            onClick={closeDrawer}
            className="block px-6 py-4 hover:bg-[#FFDF3A] hover:text-black transition-colors font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
