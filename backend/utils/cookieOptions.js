// Build cookie options that work in both local development (HTTP) and
// production (HTTPS, possibly cross-site). Browsers refuse to store a cookie
// with `secure: true` over plain HTTP, so in development we must not mark the
// auth cookie as secure or the user appears logged out right after logging in.
const isProduction = process.env.NODE_ENV === "PRODUCTION";

const getCookieOptions = (extra = {}) => ({
  httpOnly: true,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction,
  ...extra,
});

module.exports = getCookieOptions;
