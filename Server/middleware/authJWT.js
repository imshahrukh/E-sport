const config = require("../config/auth.config.js");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const tokens = req.headers.authorization.split(" ");
    console.log(req.headers.authorization);
    if (!tokens) return res.status(403).send("Access denied.");
    // console.log(tokens);
    const decoded = jwt.verify(tokens[1], config.secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
