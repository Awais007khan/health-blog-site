import Link from "next/link";

const BlogCard = ({ id, image, category, title, description }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-green-600 font-semibold text-sm">{category}</span>

        <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-4 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

        {/* Dynamic Blog Link */}
        <Link
          href={`/blog/${id}`}
          className="inline-block text-green-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
