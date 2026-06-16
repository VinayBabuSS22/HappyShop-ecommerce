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
