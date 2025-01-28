import express from "express";
import {
  getBalance,
  transferBalance,
  getUserTransactions,
} from "../controllers/account.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";

const accountRouter = express.Router();

accountRouter.route("/balance").get(verifyUser, getBalance);
accountRouter.route("/transfer").post(verifyUser, transferBalance);
accountRouter
  .route("/transaction-history")
  .get(verifyUser, getUserTransactions);

export default accountRouter;
