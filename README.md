# Rewod HR - UI (React) + Mock API (FastAPI)

This workspace contains two folders:

- `client` — React (Vite) web UI
- `server` — FastAPI backend that serves mock data

Quick start

1. Start the backend (port 8000):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r server/requirements.txt
uvicorn server.main:app --reload --port 8000
```

2. Start the frontend (port 5173):

```bash
cd client
npm install
npm run dev
```

Notes
- The client runs on `http://localhost:5173`.
- The client proxies `/api` requests to `http://localhost:8000` (see `vite.config.js`).
- To change the global UI font, edit [client/src/styles/vars.css](client/src/styles/vars.css).
