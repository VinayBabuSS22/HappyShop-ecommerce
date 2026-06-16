const API_ROOT =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api/v2";

// Derive the backend origin (without the /api/... suffix) for non-API assets.
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  API_ROOT.replace(/\/api\/v2\/?$/, "/").replace(/\/?$/, "/");

export const server = API_ROOT;
export const backend_url = BACKEND_URL;
