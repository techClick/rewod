export async function fetchEmployeeDashboard() {
  const res = await fetch('/api/employee-dashboard');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}
