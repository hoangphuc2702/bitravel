import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-white text-gray-600 text-sm flex justify-between px-6 py-2">
        <div className="flex gap-4">
          <span>📞 +9154 0352 3524</span>
          <span>✉️ Booking@skyfare.co</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Link href="#" className="hover:text-blue-600"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-pink-500"><FaInstagram /></Link>
          </div>
          <Link href="/login" className="px-3 py-1 hover:bg-gray-200 rounded">Login</Link>
          <Link href="/signup" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</Link>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">SKYFARE</div>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/tours" className="hover:text-blue-600">Tours</Link></li>
            <li><Link href="/faqs" className="hover:text-blue-600">Faqs</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
