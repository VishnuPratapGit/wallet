import express from "express";
import {
  userSingup,
  userLogin,
  getAllUsers,
  userLogout,
  getCurrentUser,
} from "../controllers/user.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.route("/signup").post(userSingup);
userRoutes.route("/login").post(userLogin);
userRoutes.route("/all").get(verifyUser, getAllUsers);
userRoutes.route("/getuser").get(verifyUser, getCurrentUser);
userRoutes.route("/logout").get(verifyUser, userLogout);

export default userRoutes;
