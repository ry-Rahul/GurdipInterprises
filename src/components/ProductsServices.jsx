import { ChevronDown, ChevronRight } from "lucide-react";

import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { LuBox } from "react-icons/lu";
import { products } from "../assets/product.json";
import { useState } from "react";

export default function ProductsServices() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 12);

  return (
    <section className="bg-[#302222] text-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-[#FFA601] flex items-center py-2 px-3 sm:px-6 gap-2">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
            <GrCaretNext color="black" size={12} className="ml-1" />
          </div>
          <h2 className="text-black font-bold text-base sm:text-lg flex items-center gap-2">
            Products & Services
          </h2>
        </div>

        {/* Product List Container */}
        <div className="bg-[#2a2220] p-4 sm:p-6 rounded-b-lg relative">
          {/* GRID for Desktop / Tablet */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Name */}
                <Link
                  to={`/product/${product.category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex items-center gap-2 text-white hover:text-[#f5c842] transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="font-bold text-sm border-b-2 border-white">
                    {product.category}
                  </span>
                </Link>

                {/* Dropdown with Animation */}
                <div
                  className={`absolute left-0 top-full w-56 bg-[#EA4E02] text-white shadow-lg z-10 rounded-b-md overflow-hidden transition-all duration-300 origin-top ${
                    hoveredCategory === index
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {product.items?.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={`/product/${product.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block px-3 py-2 hover:bg-[#FFE23A] border-b border-white hover:text-black transition-colors text-sm transform hover:translate-x-1 transition-transform duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE ACCORDION VIEW with Smooth Animation */}
          <div className="sm:hidden flex flex-col gap-2">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="bg-[#3b2c29] rounded-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === index ? null : index
                    )
                  }
                  className="flex justify-between items-center w-full px-3 py-3 text-left font-semibold text-sm border-b border-[#f5c842]"
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedCategory === index ? "rotate-90" : ""
                      }`}
                    />
                    {product.category}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedCategory === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion content with smooth slide animation */}
                <div
                  className={`bg-[#EA4E02] transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCategory === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-1">
                    {product.items?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={`/product/${product.category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className={`block px-4 py-2 text-sm hover:bg-[#FFE23A] hover:text-black border-b border-[#f5c842] transition-all duration-200 transform hover:translate-x-1 ${
                          expandedCategory === index ? "animate-fadeInUp" : ""
                        }`}
                        style={{
                          animationDelay: `${itemIndex * 50}ms`,
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center sm:justify-end mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-semibold px-6 py-2 rounded flex items-center gap-2 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95"
            >
              <LuBox
                className={`text-lg transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
