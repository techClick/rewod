import React, { useEffect, useState } from "react";
import { fetchEmployeeDashboard } from "../api/api";
import SummaryCard from "../components/SummaryCard";
import EmployeeTable from "../components/EmployeeTable";

export default function EmployeeDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    let mounted = true;
    fetchEmployeeDashboard().then((d) => { if(mounted) setData(d); }).catch((e)=> { console.error(e); }).finally(()=> { if(mounted) setLoading(false);});
    return ()=> mounted=false;
  },[]);

  if (loading) return <div>Loading…</div>;
  if (!data) return <div>Unable to load data</div>;

  const { summary, employees } = data;
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
        <div>
          <div style={{ fontSize:12, color:"var(--muted)" }}>HR & People</div>
          <div style={{ fontSize:20, fontWeight:800 }}>Employee Dashboard</div>
        </div>
      </div>

      <div className="cards">
        <SummaryCard label="Total employees" number={summary.total_employees} />
        <SummaryCard label="Active today" number={summary.active_today} />
        <SummaryCard label="Open positions" number={summary.open_positions} />
        <SummaryCard label="Turnover (%)" number={`${summary.turnover_rate}%`} />
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}
