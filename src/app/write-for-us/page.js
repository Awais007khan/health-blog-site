import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Write For Us",
  description: "Submit your health and wellness articles.",
};

const WriteForUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-green-50 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Write For Us
          </h1>

          <p className="text-lg text-gray-600">
            Share your expertise with our wellness community.
          </p>

        </div>

      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Submission Guidelines
          </h2>

          <ul className="space-y-4 text-gray-700 mb-10">

            <li>✔ Original health-related content only</li>

            <li>✔ Minimum 800+ words recommended</li>

            <li>✔ Proper headings and formatting required</li>

            <li>✔ No plagiarism or AI-spam content</li>

            <li>✔ Wellness, fitness, nutrition, and lifestyle topics preferred</li>

          </ul>

          {/* Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <input
              type="text"
              placeholder="Article Topic"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your article..."
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600"
            ></textarea>

            <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition">
              Submit Article
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default WriteForUs;