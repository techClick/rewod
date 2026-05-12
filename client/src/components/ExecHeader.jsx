import React from "react";

export default function ExecHeader({ summary }) {
  const company = summary.company || "Stephanet Group ERP";
  const period = summary.period || "Apr 2026";
  const branches = summary.branches ?? 5;
  const employees_total = summary.employees_total ?? summary.total_employees ?? 248;
  const pending = summary.pending_approvals ?? 9;

  return (
    <div className="exec-header">
      <div className="exec-left">
        <div className="exec-title">Executive Command Center</div>
        <div className="exec-sub">{company} — {period} · {branches} Branches · {employees_total} Employees</div>
      </div>

      <div className="exec-right">
        <button className="pill pill-green">Payroll: {period} Open</button>
        <button className="pill pill-blue">Run Payroll →</button>
        <button className="pill pill-yellow">{pending} Pending Approvals</button>
      </div>
    </div>
  );
}
