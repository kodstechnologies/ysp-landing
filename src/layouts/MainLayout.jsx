// Path: src/layouts/MainLayout.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * MainLayout ensures consistent responsiveness across all viewports.
 */
export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-100">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
