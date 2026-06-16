const getCookieOptions = require("./cookieOptions");

// create token and saving that in cookies
const sendShopToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  const options = getCookieOptions();

  res.status(statusCode).cookie("seller_token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendShopToken;
