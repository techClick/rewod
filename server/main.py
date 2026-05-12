from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mock.data import get_summary, get_employees, get_alerts

app = FastAPI(title="Rewod HR Mock API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/employee-dashboard")
def employee_dashboard():
    """Return mock data for the Employee Dashboard."""
    return {"summary": get_summary(), "employees": get_employees(), "alerts": get_alerts()}
