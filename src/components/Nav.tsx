import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img  className="h-9 w-auto"  src={logo} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8"> 
            <a href="#home" className="text-sm text-pink-500 font-medium hover:text-pink-600" > Home </a>

            <a href="#technologies" className="text-sm text-gray-600 hover:text-pink-500 transition" > Technologies </a>

            <a href="#projects" className="text-sm text-gray-600 hover:text-pink-500 transition" > Projects </a>

            <a href="#about" className="text-sm text-gray-600 hover:text-pink-500 transition"> About </a>

            <a href="#contact" className="text-sm text-gray-600 hover:text-pink-500 transition" > Contact </a>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-gray-600 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-pink-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;