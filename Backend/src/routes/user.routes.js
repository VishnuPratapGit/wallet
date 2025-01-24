import router from "express";
import {
  userSingup,
  userLogin,
  getAllUsers,
  userLogout,
} from "../controllers/userController.js";
import verifyUser from "../middlewares/auth.middleware.js";

const userRoutes = router();

userRoutes.route("/signup").post(userSingup);
userRoutes.route("/login").post(userLogin);
userRoutes.route("/all").get(verifyUser, getAllUsers);
userRoutes.route("/logout").get(verifyUser, userLogout);

export default userRoutes;
