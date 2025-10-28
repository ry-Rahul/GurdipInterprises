import { Mail, MessageSquare, Phone } from "lucide-react"; // Icons for contact actions

export default function ContactSection() {
  return (
    // Section background and padding
    <section className="bg-[#3d2f2a] py-12">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact box with top border accent */}
        <div className="bg-[#2a1f1c] border-t-4 border-[#e85d2a] p-8 rounded-md">
          {/* Section title */}
          <h2 className="text-2xl font-bold text-white bg-[#e85d2a] inline-block px-6 py-2 mb-6 rounded">
            Contact Us
          </h2>

          {/* Contact details and buttons layout */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left side: CEO and address details */}
            <div className="text-white space-y-4">
              <div>
                <p className="font-bold text-lg">Gurdip Yadav (CEO)</p>
                <p className="text-gray-300">Gurdip Enterprise</p>
              </div>

              {/* Company address */}
              <p className="text-gray-300 max-w-xl leading-relaxed">
                Ground Floor, Block No-E, Shop No-4, Sumel Business Park 7, Near
                Soni Ni Chali, Rakhiyal
                <br />
                Ahmedabad - 380023, Gujarat, India
              </p>

              {/* Call button */}
              <button className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-6 py-2 rounded flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" />
                Call Us: 08048976553
              </button>
            </div>

            {/* Right side: email and SMS contact buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" />
                Contact via E-mail
              </button>

              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Contact via SMS
              </button>
            </div>
          </div>

          {/* Social share section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center gap-4">
              <span className="text-white font-medium">Share Us :</span>

              {/* Social media icons */}
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  f
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#1da1f2] rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  t
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
