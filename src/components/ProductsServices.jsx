import { ChevronRight } from "lucide-react"; // Importing the arrow icon

// Product categories arranged in groups
const productCategories = [
  ["Programming Cable", "Siemens Plc", "Input Module", "Siemens Modules"],
  [
    "Programmable Logic Controller",
    "Rectifier",
    "Batching Plant Spare Parts",
    "Concrete Batching Plant",
  ],
  ["Weintek Hmi", "Cement Silo", "Siemens", "HMI Touch Panel"],
];

export default function ProductsServices() {
  return (
    // Section container with dark brown background
    <section className="bg-[#3d2f2a] py-8">
      {/* Wrapper for content centered on the page */}
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------------- Header with Gradient Background ---------------- */}
        <div className="bg-gradient-to-r from-[#f5c842] to-[#e8a82a] px-6 py-3 rounded-t-lg">
          <h2 className="text-black text-xl font-bold flex items-center gap-2">
            {/* Small black circle icon */}
            <span className="w-3 h-3 bg-black rounded-full"></span>
            Products & Services
          </h2>
        </div>

        {/* ---------------- Product List Container ---------------- */}
        <div className="bg-[#2a2220] p-6 rounded-b-lg">
          {/* Responsive grid layout for categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.flat().map((category, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-2 text-white hover:text-[#f5c842] transition-colors group"
              >
                {/* Chevron icon that slides right on hover */}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm">{category}</span>
              </a>
            ))}
          </div>

          {/* ---------------- View All Button ---------------- */}
          <div className="flex justify-end mt-6">
            <button className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-semibold px-6 py-2 rounded flex items-center gap-2 transition-colors">
              {/* Eye emoji as an icon */}
              <span className="text-lg">👁</span>
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
