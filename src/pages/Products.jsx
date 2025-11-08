import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProductModal from "../components/modal/ProductModal"; // ✅ import your modal
import { products } from "../assets/product.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const navigate = useNavigate();

  // Track which product to show in modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Redirect to /product/:category and scroll
  const handleProductClick = (category, itemName) => {
    navigate(`/product/${category.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { scrollToItem: itemName },
    });
  };

  // Open modal with selected product
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <main className="bg-[#3d2f2a] text-white min-h-screen">
      <Header />
      <Navigation />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-4 px-2 py-2">
        {/* ---------------- Sidebar ---------------- */}
        <aside className="bg-[#2a2220] text-white rounded-lg p-3 sticky top-4 h-fit">
          <h3 className="text-lg font-bold mb-3 bg-[#FFA601] text-black px-2 py-1 rounded-md">
            Our Product Range
          </h3>

          <ul className="space-y-1">
            {products.map((cat, i) => (
              <li key={i}>
                <button
                  className="flex items-center justify-between w-full text-left px-3 py-2 text-sm border-b-[0.5px] border-white transition-colors hover:bg-[#f5c842] hover:text-black"
                  onClick={() =>
                    navigate(
                      `/product/${cat.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight size={14} />
                    {cat.category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* ---------------- Right Section ---------------- */}
        <section className="bg-white rounded-lg p-6 shadow-md text-gray-900">
          {/* ---------- PAGE HEADER ---------- */}
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl font-bold text-[#EA4E02] mb-2">
              Products & Services
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed">
              Established as a <strong>Proprietor firm</strong> in the year{" "}
              <strong>2011</strong>, we <strong>"JIA ENTERPRISE"</strong> are a
              leading <strong>Manufacturer</strong> of a wide range of{" "}
              <strong>Brake Coil, Rubber Shut, Siemens MCCB</strong>, etc.
            </p>

            <p className="mt-3 text-sm text-gray-700">
              <strong>We Offer:</strong>
            </p>
          </div>

          {/* ---------- CATEGORY BLOCKS ---------- */}
          {products.map((category, index) => (
            <div
              key={index}
              className="border border-[#c9c9c9] bg-[#f9f9f9] mb-8 rounded overflow-hidden"
            >
              <div className="bg-[#5a4c47] text-white px-4 py-2 font-semibold text-lg">
                {category.category}
              </div>

              <div className="grid lg:grid-cols-[1fr_250px] gap-4 p-4">
                {/* LEFT: Description + Items */}
                <div>
                  {category.description && (
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  )}

                  {/* Product Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-4">
                    {category.items?.slice(0, 5).map((item, i) => (
                      <div
                        key={i}
                        onClick={() =>
                          handleProductClick(category.category, item.name)
                        }
                        className="cursor-pointer bg-[#dcdcdc] text-black text-sm font-medium text-center px-3 py-2 rounded hover:bg-[#EA4E02] hover:text-white transition-colors"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>

                  {/* ✅ OPEN MODAL WHEN CLICKED */}
                  <button
                    onClick={() => handleOpenModal(category.items?.[0])}
                    className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-5 py-2 rounded-lg transition-colors"
                  >
                    Yes! I am Interested
                  </button>
                </div>

                {/* RIGHT: Image */}
                {category.items?.[0]?.details?.image && (
                  <div className="flex justify-center items-center">
                    <img
                      src={category.items[0].details.image[0]}
                      alt={category.category}
                      className="rounded border border-gray-300 max-h-52 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* ✅ MODAL HERE */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </main>
  );
}
