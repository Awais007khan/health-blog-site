import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogs } from "@/data/blogData";

export async function generateMetadata({ params }) {
  const blog = blogs.find(
    (item) => item.id === Number(params.id)
  );

  return {
    title: blog?.title || "Blog",
    description: blog?.description || "Health Blog Article",
  };
}

const SingleBlog = ({ params }) => {
  const blog = blogs.find(
    (item) => item.id === Number(params.id)
  );

  if (!blog) {
    return (
      <h1 className="text-center text-4xl py-20">
        Blog Not Found Coming Soon...
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-20">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-3xl mb-10"
        />

        <span className="text-green-600 font-semibold">
          {blog.category}
        </span>

        <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-8">
          {blog.title}
        </h1>

        <div className="space-y-6 text-gray-700 leading-8 text-lg">

          <p>
            {blog.description}
          </p>

          <p>
            Healthy living begins with small daily habits.
            Proper nutrition, regular exercise, and stress management
            play a major role in maintaining overall wellness.
          </p>

          <p>
            Wellness-focused lifestyles improve both mental and physical health,
            helping people feel more energetic and productive.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default SingleBlog;