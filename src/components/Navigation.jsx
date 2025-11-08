import { ChevronDown } from "lucide-react"; // Icon (optional for dropdown arrow)
import { Link } from "react-router-dom"; // For navigation
import { useState } from "react"; // For handling dropdown state
import { products } from "../assets/product.json"; // Import product data

export default function Navigation() {
  // Track dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* ---------------- HOME ---------------- */}
        <Link
          to="/"
          className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] py-3 border-b border-r border-white text-center flex-1 font-semibold text-white transition-all duration-300"
        >
          Home
        </Link>

        {/* ---------------- ABOUT US ---------------- */}
        <Link
          to="/about"
          className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] py-3 border-b border-r border-white transition-colors text-center flex-1 font-semibold"
        >
          About Us
        </Link>

        {/* ---------------- PRODUCT RANGE (Dropdown) ---------------- */}
        <Link
          to={'/products'}
          className="relative flex-1 bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] border-b border-r py-3 border-white flex items-center justify-center"
          onMouseEnter={() => setShowDropdown(true)} // Show dropdown
          onMouseLeave={() => setShowDropdown(false)} // Hide dropdown
        >
          <button className="transition-colors text-center flex items-center gap-2 font-semibold">
            Our Product Range
            <ChevronDown className="w-4 h-4" /> {/* Dropdown icon */}
          </button>

          {/* ---------------- DROPDOWN MENU ---------------- */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 bg-[#e85d2a] shadow-lg z-50 max-h-[400px] overflow-y-auto">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-6 py-3 hover:bg-[#f5c842] hover:text-black transition-colors border-b border-[#f5c842] text-left"
                >
                  {product.category}
                </Link>
              ))}
            </div>
          )}
        </Link>

        {/* ---------------- CONTACT US ---------------- */}
        <Link
          to="/contact"
          className="py-3 border-b border-r border-white bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] transition-colors text-center flex-1 font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
