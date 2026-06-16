// Build cookie options that work both locally (HTTP) and in production (HTTPS).
// Browsers drop cookies that are `secure` + `sameSite: "none"` over plain HTTP,
// which breaks login on http://localhost. In production (cross-site HTTPS) we
// keep `secure` + `sameSite: "none"`.
const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "PRODUCTION";
  return {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
};

module.exports = getCookieOptions;
