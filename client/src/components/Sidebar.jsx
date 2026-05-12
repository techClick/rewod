import React, { useState, useEffect } from "react";
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
  // Each item includes a `group` and `icon` so we can render the same
  // UI by iterating over `hrItems`.
  const hrItems = [
    { title: "Employee Dashboard", path: "/", icon: "dashboard", group: "EMPLOYEE CONTROL" },
    { title: "Recruitment", path: "/recruitment", icon: "recruitment", group: "RECRUITMENT & MOVEMENT" },
    { title: "Attendance", path: "/attendance", icon: "attendance", group: "ATTENDANCE & WORK HISTORY", toggle: true },
    { title: "Request Center", path: "/request", icon: "request", group: "REQUEST MANAGEMENT" },
    { title: "HR Expenses", path: "/hr-expenses", icon: "hrExpenses", group: "HR FINANCE & EXPENSES" },
    { title: "ID Card Management", path: "/id-cards", icon: "idCards", group: "ID CARD MANAGEMENT" },
    { title: "Executive HR Audit Dashbo...", path: "/exec-audit", icon: "execAudit", group: "PEOPLEFIRST — DASHBOARDS" },
  ];

  const hrPaths = hrItems.map((i) => i.path);
  const hrActive = hrPaths.includes(location.pathname);

  const hrGroups = [
    "EMPLOYEE CONTROL",
    "RECRUITMENT & MOVEMENT",
    "ATTENDANCE & WORK HISTORY",
    "REQUEST MANAGEMENT",
    "HR FINANCE & EXPENSES",
    "ID CARD MANAGEMENT",
    "PEOPLEFIRST — DASHBOARDS",
  ];

  const subIsActive = (path) => location.pathname === path;
  const [attendanceOpen, setAttendanceOpen] = useState(false);
  const [hrSubOpen, setHrSubOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const check = () => setIsSmallScreen(typeof window !== "undefined" && window.innerWidth <= 1000);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) setHrSubOpen(false);
  }, [isSmallScreen]);

  return (
    <>
      {isSmallScreen && (mobileOpen || hrSubOpen) && (
        <div
          className="backdrop show"
          onClick={() => {
            setMobileOpen(false);
            setHrSubOpen(false);
          }}
        />
      )}

    <div className={`sidebar-wrap ${mobileOpen ? "open" : ""} ${hrSubOpen ? "hr-open" : ""}`}>
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
              to={(it.path === "/" && hrActive) ? location.pathname : it.path}
              key={it.key}
              onClick={() => {
                if (it.key === "hr" && isSmallScreen) {
                  setHrSubOpen(true);
                  setMobileOpen(false);
                } else {
                  setHrSubOpen(false);
                  setMobileOpen(false);
                }
              }}
              className={`primary-item ${it.key === "hr" ? (hrActive ? "active" : "") : (isActive(it.path) ? "active" : "")}`}
            >
              <div className="pi-icon"><Icon name={iconMap[it.key] || "people"} size={18} /></div>
              <div className="pi-label">{it.title}</div>
              {it.badge ? <div className="pi-badge">{it.badge}</div> : null}
            </Link>
          ))}
        </div>

        <div className="primary-footer">
          <Link to="/settings" className="pi-settings" onClick={() => setMobileOpen(false)} aria-label="Settings">
            <Icon name="settings2" size={18} />
            <span>Settings</span>
          </Link>
        </div>
      </div>

      {((hrActive && !isSmallScreen) || hrSubOpen) && (
        <aside className="nav-sidebar">
          <div className="nav-section">
            <div className="nav-section-head">HR & People</div>
            <div className="nav-search-wrap">
              <input className="nav-search" placeholder="Search employees, assets, vehicles..." />
              <div className="nav-search-icon"><Icon name="search" size={16} /></div>
            </div>

            {hrGroups.map((group) => {
              const items = hrItems.filter((i) => i.group === group && !i.toggle);
              const toggleItems = hrItems.filter((i) => i.group === group && i.toggle);

              return (
                <React.Fragment key={group}>
                  {group === "ATTENDANCE & WORK HISTORY" ? (
                    <div
                      className="nav-group-title attendance-toggle"
                      onClick={() => setAttendanceOpen((s) => !s)}
                      role="button"
                      aria-expanded={attendanceOpen}
                    >
                      <span>{group}</span>
                      <span className={`chev ${attendanceOpen ? "open" : ""}`} aria-hidden>
                        ▸
                      </span>
                    </div>
                  ) : (
                    <div className="nav-group-title">{group}</div>
                  )}

                  {items.map((item) => (
                    <div className="subnav" key={item.path}>
                      <Link to={item.path} className={`sub ${subIsActive(item.path) ? "active" : ""}`} onClick={() => { setHrSubOpen(false); setMobileOpen(false); }}>
                        <span className="sub-icon"><Icon name={item.icon} size={16} /></span>
                        <span className="sub-label">{item.title}</span>
                      </Link>
                    </div>
                  ))}

                  {group === "ATTENDANCE & WORK HISTORY" && attendanceOpen && toggleItems.map((item) => (
                    <div className="subnav" key={item.path}>
                      <Link to={item.path} className={`sub ${subIsActive(item.path) ? "active" : ""}`} onClick={() => { setHrSubOpen(false); setMobileOpen(false); }}>
                        <span className="sub-icon"><Icon name={item.icon} size={16} /></span>
                        <span className="sub-label">{item.title}</span>
                      </Link>
                    </div>
                  ))}
                </React.Fragment>
              );
            })}
          </div>
        </aside>
      )}
    </div>
    </>
  );
};

export default Sidebar;
