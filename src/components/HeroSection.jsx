const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <p className="text-green-600 font-semibold mb-4">
            Trusted Health & Wellness Blog
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
            Your Journey To Better Health Starts Here
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Discover expert-backed articles about fitness, wellness, nutrition,
            and healthy lifestyle habits.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Explore Articles
            </button>

            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Healthy Lifestyle"
            className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
