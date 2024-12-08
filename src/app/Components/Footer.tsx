import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div>
          <h1 className="font-bold text-xl mb-4">Funiro.</h1>
          <address className="not-italic text-gray-600 text-sm leading-6">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900 transition">Payment Options</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
