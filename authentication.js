const jwt = require("jsonwebtoken");
const createuser = require("./Backend/models/createuser");
function auth(req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "wildshoter@123", async (err, decodetoken) => {
      if (err) {
        console.log("unauthorized");
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
}

module.exports = { auth };
