// pages/index.tsx

import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the CMS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Pages</h2>
          <p className="text-gray-600">Show all pages</p>
          <Link legacyBehavior href="/pages">
            <a className="text-blue-500 hover:underline">Go to Pages</a>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Media</h2>
          <p className="text-gray-600">Show all media</p>
          <Link legacyBehavior href="/media">
            <a className="text-blue-500 hover:underline">Go to Media</a>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Teams</h2>
          <p className="text-gray-600">Show all teams</p>
          <Link legacyBehavior href="/teams">
            <a className="text-blue-500 hover:underline">Go to Teams</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
