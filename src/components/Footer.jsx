import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ✅ Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6 text-sm sm:text-base text-gray-300">
          <Link to="/" className="hover:text-[#e85d2a] transition-colors">
            Home
          </Link>
          <span className="hidden sm:inline text-gray-500">|</span>
          <Link to="/about" className="hover:text-[#e85d2a] transition-colors">
            About Us
          </Link>
          <span className="hidden sm:inline text-gray-500">|</span>
          <Link
            to="/products"
            className="hover:text-[#e85d2a] transition-colors text-center"
          >
            Our Product Range
          </Link>
          <span className="hidden sm:inline text-gray-500">|</span>
          <Link
            to="/sitemap"
            className="hover:text-[#e85d2a] transition-colors text-center"
          >
            Site Map
          </Link>
          <span className="hidden sm:inline text-gray-500">|</span>
          <Link
            to="/contact"
            className="hover:text-[#e85d2a] transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>

        {/* ✅ Divider line for separation on small screens */}
        <div className="block sm:hidden border-t border-gray-700 my-4"></div>

        {/* ✅ Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-0">
          {/* Left Text Section */}
          <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            <p className="mb-1">
              ©{" "}
              <span className="font-bold text-white">DS Aqua Engineering</span>.
              All Rights Reserved (Terms of Use)
            </p>
            <p>Developed and Managed by DS Aqua Engineering</p>
          </div>

          {/* Right: IndiaMART Badge */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded flex items-center justify-center shadow-md">
              <div className="text-center leading-tight">
                <img
                  src="/logo.png"
                  alt="DS Aqua Engineering"
                  className="w-16 h-16 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Small divider line for extra spacing on mobile */}
        <div className="mt-6 border-t border-gray-800 sm:hidden"></div>
      </div>
    </footer>
  );
}
