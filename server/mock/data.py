from typing import List

def get_summary():
    return {
        "total_employees": 124,
        "active_today": 112,
        "open_positions": 5,
        "turnover_rate": 3.2,
    }


def get_employees():
    names = [
        ("Jane Doe","jane.doe@example.com","Product Designer","Design","New York","Active"),
        ("John Smith","john.smith@example.com","Software Engineer","Engineering","San Francisco","Active"),
        ("Amelia Earhart","amelia.e@example.com","Recruiter","People Ops","Remote","Active"),
        ("Carlos Ruiz","carlos.r@example.com","HR Manager","People Ops","Austin","On Leave"),
        ("Priya Patel","priya.p@example.com","Data Analyst","Analytics","London","Active"),
        ("Liu Wei","liu.wei@example.com","Backend Engineer","Engineering","Shanghai","Active"),
        ("Fatima Khan","fatima.k@example.com","Customer Success","Support","Remote","Active"),
    ]
    employees = []
    for i,(name,email,role,dept,loc,status) in enumerate(names, start=1):
        employees.append({
            "id": i,
            "name": name,
            "email": email,
            "role": role,
            "department": dept,
            "location": loc,
            "status": status,
        })
    return employees


def get_alerts():
    return [
        {"id":1, "severity":"red", "title":"₦1.2M in asset recoveries pending posting to payroll", "tag":"Assets"},
        {"id":2, "severity":"yellow", "title":"4 vehicles have maintenance due within 7 days", "tag":"Fleet"},
        {"id":3, "severity":"yellow", "title":"7 loan deductions not yet posted for Apr 2026", "tag":"Loans"},
        {"id":4, "severity":"yellow", "title":"12 tools overdue for return — 4 employees affected", "tag":"Tools"},
        {"id":5, "severity":"blue", "title":"3 clearance cases pending finance sign-off", "tag":"Offboarding"},
        {"id":6, "severity":"red", "title":"3 cost centers over budget — HR-TRANSPORT, FLEET-FUEL, PROJECT-LAB", "tag":"Finance"},
    ]
