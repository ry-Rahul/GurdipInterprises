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
      value: "15-07-2020",
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
      value: "24BITPS0834A1ZC",
      icon: "📄",
    },
  ];

  return (
    <section className="bg-[#3d2f2a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#f5c842] text-2xl font-bold mb-8">
          Welcome to Gurdip Enterprise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {companyInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4 text-white">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{info.title}</h3>
                <p className="text-gray-300 text-sm">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-6 mb-6">
          <img
            src="/indiamart-trust-seal.jpg"
            alt="IndiaMART Trust Seal"
            className="w-32 h-32 object-contain"
          />
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">
              IndiaMART Trust Seal Verified
            </h3>
          </div>
        </div>

        <div className="text-white text-sm leading-relaxed">
          <p>
            Established as a <span className="font-semibold">Proprietor</span>{" "}
            firm in the year <span className="font-semibold">2011</span>, we{" "}
            <span className="font-semibold">"Gurdip Enterprise"</span> are a
            leading <span className="font-semibold">Manufacturer</span> of a
            wide range of{" "}
            <span className="font-semibold">
              Brake Coil, Rubber Shut, Siemens MCCB
            </span>
            , etc.
          </p>
          <button className="mt-4 bg-[#f5c842] hover:bg-[#e5b832] text-black px-4 py-1 rounded text-xs font-semibold">
            more...
          </button>
        </div>
      </div>
    </section>
  );
}
