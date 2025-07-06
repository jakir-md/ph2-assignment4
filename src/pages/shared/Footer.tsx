export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2"> MyLibrary</h2>
          <p className="text-sm text-gray-400">
            Your smart library management companion.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Catalog</a></li>
            <li><a href="#" className="hover:text-white">Borrowed Books</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Feedback</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@MyLibrary.com</p>
          <p className="text-sm text-gray-400">Phone: +880 111-111-111</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyLibrary. All rights reserved.
      </div>
    </footer>
  );
}
