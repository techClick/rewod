import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const primaryItems = [
    { key: "cmd", title: "Command Center", path: "/command", badge: 0 },
    { key: "hr", title: "HR & People", path: "/", badge: 0 },
    { key: "pay", title: "Payroll & Compensation", path: "/payroll", badge: 0 },
    { key: "loans", title: "Loans & Recoveries", path: "/loans", badge: 2 },
    { key: "tools", title: "Tools & Asset Management", path: "/tools", badge: 0 },
    { key: "inv", title: "Inventory & Procurement", path: "/inventory", badge: 4 },
    { key: "fleet", title: "Fleet & Compliance", path: "/fleet", badge: 3 },
    { key: "costs", title: "Cost Reports", path: "/costs", badge: 0 },
    { key: "sys", title: "System Administration", path: "/system", badge: 0 },
  ];

  const hrItems = [
    { title: "Employee Dashboard", path: "/" },
    { title: "People Directory", path: "/directory" },
    { title: "Recruitment", path: "/recruitment" },
    { title: "Request Center", path: "/request" },
    { title: "HR Expenses", path: "/hr-expenses" },
    { title: "ID Card Management", path: "/id-cards" },
    { title: "Executive HR Audit Dashbo...", path: "/exec-audit" },
  ];

  return (
    <div className={`sidebar-wrap ${mobileOpen ? "open" : ""}`}>
      <div className="primary-sidebar">
        <div className="sidebar-brand">
          <div className="avatar avatar-yellow">$</div>
          <div className="brand-text">
            <div className="brand-name">Stephanet</div>
            <div className="brand-loc">HQ • Rivers State</div>
          </div>
        </div>

        <div className="primary-list">
          {primaryItems.map((it) => (
            <Link to={it.path} key={it.key} onClick={() => setMobileOpen(false)} className={`primary-item ${isActive(it.path) ? "active" : ""}`}>
              <div className="pi-icon">{it.title[0]}</div>
              <div className="pi-label">{it.title}</div>
              {it.badge ? <div className="pi-badge">{it.badge}</div> : null}
            </Link>
          ))}
        </div>

        <div className="primary-footer">
          <div className="pi-settings">Settings</div>
        </div>
      </div>

      <aside className="nav-sidebar">
        <div className="nav-section">
          <div className="nav-section-head">HR & People</div>
          <input className="nav-search" placeholder="Search..." />

          <div className="nav-group-title">EMPLOYEE CONTROL</div>
          <div className="subnav">
            <Link to="/" className={`sub ${isActive("/") ? "active" : ""}`}>Employee Dashboard</Link>
          </div>

          <div className="nav-group-title">RECRUITMENT & MOVEMENT</div>
          <div className="subnav">
            <Link to="/recruitment" className="sub">Recruitment</Link>
          </div>

          <div className="nav-group-title">ATTENDANCE & WORK HISTORY</div>
          <div className="subnav">
            <Link to="/attendance" className="sub">Attendance</Link>
          </div>

          <div className="nav-group-title">REQUEST MANAGEMENT</div>
          <div className="subnav">
            <Link to="/request" className="sub">Request Center</Link>
          </div>

          <div className="nav-group-title">HR FINANCE & EXPENSES</div>
          <div className="subnav">
            <Link to="/hr-expenses" className="sub">HR Expenses</Link>
          </div>

          <div className="nav-group-title">ID CARD MANAGEMENT</div>
          <div className="subnav">
            <Link to="/id-cards" className="sub">ID Card Management</Link>
          </div>

          <div className="nav-group-title">PEOPLEFIRST — DASHBOARDS</div>
          <div className="subnav">
            <Link to="/exec-audit" className="sub">Executive HR Audit Dashbo...</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
