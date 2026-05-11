import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";

export const metadata = {
  title: "Categories",
  description: "Explore health blog categories.",
};

const Categories = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-green-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Browse Categories
          </h1>

          <p className="text-lg text-gray-600">
            Explore topics that matter to your health and wellness.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

          <CategoryCard
            title="Lifestyle"
            image="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
          />

          <CategoryCard
            title="Wellness"
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          />

          <CategoryCard
            title="Healthy Living"
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          />

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Categories;