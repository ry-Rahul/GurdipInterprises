import { ChevronRight } from "lucide-react"; // Right arrow icon
import { GrCaretNext } from "react-icons/gr"; // Small caret icon
import { products } from "../assets/product.json"; // Import product data
import { Link } from "react-router-dom"; // For navigation
import { useState } from "react"; // For managing component state
import { LuBox } from "react-icons/lu";


export default function ProductsServices() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 12);

  return (
    <section className="bg-[#302222]">
      <div className="mx-auto">
        {/* ---------------- Header ---------------- */}
        <div className="bg-[#FFA601] flex py-1 w-full gap-2">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
            <GrCaretNext fill="black" size={12} className="ml-1" />
          </div>
          <h2 className="text-black font-bold flex items-center gap-2">
            Products & Services
          </h2>
        </div>

        {/* ---------------- Product List Container ---------------- */}
        <div className="bg-[#2a2220] p-6 rounded-b-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Name */}
                <Link
                  to={`/product/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-2 text-white hover:text-[#f5c842] transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="font-bold text-sm border-b-2 border-white">
                    {product.category}
                  </span>
                </Link>

                {/* Dropdown of product items */}
                {hoveredCategory === index && (
                  <div className="absolute left-0 top-full w-52 bg-[#EA4E02] text-white shadow-lg z-10">
                    {product.items?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={`/product/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-2 py-2 hover:bg-[#FFE23A] border-b border-white hover:text-black transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ---------------- View All Button ---------------- */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setShowAll(!showAll)} // Toggle visibility
              className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-semibold px-6 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <LuBox />
              {showAll ? "Show Less" : "View All"} {/* Dynamic label */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
