import router from "express";
import {
  userSingup,
  userLogin,
  getAllUsers,
} from "../controllers/userController.js";

const userRoutes = router();

userRoutes.route("/signup").post(userSingup);
userRoutes.route("/login").post(userLogin);
userRoutes.route("/all").get(getAllUsers);

export default userRoutes;
