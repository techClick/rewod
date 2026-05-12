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
        <div className="brand">Base44</div>
        <div className="primary-list">
          {primaryItems.map((it) => (
            <Link to={it.path} key={it.key} onClick={() => setMobileOpen(false)} className={`primary-item ${isActive(it.path) ? "active" : ""}`}>
              <div className="pi-icon">{it.title[0]}</div>
              {it.badge ? <div className="pi-badge">{it.badge}</div> : null}
            </Link>
          ))}
        </div>
        <div className="primary-footer">
          <div className="pi-settings">⚙️</div>
        </div>
      </div>

      <aside className="nav-sidebar">
        <div className="nav-top">
          <div className="nav-user">
            <div className="avatar avatar-yellow">S</div>
            <div className="nav-user-info">
              <div className="nav-user-name">Stephanet</div>
              <div className="nav-user-loc">HQ • Rivers State</div>
            </div>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-section-head">HR & People</div>
          <input className="nav-search" placeholder="Search..." />

          <div className="nav-group-title">EMPLOYEE CONTROL</div>
          <div className="subnav">
            {hrItems.map((it) => (
              <Link key={it.path} to={it.path} onClick={() => setMobileOpen(false)} className={`sub ${isActive(it.path) ? "active" : ""}`}>
                {it.title}
              </Link>
            ))}
          </div>

          <div className="nav-group-title">PEOPLEFIRST — DASHBOARDS</div>
          <div className="subnav">
            <Link to="/empty" className="sub">Executive HR Audit Dashbo...</Link>
          </div>
        </div>

        <div style={{ marginTop: "auto", paddingTop: 18 }}>
          <div className="nav-footer">Settings</div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
