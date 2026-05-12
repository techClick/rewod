import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || path === "/command";

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

  const iconMap = {
    cmd: "command",
    hr: "people",
    pay: "payroll",
    loans: "loans",
    tools: "tools",
    inv: "inventory",
    fleet: "fleet",
    costs: "costReports",
    sys: "settings",
  };

  // HR sub-pages (keeps the primary HR item active when any of these are visited)
  const hrItems = [
    { title: "Employee Dashboard", path: "/" },
    { title: "People Directory", path: "/directory" },
    { title: "Recruitment", path: "/recruitment" },
    { title: "Request Center", path: "/request" },
    { title: "HR Expenses", path: "/hr-expenses" },
    { title: "ID Card Management", path: "/id-cards" },
    { title: "Executive HR Audit Dashbo...", path: "/exec-audit" },
  ];

  const hrPaths = hrItems.map((i) => i.path);
  const hrActive = hrPaths.includes(location.pathname);

  const subIsActive = (path) => location.pathname === path;
  const [attendanceOpen, setAttendanceOpen] = useState(false);

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
            <Link
              to={it.path}
              key={it.key}
              onClick={() => setMobileOpen(false)}
              className={`primary-item ${it.key === "hr" ? (hrActive ? "active" : "") : (isActive(it.path) ? "active" : "")}`}
            >
              <div className="pi-icon"><Icon name={iconMap[it.key] || "people"} size={18} /></div>
              <div className="pi-label">{it.title}</div>
              {it.badge ? <div className="pi-badge">{it.badge}</div> : null}
            </Link>
          ))}
        </div>

        <div className="primary-footer">
          <div className="pi-settings"><Icon name="settings" size={16} /> <span>Settings</span></div>
        </div>
      </div>

      {hrActive && (
        <aside className="nav-sidebar">
          <div className="nav-section">
            <div className="nav-section-head">HR & People</div>
            <div className="nav-search-wrap">
              <div className="nav-search-icon"><Icon name="search" size={16} /></div>
              <input className="nav-search" placeholder="Search employees, assets, vehicles..." />
            </div>

            <div className="nav-group-title">EMPLOYEE CONTROL</div>
            <div className="subnav">
              <Link to="/" className={`sub ${subIsActive("/") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="dashboard" size={16} /></span>
                <span className="sub-label">Employee Dashboard</span>
              </Link>
            </div>

            <div className="nav-group-title">RECRUITMENT & MOVEMENT</div>
            <div className="subnav">
              <Link to="/recruitment" className={`sub ${subIsActive("/recruitment") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="recruitment" size={16} /></span>
                <span className="sub-label">Recruitment</span>
              </Link>
            </div>

            <div
              className="nav-group-title attendance-toggle"
              onClick={() => setAttendanceOpen((s) => !s)}
              role="button"
              aria-expanded={attendanceOpen}
            >
              <span>ATTENDANCE & WORK HISTORY</span>
              <span className={`chev ${attendanceOpen ? "open" : ""}`} aria-hidden>
                ▸
              </span>
            </div>
            {attendanceOpen && (
              <div className="subnav">
                <Link to="/attendance" className={`sub ${subIsActive("/attendance") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                  <span className="sub-icon"><Icon name="attendance" size={16} /></span>
                  <span className="sub-label">Attendance</span>
                </Link>
              </div>
            )}

            <div className="nav-group-title">REQUEST MANAGEMENT</div>
            <div className="subnav">
              <Link to="/request" className={`sub ${subIsActive("/request") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="request" size={16} /></span>
                <span className="sub-label">Request Center</span>
              </Link>
            </div>

            <div className="nav-group-title">HR FINANCE & EXPENSES</div>
            <div className="subnav">
              <Link to="/hr-expenses" className={`sub ${subIsActive("/hr-expenses") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="hrExpenses" size={16} /></span>
                <span className="sub-label">HR Expenses</span>
              </Link>
            </div>

            <div className="nav-group-title">ID CARD MANAGEMENT</div>
            <div className="subnav">
              <Link to="/id-cards" className={`sub ${subIsActive("/id-cards") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="idCards" size={16} /></span>
                <span className="sub-label">ID Card Management</span>
              </Link>
            </div>

            <div className="nav-group-title">PEOPLEFIRST — DASHBOARDS</div>
            <div className="subnav">
              <Link to="/exec-audit" className={`sub ${subIsActive("/exec-audit") ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                <span className="sub-icon"><Icon name="execAudit" size={16} /></span>
                <span className="sub-label">Executive HR Audit Dashbo...</span>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
