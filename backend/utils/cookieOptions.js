const getCookieOptions = () => {
  const isProduction = 
    process.env.NODE_ENV === "PRODUCTION" || 
    process.env.NODE_ENV === "production";

  return {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    path: "/",
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
};

module.exports = getCookieOptions;
