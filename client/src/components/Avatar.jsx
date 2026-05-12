import React from "react";

function initials(name) {
  return name.split(" ").map((s)=>s[0]).slice(0,2).join("").toUpperCase();
}

function colorFromName(name){
  const colors = ["#7c3aed","#06b6d4","#ef4444","#f59e0b","#10b981","#6366f1"];
  let h=0; for(let i=0;i<name.length;i++) h = name.charCodeAt(i) + ((h<<5)-h);
  return colors[Math.abs(h)%colors.length];
}

export default function Avatar({ name }) {
  const bg = colorFromName(name || "");
  return <div className="avatar" style={{ background: bg }}>{initials(name||"")}</div>;
}
