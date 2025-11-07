import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Siemens Programming Cable",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "USB Programming Cable",
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Siemens PLC S7 300",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Industrial Sensor",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313e1f77c0f?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Control Modules",
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=400&fit=crop",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  // Calculate positions for the stacked effect - NO ROTATION
  const getCardStyle = (index) => {
    // const diff = index - currentIndex;
    const absIndex = (index - currentIndex + products.length) % products.length;

    // Center card
    if (absIndex === 0) {
      return {
        transform: "translateX(0%) scale(1.15) translateY(-10px)",
        zIndex: 30,
        opacity: 1,
      };
    }

    // Left cards
    if (absIndex === products.length - 1) {
      return {
        transform: "translateX(-85%) scale(0.85)",
        zIndex: 20,
        opacity: 1,
      };
    }
    if (absIndex === products.length - 2) {
      return {
        transform: "translateX(-130%) scale(0.75) translateY(0px)",
        zIndex: 10,
        opacity: 1,
      };
    }

    // Right cards
    if (absIndex === 1) {
      return {
        transform: "translateX(85%) scale(0.85)",
        zIndex: 20,
        opacity: 1,
      };
    }
    if (absIndex === 2) {
      return {
        transform: "translateX(130%) scale(0.75) translateY(0px)",
        zIndex: 10,
        opacity: 1,
      };
    }

    // Hidden cards
    return {
      transform: "translateX(0%) scale(0.5)",
      zIndex: 0,
      opacity: 0,
    };
  };

  return (
    <div className="relative overflow-hidden bg-[#302222] flex items-center">
      <div className=" mx-auto w-full py-4 mt-4">
        <div
          className="relative flex items-center justify-center py-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards */}
          <div className="relative w-full max-w-4xl h-52 flex  justify-center ">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="absolute transition-all duration-700 ease-out"
                style={getCardStyle(index)}
              >
                <div className="bg-white  shadow-2xl border-8 border-gray-300 overflow-hidden w-44 h-52">
                  <div className="w-full  flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-20 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white text-gray-800 rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all hover:scale-110 border-2 border-gray-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-20 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white text-gray-800 rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all hover:scale-110 border-2 border-gray-300"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Product Title */}
        <div className="text-center ">
          <h3 className="text-[#f5c842] font-bold tracking-wide drop-shadow-lg">
            {products[currentIndex].name}
          </h3>
        </div>
      </div>
    </div>
  );
}
