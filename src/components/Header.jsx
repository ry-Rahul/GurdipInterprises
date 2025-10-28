import { Mail, Phone } from "lucide-react"; // Importing icons from lucide-react

export default function Header() {
  return (
    // Header container with dark background and white text
    <header className="bg-[#2a2220] text-white px-6 py-4">
      {/* Inner wrapper centered and spaced */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* ------------------- LEFT SIDE: Logo + Company Info ------------------- */}
        <div className="flex items-center gap-4">
          {/* Logo box with dark blue background */}
          <div className="bg-[#1a4d7a] p-3 rounded">
            {/* Stylized "J" logo */}
            <div className="text-2xl font-bold">
              <div className="flex items-center gap-1">
                <span className="text-white">J</span>
                <div className="flex flex-col">
                  <span className="text-white text-xs leading-none">=</span>
                  <span className="text-white text-xs leading-none">=</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Name + Address + GST */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide">JIA ENTERPRISE</h1>
            <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
              {/* Address */}
              <span className="flex items-center gap-1">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                  📍
                </span>
                Ahmedabad, Gujarat
              </span>
              {/* GST Number */}
              <span className="flex items-center gap-1">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                  ✓
                </span>
                GST No. 24BITPS0834A1ZC
              </span>
            </div>
          </div>
        </div>

        {/* ------------------- RIGHT SIDE: Contact + Search ------------------- */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Phone Button */}
          <button className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-semibold rounded-full px-6 py-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm">Call +91-8048976553</div>
              <div className="text-xs">86% Response Rate</div>
            </div>
          </button>

          {/* Email Button */}
          <button className="bg-[#e85d2a] hover:bg-[#d84d1a] text-white font-semibold rounded-full px-6 py-3 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Send Email
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Products/Services"
              className="border-0 focus:outline-none text-black px-4 py-2 w-64"
            />
            <button className="bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white px-6 py-2 rounded-none">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
