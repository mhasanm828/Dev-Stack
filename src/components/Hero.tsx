import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A]">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 text-gray-600">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
                Explore Technologies
              </button>

              <button className="px-6 py-3 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-pink-400 hover:text-pink-500 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Development Stack"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;