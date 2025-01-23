import router from "express";
import {
  userSingup,
  userLogin,
  getAllUsers,
} from "../controllers/userController.js";
import verifyUser from "../middlewares/auth.middleware.js";

const userRoutes = router();

userRoutes.route("/signup").post(userSingup);
userRoutes.route("/login").post(userLogin);
userRoutes.route("/all").get(verifyUser, getAllUsers);

export default userRoutes;
