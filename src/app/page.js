import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import { blogs } from "@/data/blogData";

export const metadata = {
  title: "HealthBlog",
  description: "Modern health and wellness blog website",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>

          <button className="text-green-600 font-semibold">
            View All →
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Explore Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <CategoryCard
            title="Fitness"
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          />

          <CategoryCard
            title="Nutrition"
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          />

          <CategoryCard
            title="Mental Health"
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          />

        </div>
      </section>

      <Newsletter />

      <Footer />
    </>
  );
}