const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY || "byu";
createToken = (payload) => jwt.sign(payload, key, {});
verifyToken = (value) => jwt.verify(value, key);
module.exports = {
  createToken,
  verifyToken,
};
