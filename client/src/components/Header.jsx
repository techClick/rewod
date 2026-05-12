import React from "react";

export default function Header({ setMobileOpen }) {
  return (
    <header className="header">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div className="hamburger" onClick={() => setMobileOpen((s) => !s)}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="#0B1220"/><rect y="10" width="18" height="2" rx="1" fill="#0B1220"/></svg>
        </div>
      </div>
      <div style={{ display: "flex", gap:12, alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:18, background:"linear-gradient(135deg,#7c3aed,#3b82f6)", display:"flex", justifyContent:"center", alignItems:"center", color:"#fff", fontWeight:700 }}>JD</div>
        </div>
      </div>
    </header>
  );
}
