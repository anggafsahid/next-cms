// components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Palm Code</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <span className="text-white hover:text-gray-300">Home</span>
          </Link>
          <Link href="/pages">
            <span className="text-white hover:text-gray-300">Pages</span>
          </Link>
          <Link href="/media">
            <span className="text-white hover:text-gray-300">Media</span>
          </Link>
          <Link href="/teams">
            <span className="text-white hover:text-gray-300">Teams</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
