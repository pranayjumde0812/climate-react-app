import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      Header
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t background-blur py-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Made By Pranay for Learning</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
