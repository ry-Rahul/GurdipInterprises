import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const productCategories = [
  "Programming Cable",
  "Siemens Plc",
  "Input Module",
  "Siemens Modules",
  "Programmable Logic Controller",
  "Rectifier",
  "Batching Plant Spare Parts",
  "Concrete Batching Plant",
  "Weintek Hmi",
  "Cement Silo",
  "Siemens",
  "HMI Touch Panel",
  "Delta Ac Servo Drive",
  "Mitsubishi Plc",
  "Cement Feeding System",
  "Fuji Hmi",
  "Face Recognition System",
];

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className=" text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link
          to="/"
          className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] py-3 border-b border-r border-white text-center flex-1 font-semibold text-white transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103]  py-3 border-b border-r border-white  transition-colors text-center flex-1 font-semibold"
        >
          About Us
        </Link>
        <div
          className="relative flex-1 bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103]   border-b border-r py-3 border-white flex  items-center justify-center"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="transition-colors text-center flex-1 font-semibold">
            Our Product Range
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 right-0 bg-[#e85d2a] shadow-lg z-50 max-h-[400px] overflow-y-auto">
              {productCategories.map((category) => (
                <Link
                  key={category}
                  to={`/product/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-6 py-3 hover:bg-[#f5c842] transition-colors border-b border-[#f5c842] text-left"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className=" py-3 border-b border-r border-white  bg-gradient-to-b from-orange-500 to-red-600 hover:from-[#FFDF3A] hover:to-[#FFB103] transition-colors text-center flex-1 font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
