import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="text-xs text-gray-700 hover:text-pink-500 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-xs text-gray-700 hover:text-pink-500 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-xs text-gray-700 hover:text-pink-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#home" className="block text-xs text-gray-500 hover:text-pink-500">
                Home
              </a>

              <a
                href="#technologies"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#about" className="block text-xs text-gray-500 hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="block text-xs text-gray-500 hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="block text-xs text-gray-500 hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#" className="block text-xs text-gray-500 hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="block text-xs text-gray-500 hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-400 hover:text-pink-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;