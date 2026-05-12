import React from "react";

const Icon = ({ name, size = 18, className = "", ...props }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className };

  switch (name) {
    case "command":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
          <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" />
          <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
        </svg>
      );

    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "payroll":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 9.5c0 .9.9 1.5 2 1.5s2 .6 2 1.5-.9 1.5-2 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "loans":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tools":
      return (
        <svg {...common}>
          <path d="M21 11l-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4l-3 3L7 11l-1 4 4-1 4-4 3-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "inventory":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3v14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "fleet":
      return (
        <svg {...common}>
          <rect x="1" y="7" width="14" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M15 14h4v-3l-2-2h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );

    case "costReports":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14l3-4 4 2 3-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "settings":
      return (
        <svg {...common}>
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M19.4 15a1.8 1.8 0 0 0 .3 1.9l.1.1a1 1 0 0 1-1.2 1.5l-.1-.1a1.8 1.8 0 0 0-1.9-.3 1.8 1.8 0 0 0-1 .7 1.8 1.8 0 0 1-2.8 0 1.8 1.8 0 0 0-1-.7 1.8 1.8 0 0 0-1.9.3l-.1.1a1 1 0 0 1-1.2-1.5l.1-.1a1.8 1.8 0 0 0 .3-1.9 1.8 1.8 0 0 0-.7-1 1.8 1.8 0 0 1 0-2.8 1.8 1.8 0 0 0 .7-1 1.8 1.8 0 0 0-.3-1.9l-.1-.1A1 1 0 0 1 6.8 3.1l.1.1a1.8 1.8 0 0 0 1.9.3 1.8 1.8 0 0 0 1-.7 1.8 1.8 0 0 1 2.8 0 1.8 1.8 0 0 0 1 .7 1.8 1.8 0 0 0 1.9-.3l.1-.1a1 1 0 0 1 1.5 1.2l-.1.1a1.8 1.8 0 0 0-.3 1.9 1.8 1.8 0 0 0 .7 1 1.8 1.8 0 0 1 0 2.8 1.8 1.8 0 0 0-.7 1z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );

    case "settings2":
      return (
        <svg {...common}>
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M19.4 15a1.8 1.8 0 0 0 .3 1.9l.1.1a1 1 0 0 1-1.2 1.5l-.1-.1a1.8 1.8 0 0 0-1.9-.3 1.8 1.8 0 0 0-1 .7 1.8 1.8 0 0 1-2.8 0 1.8 1.8 0 0 0-1-.7 1.8 1.8 0 0 0-1.9.3l-.1.1a1 1 0 0 1-1.2-1.5l.1-.1a1.8 1.8 0 0 0 .3-1.9 1.8 1.8 0 0 0-.7-1 1.8 1.8 0 0 1 0-2.8 1.8 1.8 0 0 0 .7-1 1.8 1.8 0 0 0-.3-1.9l-.1-.1A1 1 0 0 1 6.8 3.1l.1.1a1.8 1.8 0 0 0 1.9.3 1.8 1.8 0 0 0 1-.7 1.8 1.8 0 0 1 2.8 0 1.8 1.8 0 0 0 1 .7 1.8 1.8 0 0 0 1.9-.3l.1-.1a1 1 0 0 1 1.5 1.2l-.1.1a1.8 1.8 0 0 0-.3 1.9 1.8 1.8 0 0 0 .7 1 1.8 1.8 0 0 1 0 2.8 1.8 1.8 0 0 0-.7 1z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "bell":
      return (
        <svg {...common}>
          <path d="M15 17H9a3 3 0 0 0 6 0z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "alertError":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "alertWarning":
      return (
        <svg {...common}>
          <path d="M12 3l9 16H3L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M12 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      );

    case "alertInfo":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M11 11h2v5h-2z" fill="currentColor" />
        </svg>
      );

    // HR sublink icons
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );

    case "directory":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4 13c1.5-2 5-2 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M15 5h5M15 9h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "recruitment":
      return (
        <svg {...common}>
          <path d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M2 20c1.5-3 5-4 10-4s8.5 1 10 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M19 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M21 9h-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "request":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 8h8M7 12h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "hrExpenses":
      return (
        <svg {...common}>
          <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 9h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "idCards":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M13 9h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "execAudit":
      return (
        <svg {...common}>
          <path d="M3 21h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="3" y="3" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 11v4M12 7v8M17 9v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "attendance":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M7 13h10M7 9h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
  }
};

export default Icon;
