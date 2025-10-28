const galleryItems = [
  {
    id: 1,
    name: "Siemens Programming Cable",
    image: "/siemens-programming-cable.jpg",
  },
  {
    id: 2,
    name: "Siemens 6es7972",
    image: "/siemens-6es7972.jpg",
  },
  {
    id: 3,
    name: "Bge Y20-A1-174-3",
    image: "/industrial-connector.jpg",
  },
  {
    id: 4,
    name: "Siemens PLC S7 300",
    image: "/siemens-plc-s7-300.jpg",
  },
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

export default function ShowcaseGallery() {
  return (
    <section className="bg-[#3d2f2a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2a2220] rounded-lg p-6">
          <h2 className="text-[#f5c842] text-2xl font-bold mb-6">
            Showcase Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-center text-gray-800 line-clamp-2">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
