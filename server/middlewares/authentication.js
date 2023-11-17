const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");
const authentication = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const { authorization } = req.headers; //prosses distrac dari headers
    // console.log(authorization); //true kalo login
    if (!authorization) {
      throw new Error("Unauthorized"); //pengecekan udah login atau belum
    }
    const acces_token = authorization.split(" ")[1]; //proses split token karena ada "Bearer" di tokennya, kita cuman mau ambil hasil encodingnya
    const verified = verifyToken(acces_token); //prosses decode acces_token
    // console.log(verified.id, 13); //clear
    // console.log(acces_token); //clear
    const user = await User.findOne({
      where: {
        id: verified.id,
      },
    });
    // console.log(user, "<<<()"); //clear
    if (!user) {
      throw new Error("Not found");
    }
    // console.log("apa aja namanya");
    const { id, email, role } = verified;
    // console.log(id, email, role, "<<<(21)");
    req.loginInfo = {
      UserId: id,
      email,
      role,
    };
    // console.log(req);
    next();
  } catch (err) {
    // console.log(error);
    // console.log(err, "<<{31}");
    next(err);
  }
};
module.exports = authentication;
