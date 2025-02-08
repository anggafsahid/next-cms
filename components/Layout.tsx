// components/Layout.tsx

import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
