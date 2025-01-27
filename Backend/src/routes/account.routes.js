import express from "express";
import {
  getBalance,
  transferBalance,
} from "../controllers/account.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";

const accountRouter = express.Router();

accountRouter.route("/balance").get(verifyUser, getBalance);
accountRouter.route("/transfer").post(verifyUser, transferBalance);

export default accountRouter;
