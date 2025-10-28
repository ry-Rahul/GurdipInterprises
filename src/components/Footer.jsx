export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8 mb-6 text-sm">
          <a href="/" className="hover:text-[#e85d2a]">
            Home
          </a>
          <span>|</span>
          <a href="/about" className="hover:text-[#e85d2a]">
            About Us
          </a>
          <span>|</span>
          <a href="/products" className="hover:text-[#e85d2a]">
            Our Product Range
          </a>
          <span>|</span>
          <a href="/sitemap" className="hover:text-[#e85d2a]">
            Site Map
          </a>
          <span>|</span>
          <a href="/contact" className="hover:text-[#e85d2a]">
            Contact Us
          </a>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            <p className="mb-1">
              © <span className="font-bold">Gurdip Enterprise</span>. All Rights
              Reserved (Terms of Use)
            </p>
            <p>Developed and Managed by IndiaMART InterMESH Limited</p>
          </div>

          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-red-600 font-bold text-xs">indiamart</div>
                <div className="text-xs">Member</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
