import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const hrItems = [
    { title: "Employee Dashboard", path: "/" },
    { title: "People Directory", path: "/directory" },
    { title: "Recruiting", path: "/recruiting" },
  ];

  return (
    <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
      <div className="logo">Rewod HR</div>
      <div className="section">
        <div className="nav-item active">
          HR & People
        </div>
        <div className="subnav">
          {hrItems.map((it) => (
            <Link key={it.path} to={it.path} onClick={() => setMobileOpen(false)} className={`sub ${isActive(it.path) ? "active" : ""}`}>
              {it.title}
            </Link>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "auto", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
        © {new Date().getFullYear()} Rewod
      </div>
    </aside>
  );
};

export default Sidebar;
