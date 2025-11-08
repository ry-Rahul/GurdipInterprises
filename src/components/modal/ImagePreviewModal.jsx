import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import { Check } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ImagePreviewModal({
  isOpen,
  onClose,
  images = [],
  product,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !product) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Detect YouTube or video URLs (for embedded video thumbnails)
  const isVideo = (src) =>
    src.includes("youtube.com") || src.includes("youtu.be");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center overflow-y-auto p-4"
      onClick={onClose}
    >
      <div
        className="relative border bg-white w-full max-w-5xl rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- CLOSE BUTTON --- */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-gray-700 transition"
        >
          <X size={18} />
        </button>

        {/* --- LEFT: THUMBNAILS --- */}
        <div className="bg-gray-50 w-full md:w-24 p-2 border-r border-gray-200 flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto justify-center md:justify-start">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative border rounded-md cursor-pointer overflow-hidden w-20 h-20 flex-shrink-0 ${
                idx === currentIndex
                  ? "border-[#EA4E02] ring-2 ring-[#EA4E02]"
                  : "border-gray-300"
              }`}
            >
              {isVideo(img) ? (
                <>
                  <iframe
                    src={img.replace("watch?v=", "embed/")}
                    title="Video preview"
                    className="w-full h-full object-cover"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play size={26} className="text-white" />
                  </div>
                </>
              ) : (
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          ))}
        </div>

        {/* --- CENTER: MAIN IMAGE / VIDEO --- */}
        <div className="relative flex-1 flex justify-center items-center bg-gray-100 overflow-hidden">
          {isVideo(images[currentIndex]) ? (
            <iframe
              src={images[currentIndex].replace("watch?v=", "embed/")}
              title="Product video"
              className="w-full h-[50vh] max-h-[500px]"
              allow="autoplay; encrypted-media"
            ></iframe>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`product-${currentIndex}`}
              className="max-h-[80vh] max-w-full object-contain"
            />
          )}

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md p-2 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md p-2 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* --- RIGHT: PRODUCT DETAILS --- */}
        <div className="md:w-1/3 bg-white p-5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-1 text-[#EA4E02]">
            {product.name}
          </h2>

          {product.price && (
            <p className="text-gray-800 text-lg font-semibold mb-3">
              {product.price}{" "}
              <span className="text-sm text-gray-500 font-normal">/ Piece</span>
            </p>
          )}

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            {Object.entries(product.details || {})
              .filter(([key]) => !["image", "description"].includes(key))
              .slice(0, 6)
              .map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </span>{" "}
                  {value}
                </p>
              ))}
          </div>

          <div className="p-3 border rounded-md bg-gray-50 mb-3 mt-12">
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Sold By:</span> DS Aqua
              Engineering
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                <span>TrustSEAL Verified</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 flex items-center justify-center bg-sky-400 rounded-full">
                  <Star size={12} fill="white" />
                </div>
                <span>Star Supplier</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mt-3">
            <label className="block text-sm font-semibold mb-1">
              Get customised quotes from us
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-2">
              <div className="px-3 py-2 bg-gray-100 flex items-center gap-1">
                <span>🇮🇳</span>
                <span className="text-sm">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile"
                className="flex-1 p-2 outline-none text-sm"
              />
            </div>
            <button className="bg-[#17846F] hover:bg-[#147560] text-white font-semibold py-2 px-4 rounded-md w-full transition">
              Get Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
