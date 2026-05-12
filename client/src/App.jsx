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
          <Routes>
            <Route path="/" element={<EmployeeDashboard setMobileOpen={setMobileOpen} />} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
