import React from "react";
import Icon from "./Icon";

export default function AlertItem({ alert }) {
  const cls = alert.severity === "red" ? "alert-red" : alert.severity === "yellow" ? "alert-yellow" : "alert-blue";

  const textColor =
    alert.severity === "red"
      ? "#991b1b"
      : alert.severity === "yellow"
      ? "#b45309"
      : "#1d4ed8";

  return (
    <div className={`alert-item ${cls}`}>
      <div className="alert-body">
        <div className="alert-icon" style={{ color: textColor }}>
          <Icon name={alert.severity === "red" ? "alertError" : alert.severity === "yellow" ? "alertWarning" : "alertInfo"} size={16} />
        </div>
        <div className="alert-content" style={{ color: textColor }}>{alert.title}</div>
      </div>
      <div className="alert-action" style={{ color: textColor }}>{alert.tag} ›</div>
    </div>
  );
}
