import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-600"
        >
          <FaHeartbeat />
          HealthBlog
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/blogs" className="hover:text-green-600 transition">
              Blogs
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className="hover:text-green-600 transition"
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/write-for-us"
              className="hover:text-green-600 transition"
            >
              Write For Us
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Subscribe
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
