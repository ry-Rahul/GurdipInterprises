export default function WelcomeSection() {
  const companyInfo = [
    {
      title: "Nature of Business",
      value: "Service Provider and Others",
      icon: "📋",
    },
    {
      title: "Total Number of Employees",
      value: "Upto 10 People",
      icon: "👥",
    },
    {
      title: "GST Registration Date",
      value: "22-02-2022",
      icon: "📅",
    },
    {
      title: "Legal Status of Firm",
      value: "Proprietorship",
      icon: "⚖️",
    },
    {
      title: "Annual Turnover",
      value: "1.8 - 5 Cr",
      icon: "💰",
    },
    {
      title: "Import Export Code (IEC)",
      value: "BITPS0834A",
      icon: "🌐",
    },
    {
      title: "GST No.",
      value: "09CPEPS4868B1ZK",
      icon: "📄",
    },
  ];

  return (
    // ✅ Section Wrapper
    <section className="bg-[#3d2f2a] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ✅ Section Title */}
        <h2 className="text-[#f5c842] text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Welcome to Gurdip Enterprise
        </h2>

        {/* ✅ Company Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {companyInfo.map((info, index) => (
            <div
              key={index}
              className="flex sm:flex-row flex-col items-center sm:items-start gap-3 sm:gap-4 text-white bg-[#2a2220] p-3 sm:p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl sm:text-2xl text-black flex-shrink-0">
                {info.icon}
              </div>

              {/* Info Text */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-sm sm:text-base mb-1">
                  {info.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ IndiaMART Trust Seal Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <img
            src="/logo.png"
            alt="DS AQUA ENGINEERING"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
          <div className="text-center sm:text-left text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
              DS AQUA ENGINEERING
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Verified for authenticity and service excellence.
            </p>
          </div>
        </div>

        {/* ✅ Company Description */}
        <div className="text-white text-sm sm:text-base leading-relaxed">
          <p>
            Established as a <span className="font-semibold">Proprietor</span>{" "}
            firm in the year <span className="font-semibold">2019</span>, we{" "}
            <span className="font-semibold">DS AQUA ENGINEERING</span> are a
            leading <span className="font-semibold">Manufacturer</span> of a
            wide range of{" "}
            <span className="font-semibold">
              Brake Coil, Rubber Shut, Siemens MCCB
            </span>
            , etc.
          </p>

          <button
          disabled
          className="mt-4 bg-[#f5c842] hover:bg-[#e5b832] text-black px-5 py-2 rounded text-xs sm:text-sm font-semibold transition-colors disabled:bg-[#d4b842] disabled:cursor-not-allowed"
        >
          More...
        </button>

        </div>
      </div>
    </section>
  );
}
