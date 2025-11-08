import { useParams, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { products } from "../assets/product.json";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Phone, ChevronRight, ChevronDown, ChevronsRight } from "lucide-react";
import ProductModal from "../components/modal/ProductModal";
import { useLocation } from "react-router-dom";

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

  const handleScrollToItem = (itemName) => {
    const element = itemRefs.current[itemName];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setExpandedCategory(currentCategory?.category || null);
  }, [category]);


  // Scroll to the item if coming from Products page
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

  return (
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      <Header />
      <Navigation />

      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="grid lg:grid-cols-[250px_1fr] gap-2">
          {/* Sidebar */}
          <aside className="bg-[#2a2220] text-white rounded-lg p-2 sticky top-4 h-fit">
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
                              className="block text-left w-full px-3 py-1.5 text-sm rounded border-dashed border-[#FFA601] flex items-center gap-2 hover:bg-[#FFE23A] hover:text-black"
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

          {/* Product Details */}
          <section className="bg-white rounded-lg p-6 shadow-md overflow-hidden">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#EA4E02] mb-2">
                {currentCategory?.category}
              </h1>
              <p className="text-gray-700 text-sm">
                {currentCategory?.description}
              </p>
            </div>

            <div className="space-y-12">
              {currentCategory?.items?.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[item.name] = el)}
                  className="border-b border-gray-300 pb-10 last:border-0 scroll-mt-20"
                >
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
                    <div>
                      <h2 className="text-xl font-bold mb-1">{item.name}</h2>
                      {item.price && (
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="text-sm text-gray-600">Approx.</span>
                          <span className="text-2xl font-bold text-[#EA4E02]">
                            {item.price}
                          </span>
                          <span className="text-gray-600">/ Piece</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => openModal(item)}
                      className="bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition"
                    >
                      <Phone className="w-4 h-4" />
                      REQUEST CALLBACK
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {item.details?.image && (
                        <>
                          <div className="border rounded-lg p-3 bg-gray-50 mb-3 flex justify-center">
                            <img
                              src={item.details.image[0]}
                              alt={item.name}
                              className="max-h-64 object-contain"
                            />
                          </div>
                          <div className="flex gap-2">
                            {item.details.image.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`${item.name}-${idx}`}
                                className="w-20 h-20 border rounded-md object-contain cursor-pointer hover:scale-105 transition-transform"
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div>
                      <h3 className="font-bold mb-2 text-lg">Product Details:</h3>
                      <table className="w-full text-sm border-collapse">
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

                  <div className="mt-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.details?.description}
                    </p>
                    <button
                      onClick={() => openModal(item)}
                      className="mt-4 bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-5 py-2 rounded-lg transition-colors"
                    >
                      Yes! I am Interested
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modal Component */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </main>
  );
}
