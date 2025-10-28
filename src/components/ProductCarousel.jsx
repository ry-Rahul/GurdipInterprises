import "slick-carousel/slick/slick.css"; // base slick CSS (required)
import "slick-carousel/slick/slick-theme.css"; // theme (optional, can remove)

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import Slider from "react-slick"; // import react-slick slider

// product list
const products = [
  {
    id: 1,
    name: "6Es7 9720Ca230Xa0 Siemens Plc Programming Cable",
    image: "/siemens-programming-cable.jpg",
  },
  {
    id: 2,
    name: "Siemens PLC Module",
    image: "/siemens-plc-module.jpg",
  },
  {
    id: 3,
    name: "Programming Cable USB",
    image: "/usb-programming-cable.jpg",
  },
  {
    id: 4,
    name: "TS1070 Series",
    image: "/industrial-control-panel.jpg",
  },
  {
    id: 5,
    name: "HMI Touch Panel",
    image: "/hmi-touch-panel.jpg",
  },
];

// custom next button
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-[#2d2420]/70 hover:bg-[#2d2420]/90 text-white rounded-full w-12 h-12 flex items-center justify-center"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

// custom prev button
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-[#2d2420]/70 hover:bg-[#2d2420]/90 text-white rounded-full w-12 h-12 flex items-center justify-center"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export default function ProductCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // slick settings
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#3d2f2a] py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* slick carousel */}
        <Slider {...settings} className="relative overflow-hidden">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ease-in-out px-2 ${
                index === activeSlide
                  ? "scale-110 opacity-100 z-30"
                  : "scale-90 opacity-70 z-10"
              }`}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-gray-200 mx-auto w-72 h-72 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* title under carousel */}
        <div className="text-center mt-8">
          <h3 className="text-[#f5c842] text-xl font-bold">
            {products[activeSlide % products.length].name}
          </h3>
        </div>
      </div>
    </section>
  );
}
