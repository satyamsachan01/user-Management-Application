import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-bold text-xl sm:text-2xl tracking-wide">User Manager</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Create User
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-500 px-2 pt-2 pb-4 space-y-1 transition-all duration-300">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Create User
          </Link>
        </div>
      )}
    </nav>
  );
}
