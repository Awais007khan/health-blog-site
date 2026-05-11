import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-500">HealthBlog</h2>

          <p className="text-gray-400">
            Trusted source for health, fitness, nutrition, and wellness content.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Blogs</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4">Categories</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Fitness</li>
            <li>Nutrition</li>
            <li>Mental Health</li>
            <li>Lifestyle</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-green-500 cursor-pointer transition" />

            <FaInstagram className="hover:text-green-500 cursor-pointer transition" />

            <FaTwitter className="hover:text-green-500 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 HealthBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
