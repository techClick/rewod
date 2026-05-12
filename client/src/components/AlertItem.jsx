import React from "react";

export default function AlertItem({ alert }) {
  const cls = alert.severity === "red" ? "alert-red" : alert.severity === "yellow" ? "alert-yellow" : "alert-blue";
  return (
    <div className={`alert-item ${cls}`}>
      <div className="alert-body">
        <div className="alert-icon" />
        <div className="alert-content">{alert.title}</div>
      </div>
      <div className="alert-action">{alert.tag} ›</div>
    </div>
  );
}
