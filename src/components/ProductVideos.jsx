// ✅ List of product videos
const videos = [
  {
    id: 1,
    title: "Siemens Programming Cable",
    thumbnail: "/siemens-programming-video.jpg",
  },
  {
    id: 2,
    title: "Siemens PLC S7 300",
    thumbnail: "/siemens-plc-video.jpg",
  },
];

export default function ProductVideos() {
  return (
    // ✅ Outer section with dark theme and responsive padding
    <section className="bg-[#3d2f2a] py-8 sm:py-12">
      {/* ✅ Centered container with responsive side padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-[#f5c842] text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Product Videos
        </h2>

        {/* ✅ Responsive grid layout (1 col on mobile, 2 on tablet, 3 on large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video) => (
            // ✅ Video Card
            <div
              key={video.id}
              className="bg-[#2a2220] rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              {/* ✅ Thumbnail Container */}
              <div className="relative w-full h-48 sm:h-64">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* ✅ Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label={`Play video: ${video.title}`}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all shadow-lg"
                  >
                    {/* Play icon using borders */}
                    <div className="w-0 h-0 border-t-[6px] sm:border-t-8 border-t-transparent border-l-[10px] sm:border-l-[12px] border-l-white border-b-[6px] sm:border-b-8 border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>

              {/* ✅ Video Title + CTA */}
              <div className="p-3 sm:p-4 text-center sm:text-left">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {video.title}
                </h3>

                {/* CTA Button */}
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 sm:py-2.5 rounded transition-colors text-sm sm:text-base">
                  Get Best Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
