import React, { useEffect, useState } from "react";
import { fetchEmployeeDashboard } from "../api/api";
import ExecHeader from "../components/ExecHeader";
import AlertsList from "../components/AlertsList";
import Icon from "../components/Icon";

export default function EmployeeDashboard({ setMobileOpen }) {
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
      <div className="exec-topbar">
        <div className="global-search-wrap">
          <div className="global-search-icon"><Icon name="search" size={16} /></div>
          <input className="global-search" placeholder="Search employees, assets, vehicles..." />
        </div>
        <div className="top-controls">
          <div className="branch"><span className="branch-icon"><Icon name="dashboard" size={14} /></span>All Branches ▾</div>
          <div className="icon-bell"><Icon name="bell" size={18} /><span className="badge">3</span></div>
          <div className="icon-settings"><Icon name="settings2" size={18} /></div>
        </div>
      </div>

      <div className="exec-card">
        <ExecHeader summary={summary} />
        <AlertsList alerts={alerts} />
      </div>
    </div>
  );
}
