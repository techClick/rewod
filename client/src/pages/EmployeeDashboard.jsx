import React, { useEffect, useState } from "react";
import { fetchEmployeeDashboard } from "../api/api";
import ExecHeader from "../components/ExecHeader";
import AlertsList from "../components/AlertsList";

export default function EmployeeDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchEmployeeDashboard()
      .then((d) => {
        if (mounted) setData(d);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => (mounted = false);
  }, []);

  if (loading) return <div>Loading…</div>;
  if (!data) return <div>Unable to load data</div>;

  const { summary, alerts = [] } = data;

  return (
    <div>
      <div className="mobile-hamburger" aria-hidden="true">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="#0B1220"/><rect y="10" width="18" height="2" rx="1" fill="#0B1220"/></svg>
      </div>
      <div className="exec-topbar">
        <input className="global-search" placeholder="Search employees, assets, vehicles..." />
        <div className="top-controls">
          <div className="branch">All Branches ▾</div>
          <div className="icon-bell">🔔<span className="badge">3</span></div>
          <div className="icon-settings">⚙️</div>
        </div>
      </div>

      <div className="exec-card">
        <ExecHeader summary={summary} />
        <AlertsList alerts={alerts} />
      </div>
    </div>
  );
}
