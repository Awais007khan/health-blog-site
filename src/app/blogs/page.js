import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

import { blogs } from "@/data/blogData";

export const metadata = {
  title: "Health Blogs",
  description: "Explore health, fitness, and wellness articles.",
};

const Blogs = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Health Articles & Blogs
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert-backed articles on nutrition,
            fitness, wellness, and healthy lifestyle habits.
          </p>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blogs;