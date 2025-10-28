// List of product videos
const videos = [
  {
    id: 1,
    title: "Siemens Programming Cable",
    thumbnail: "/siemens-programming-video.jpg",
  },
  { id: 2, title: "Siemens PLC S7 300", thumbnail: "/siemens-plc-video.jpg" },
];

export default function ProductVideos() {
  return (
    // Section container with dark brown background and vertical padding
    <section className="bg-[#3d2f2a] py-12">
      {/* Center content with maximum width */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-[#f5c842] text-2xl font-bold mb-8">
          Product Videos
        </h2>

        {/* Responsive grid for video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            // Each video card container
            <div
              key={video.id}
              className="bg-[#2a2220] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Thumbnail section */}
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    {/* Triangle play icon using borders */}
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Video title and CTA button */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-3">{video.title}</h3>

                {/* Tailwind-styled "Get Best Quote" button */}
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 rounded transition-colors">
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
