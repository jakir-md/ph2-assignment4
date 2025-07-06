import React from "react";
import { Link } from "react-router"; // Remove if not using React Router

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-sm md:text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            My Library
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/allBooks" className="text-sm md:text-xl hover:text-gray-200">
              All Books
            </Link>
          </li>
          <li>
            <Link to="/addBook" className="text-sm md:text-xl hover:text-gray-200">
              Add Book
            </Link>
          </li>
          <li>
            <Link to="/borrowSummary" className="text-sm md:text-xl hover:text-gray-200">
              Borrow Summary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
