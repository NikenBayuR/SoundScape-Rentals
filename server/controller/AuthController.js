const { User } = require("../models");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const { verifyHash } = require("../helpers/bcryptjs");
class AuthController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const newUser = await User.create({
        email,
        password,
      });
      if (!newUser) throw new Error("RegisterError");
      res.status(201).json({ message: `user has been created succesfully` });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!email) throw new Error("Email not provided");
      if (!password) throw new Error("Password not provided");
      if (!user) throw new Error("Login Error");

      const isValid = verifyHash(password, user.password);

      if (!isValid) throw new Error("Login Error");
      const token = createToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      res.status(200).json({ acces_token: token });
    } catch (err) {
      next(err);
    }
  }

  static async user(req, res, next) {
    try {
      const users = await User.findAll();
      if (!users) throw new Error("Users does not exist");
      res.status(200).json({ users });
    } catch (err) {
      next(err);
    }
  }

  static async userById(req, res, next) {
    const { id } = req.params;
    try {
      let user = await User.findByPk(id);
      if (!user) throw new Error("Users does not exist");
      res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  }

  static async updateUserById(req, res, next) {
    const { id } = req.params;
    try {
      let user = await User.findByPk(id);
      if (!user) throw new Error(`Users does not exist`);
      const { email, password } = req.body;
      user = await User.update(
        {
          email,
          password,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: `User with id ${id} update`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const { token } = req.headers;
      const client = new OAuth2Client();

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "password_google",
        },
        hooks: false,
      });
      const access_token = createToken({ id: user.id });
      res.status(200).json(access_token);
    } catch (err) {
      console.log(err, 116);
      next(err);
    }
  }
}

module.exports = AuthController;
