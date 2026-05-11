const Newsletter = () => {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Subscribe To Our Newsletter
        </h2>

        <p className="text-green-100 text-lg mb-8">
          Get weekly health tips and wellness advice directly in your inbox.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full w-full md:w-96 bg-white outline-none"
          />

          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
