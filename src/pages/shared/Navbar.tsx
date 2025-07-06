import React from "react";
import { Link } from "react-router"; // Remove if not using React Router

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Library</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              All Books
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-gray-200">
              Add Book
            </Link>
          </li>
          <li>
            <Link to="/borrowSummary" className="hover:text-gray-200">
              Borrow Summary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
