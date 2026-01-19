// Path: src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import TermsConditions from "./pages/TermsConditions";
import DeleteAccount from "./pages/DeleteAccount";

/**
 * Shramik Landing Page - Main Entry
 * Integrates all responsive components into a single-page flow.
 */
export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/delete" element={<DeleteAccount />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
