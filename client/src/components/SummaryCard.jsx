import React from "react";

export default function SummaryCard({ label, number }) {
  return (
    <div className="card">
      <div className="label">{label}</div>
      <div className="number">{number}</div>
    </div>
  );
}
