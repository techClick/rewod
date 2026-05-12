import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmptyPage from "./pages/EmptyPage";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="app">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="main">
        <main className="content">
          <div
            className="mobile-hamburger"
            role="button"
            aria-label="Open sidebar"
            onClick={() => setMobileOpen && setMobileOpen((s) => !s)}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="#0B1220"/><rect y="10" width="18" height="2" rx="1" fill="#0B1220"/></svg>
          </div>
          <Routes>
            <Route path="/" element={<EmployeeDashboard setMobileOpen={setMobileOpen} />} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
