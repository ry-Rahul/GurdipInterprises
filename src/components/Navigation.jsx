import { ChevronDown } from "lucide-react";
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
    <nav className="bg-[#e85d2a] text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a
          href="/"
          className="px-8 py-4 hover:bg-[#d84d1a] transition-colors text-center flex-1 font-semibold"
        >
          Home
        </a>
        <a
          href="/about"
          className="px-8 py-4 hover:bg-[#d84d1a] transition-colors text-center flex-1 font-semibold"
        >
          About Us
        </a>
        <div
          className="relative flex-1"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="w-full px-8 py-4 hover:bg-[#d84d1a] transition-colors text-center font-semibold flex items-center justify-center gap-2 bg-[#f5c842] text-black">
            Our Product Range
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 right-0 bg-[#e85d2a] shadow-lg z-50 max-h-[400px] overflow-y-auto">
              {productCategories.map((category) => (
                <a
                  key={category}
                  href={`/product/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block px-6 py-3 hover:bg-[#d84d1a] transition-colors border-b border-[#d84d1a] text-left"
                >
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>
        <a
          href="/contact"
          className="px-8 py-4 hover:bg-[#d84d1a] transition-colors text-center flex-1 font-semibold"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
