---
name: testing-happyshop
description: How to run the HappyShop MERN app locally and test the signup/login/activation flow end-to-end. Use when setting up, running, or testing HappyShop.
---

# Running & testing HappyShop locally

Stack: React frontend (`frontend/`, port 3000), Express backend (`backend/`, port 8000), MongoDB.

## Start the stack
```bash
# MongoDB (Docker)
docker start happyshop-mongo || docker run -d --name happyshop-mongo -p 27017:27017 mongo:6
# Backend — use NODE_ENV=development so auth cookies work over HTTP localhost
(cd backend && NODE_ENV=development node server.js)   # "Server is running on http://localhost:8000"
# Frontend
(cd frontend && BROWSER=none PORT=3000 npm start)
```
Deps: `cd frontend && npm install --legacy-peer-deps` (peer-dep conflicts), `cd backend && npm install`.

Env files are NOT committed. `backend/config/.env` needs `PORT`, `DB_URL=mongodb://127.0.0.1:27017/happyshop`, `JWT_SECRET_KEY`, `JWT_EXPIRES`, `ACTIVATION_SECRET`, and SMTP/Cloudinary keys (dummy values are fine for local dev). `frontend/.env`: `REACT_APP_API_URL=http://localhost:8000/api` (note: `frontend/src/server.js` also hardcodes `http://localhost:8000/api/v2`).

## Auth flow (signup → activation → login)
1. `/sign-up`: fill name/email/password, upload any image as avatar, Submit.
2. No SMTP/Cloudinary configured is fine: signup returns a `[Dev Mode] Email failed but you can activate here: <url>` toast, and the backend logs `USER ACTIVATION URL (DEV MODE): <url>`. Cloudinary is optional — a missing/dummy key falls back to storing the avatar inline.
3. Open the activation URL → "Your account has been created successfully!".
4. `/login` with the same credentials → lands logged-in; `/profile` is then accessible.

## Gotchas
- Activation tokens expire after **5 minutes** (`expiresIn: "5m"`). Activate promptly after signup.
- The activation URL is very long; **paste it via clipboard** (`xclip`) instead of typing — typing into the address bar drops characters and yields a malformed token.
- The activation page shows a generic `"Your token is expired!"` for ANY failure (expired OR malformed token), so a malformed-token error looks like expiry.
- Auth cookies are env-aware (`backend/utils/cookieOptions.js`): `SameSite=Lax`/`Secure=false` in development, `SameSite=None`/`Secure=true` in PRODUCTION. Over HTTP localhost you must run with `NODE_ENV=development` or the browser drops the session cookie.
- A 401 for `/api/v2/shop/getSeller` on the storefront with no seller logged in is expected/harmless.

## Build
`cd frontend && npm run build` (compiles with pre-existing source-map warnings from `timeago.js`). No automated test suite is configured.
