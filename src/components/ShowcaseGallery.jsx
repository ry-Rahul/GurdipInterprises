import { Carousel } from "antd";
import "antd/dist/reset.css"; // ✅ Import AntD base styles
import { useEffect, useRef } from "react";

// ✅ Gallery Items
const galleryItems = [
  { id: 1, name: "Siemens Programming Cable", image: "/siemens-programming-cable.jpg" },
  { id: 2, name: "Siemens 6es7972", image: "/siemens-6es7972.jpg" },
  { id: 3, name: "Bge Y20-A1-174-3", image: "/industrial-connector.jpg" },
  { id: 4, name: "Siemens PLC S7 300", image: "/siemens-plc-s7-300.jpg" },
  { id: 5, name: "Programming cable USB AC362", image: "/usb-programming-cable.jpg" },
  { id: 6, name: "Bge 1.5 Sew Eurodrive Rectifier", image: "/rectifier-module.jpg" },
];

export default function ShowcaseGallery() {
  const carouselRef = useRef(null);

  // ✅ Optional: Restart carousel automatically (for smoother looping on small sets)
  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current?.next();
    }, 2000); // change slide every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#3d2f2a] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2a2220] rounded-lg p-4 sm:p-6">
          {/* Heading */}
          <h2 className="text-[#f5c842] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
            Showcase Gallery
          </h2>

          {/* ✅ Ant Design Carousel (Horizontal Infinite Scroll) */}
          <Carousel
            ref={carouselRef}
            autoplay
            dots={false}
            infinite
            speed={800}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {galleryItems.map((item) => (
              <div key={item.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-xs sm:text-sm font-semibold text-center text-gray-800 line-clamp-2">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
