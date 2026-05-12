import React from "react";
import Avatar from "./Avatar";

export default function EmployeeTable({ employees }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Department</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td style={{ display:"flex", alignItems:"center", gap:12 }}>
                <Avatar name={e.name} />
                <div>
                  <div style={{ fontWeight:700 }}>{e.name}</div>
                  <div style={{ fontSize:13, color:"var(--muted)" }}>{e.email}</div>
                </div>
              </td>
              <td>{e.role}</td>
              <td>{e.department}</td>
              <td>{e.location}</td>
              <td><span style={{ color: e.status==="Active" ? "#10b981" : "#ef4444", fontWeight:600 }}>{e.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
