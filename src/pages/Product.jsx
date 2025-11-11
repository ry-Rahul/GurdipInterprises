import {
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ImagePreviewModal from "../components/modal/ImagePreviewModal";
import Navigation from "../components/Navigation";
import ProductModal from "../components/modal/ProductModal";
import { products } from "../assets/product.json";

export default function Product() {
  const { category } = useParams();
  const location = useLocation();

  const currentCategory = products.find(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  const [expandedCategory, setExpandedCategory] = useState(
    currentCategory?.category || null
  );

  const itemRefs = useRef({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [hoveredImage, setHoveredImage] = useState({});
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const handleScrollToItem = (itemName) => {
    const element = itemRefs.current[itemName];
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false); // Close sidebar after navigation on mobile
  };

  useEffect(() => {
    setExpandedCategory(currentCategory?.category || null);
  }, [category]);

  useEffect(() => {
    if (location.state?.scrollToItem) {
      const itemName = location.state.scrollToItem;
      const element = itemRefs.current[itemName];
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.state]);

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalOpen(true);
  };

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const handleCategoryClick = (prod) => {
    setSidebarOpen(false); // Close sidebar on mobile when category is clicked
  };

  return (
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      <Header />
      <Navigation />

      <div className="max-w-7xl mx-auto px-2 py-2">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-2">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-full bg-[#FFA601] hover:bg-[#ff9500] text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Menu className="w-5 h-5" />
            Browse Categories
          </button>
        </div>

        <div className="grid lg:grid-cols-[250px_1fr] gap-2">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block bg-[#2a2220] text-white rounded-lg p-2 sticky top-4 h-fit max-h-[calc(100vh-2rem)] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4 bg-[#FFA601] text-black px-2 py-1 rounded-md">
              Our Product Range
            </h3>

            <ul className="space-y-1">
              {products.map((prod, index) => {
                const isActive = prod.category === expandedCategory;
                const isCurrent = prod.category === currentCategory?.category;

                return (
                  <li
                    key={index}
                    className={`rounded-md ${
                      isCurrent ? "border border-dashed border-[#FFA601]" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between px-3 py-2 text-sm border-b-[0.5px] border-white transition-colors ${
                        isCurrent
                          ? "bg-[#FFA601] text-black font-semibold"
                          : "hover:bg-[#f5c842] hover:text-black"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setExpandedCategory(isActive ? null : prod.category)
                        }
                      >
                        {isActive ? (
                          <ChevronDown size={14} />
                        ) : (
                          <ChevronRight size={14} />
                        )}
                      </button>
                      <Link
                        to={`/product/${prod.category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex-1 ml-2"
                      >
                        {prod.category}
                      </Link>
                    </div>

                    {isActive && (
                      <ul className="ml-6 mt-2 space-y-1">
                        {prod.items?.map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => handleScrollToItem(item.name)}
                              className="flex text-left w-full px-3 py-1.5 text-sm rounded items-center gap-2 hover:bg-[#FFE23A] hover:text-black"
                            >
                              <ChevronsRight className="w-4 h-4 flex-shrink-0" />
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Mobile Sidebar Drawer */}
          {sidebarOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />

              {/* Drawer */}
              <aside className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#2a2220] text-white shadow-2xl z-50 overflow-y-auto lg:hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/20 sticky top-0 bg-[#2a2220]">
                  <h3 className="text-lg font-bold">Product Categories</h3>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category List */}
                <div className="p-4">
                  <ul className="space-y-1">
                    {products.map((prod, index) => {
                      const isActive = prod.category === expandedCategory;
                      const isCurrent =
                        prod.category === currentCategory?.category;

                      return (
                        <li
                          key={index}
                          className={`rounded-md ${
                            isCurrent
                              ? "border border-dashed border-[#FFA601]"
                              : ""
                          }`}
                        >
                          <div
                            className={`flex items-center justify-between px-3 py-3 text-sm border-b-[0.5px] border-white transition-colors ${
                              isCurrent
                                ? "bg-[#FFA601] text-black font-semibold"
                                : "hover:bg-[#f5c842] hover:text-black"
                            }`}
                          >
                            <button
                              onClick={() =>
                                setExpandedCategory(
                                  isActive ? null : prod.category
                                )
                              }
                              className="p-1"
                            >
                              {isActive ? (
                                <ChevronDown size={16} />
                              ) : (
                                <ChevronRight size={16} />
                              )}
                            </button>
                            <Link
                              to={`/product/${prod.category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              onClick={() => handleCategoryClick(prod)}
                              className="flex-1 ml-2"
                            >
                              {prod.category}
                            </Link>
                          </div>

                          {isActive && (
                            <ul className="ml-6 mt-2 mb-2 space-y-1">
                              {prod.items?.map((item, i) => (
                                <li key={i}>
                                  <button
                                    onClick={() =>
                                      handleScrollToItem(item.name)
                                    }
                                    className="flex text-left w-full px-3 py-2 text-sm rounded items-center gap-2 hover:bg-[#FFE23A] hover:text-black transition-colors"
                                  >
                                    <ChevronsRight className="w-4 h-4 flex-shrink-0" />
                                    <span className="line-clamp-2">
                                      {item.name}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            </>
          )}

          {/* Product Details */}
          <section className="bg-white rounded-lg p-4 md:p-6 shadow-md overflow-hidden">
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-[#EA4E02] mb-2">
                {currentCategory?.category}
              </h1>
              <p className="text-gray-700 text-sm">
                {currentCategory?.description}
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {currentCategory?.items?.map((item, index) => {
                const mainImage =
                  hoveredImage[item.name] || item.details?.image?.[0];

                return (
                  <div
                    key={index}
                    ref={(el) => (itemRefs.current[item.name] = el)}
                    className="border-b border-gray-300 pb-8 md:pb-10 last:border-0 scroll-mt-20"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-3">
                      <div>
                        <h2 className="text-lg md:text-xl font-bold mb-1">
                          {item.name}
                        </h2>
                        {item.price && (
                          <div className="flex items-center flex-wrap gap-2">
                            <span className="text-sm text-gray-600">
                              Approx.
                            </span>
                            <span className="text-xl md:text-2xl font-bold text-[#EA4E02]">
                              {item.price}
                            </span>
                            <span className="text-gray-600">/ Piece</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => openModal(item)}
                        className="bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition w-full md:w-auto"
                      >
                        <Phone className="w-4 h-4" />
                        REQUEST CALLBACK
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        {item.details?.image && (
                          <>
                            {/* Main Image */}
                            <div
                              className="border rounded-lg p-3 bg-gray-50 mb-3 flex justify-center items-center cursor-pointer h-48 md:h-64 overflow-hidden"
                              onClick={() => {
                                setSelectedProduct(item);
                                setImageModalOpen(true);
                              }}
                            >
                              <img
                                src={mainImage}
                                alt={item.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-200 hover:scale-105"
                              />
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {item.details.image.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  alt={`${item.name}-${idx}`}
                                  onMouseEnter={() =>
                                    setHoveredImage((prev) => ({
                                      ...prev,
                                      [item.name]: img,
                                    }))
                                  }
                                  onMouseLeave={() =>
                                    setHoveredImage((prev) => ({
                                      ...prev,
                                      [item.name]: item.details.image[0],
                                    }))
                                  }
                                  onClick={() => openImageModal(img)}
                                  className="w-16 h-16 md:w-20 md:h-20 border rounded-md object-contain cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Product Details */}
                      <div>
                        <h3 className="font-bold mb-2 text-base md:text-lg">
                          Product Details:
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs md:text-sm border-collapse">
                            <tbody>
                              {Object.entries(item.details || {}).map(
                                ([key, value]) =>
                                  key !== "image" &&
                                  key !== "description" && (
                                    <tr key={key} className="border-b">
                                      <td className="py-2 pr-4 font-medium text-gray-700 capitalize">
                                        {key.replace(/([A-Z])/g, " $1")}
                                      </td>
                                      <td className="py-2">{value}</td>
                                    </tr>
                                  )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.details?.description}
                      </p>
                      <button
                        onClick={() => openModal(item)}
                        className="mt-4 bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-5 py-2 rounded-lg transition-colors w-full md:w-auto"
                      >
                        Yes! I am Interested
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Product Contact Modal */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={imageModalOpen}
        images={selectedProduct?.details?.image || []}
        product={selectedProduct}
        onClose={() => setImageModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
