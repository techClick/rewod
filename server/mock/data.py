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
