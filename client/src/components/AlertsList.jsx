import React from "react";
import AlertItem from "./AlertItem";

export default function AlertsList({ alerts = [] }) {
  return (
    <div className="alerts">
      <div className="alerts-head">
        <div className="alerts-title">ACTIVE ALERTS ({alerts.length})</div>
        <button className="dismiss">Dismiss all</button>
      </div>

      <div className="alerts-list">
        {alerts.map((a) => (
          <AlertItem key={a.id} alert={a} />
        ))}
      </div>
    </div>
  );
}
