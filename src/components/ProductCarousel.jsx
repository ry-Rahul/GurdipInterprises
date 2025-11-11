import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Siemens Programming Cable",
    image: "/siemens-programming-cable.jpg",
  },
  { id: 2, name: "Siemens 6es7972", image: "/siemens-6es7972.jpg" },
  { id: 3, name: "Bge Y20-A1-174-3", image: "/industrial-connector.jpg" },
  { id: 4, name: "Siemens PLC S7 300", image: "/siemens-plc-s7-300.jpg" },
  {
    id: 5,
    name: "Programming cable USB AC362",
    image: "/usb-programming-cable.jpg",
  },
  {
    id: 6,
    name: "Bge 1.5 Sew Eurodrive Rectifier",
    image: "/rectifier-module.jpg",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const getCardStyle = (index) => {
    const absIndex = (index - currentIndex + products.length) % products.length;

    // Mobile: single centered card
    if (isMobile) {
      if (absIndex === 0) {
        return {
          transform: "translateX(0%) scale(1)",
          opacity: 1,
          zIndex: 30,
        };
      }
      return {
        transform: "translateX(0%) scale(0.8)",
        opacity: 0,
        zIndex: 0,
      };
    }

    // Desktop: stacked layout
    if (absIndex === 0) {
      return {
        transform: "translateX(0%) scale(1.2) translateY(-15px)",
        zIndex: 30,
        opacity: 1,
      };
    }
    if (absIndex === 1) {
      return {
        transform: "translateX(90%) scale(0.9)",
        zIndex: 20,
        opacity: 1,
      };
    }
    if (absIndex === 2) {
      return {
        transform: "translateX(145%) scale(0.75)",
        zIndex: 10,
        opacity: 0.6,
      };
    }
    if (absIndex === products.length - 1) {
      return {
        transform: "translateX(-90%) scale(0.9)",
        zIndex: 20,
        opacity: 1,
      };
    }
    if (absIndex === products.length - 2) {
      return {
        transform: "translateX(-145%) scale(0.75)",
        zIndex: 10,
        opacity: 0.6,
      };
    }
    return { transform: "translateX(0%) scale(0.5)", opacity: 0, zIndex: 0 };
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#302222] to-[#1a1212] min-h-[400px] md:min-h-[500px] flex items-center">
      <div className="mx-auto w-full px-4 py-8 md:py-12">
        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards Container */}
          <div className="relative w-full max-w-5xl mx-auto h-[280px] md:h-[350px] flex justify-center items-center">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="absolute transition-all duration-700 ease-out"
                style={getCardStyle(index)}
              >
                <div className="bg-white shadow-2xl rounded-sm overflow-hidden w-[220px] h-[260px] md:w-[220px] md:h-[280px] border-4 border-gray-200 hover:border-[#f5c842] transition-all">
                  <div className="w-full h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-1 bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30 bg-[#f5c842] hover:bg-[#ffd700] text-gray-900 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-30 bg-[#f5c842] hover:bg-[#ffd700] text-gray-900 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
          </button>
        </div>

        {/* Product Title & Description */}
        <div className="text-center mt-1 md:mt-1 px-4">
          <h3 className="text-[#f5c842] font-bold text-xl md:text-3xl tracking-wide drop-shadow-lg mb-2">
            {products[currentIndex].name}
          </h3>
          <div className="flex justify-center gap-2 mt-4">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#f5c842] w-8 md:w-12"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
