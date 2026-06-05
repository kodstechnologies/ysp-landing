// Path: src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import TermsConditions from "./pages/TermsConditions";
import DeleteAccount from "./pages/DeleteAccount";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
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
    </>
  );
}
