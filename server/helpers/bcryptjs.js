const bcryptjs = require("bcryptjs");

const hash = (val) => {
  const salt = bcryptjs.genSaltSync(11);
  return bcryptjs.hashSync(val, salt);
};
const verifyHash = (raw, hashed) => bcryptjs.compareSync(raw, hashed);

module.exports = { hash, verifyHash };
