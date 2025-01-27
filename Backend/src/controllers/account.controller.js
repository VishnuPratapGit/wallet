import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Account } from "../models/account.model.js";
import ApiError from "../utils/apiError.js";
import mongoose from "mongoose";

const getBalance = asyncHandler(async (req, res) => {
  const userId = req.user?._id;

  if (!userId) {
    throw new ApiError(401, "User not login!");
  }

  const account = await Account.findOne({ userId });

  if (!account) {
    throw new ApiError(404, "Account not found!");
  }

  const balance = account.balance;

  res.status(200).json({ message: "Success", balance });
});

const transferBalance = asyncHandler(async (req, res) => {
  const { to, amount } = req.body;
  const from = req.user?._id;

  if (!to) {
    throw new ApiError(400, "Sender id required!");
  }
  if (amount < 0.01) {
    throw new ApiError(400, "Amount should be greater then 0.");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  const senderAccount = await Account.findOne({ userId: from }).session(
    session
  );

  if (!senderAccount) {
    await session.abortTransaction();
    throw new ApiError(404, "User not logged in (account not found)");
  }

  if (senderAccount.balance <= 0) {
    await session.abortTransaction();
    throw new ApiError(400, "Insufficient Balance!");
  }

  const receiver = await User.findOne({ email: to }).session(session);

  if (!receiver) {
    await session.abortTransaction();
    throw new ApiError(400, "Receiver not found!");
  }

  const receiverAccount = await Account.findOne({
    userId: receiver?._id,
  }).session(session);

  if (!receiverAccount) {
    await session.abortTransaction();
    throw new ApiError(400, "Receiver's account not found!");
  }

  let senderBalance = (senderAccount.balance - amount).toFixed(2);
  let receiverBalance = (receiverAccount.balance + amount).toFixed(2);

  //update balance
  await Account.updateOne(
    { _id: senderAccount._id },
    {
      $set: { balance: senderBalance },
    }
  ).session(session);

  await Account.updateOne(
    { _id: receiverAccount._id },
    {
      $set: { balance: receiverBalance },
    }
  ).session(session);

  //commit transaction
  await session.commitTransaction();

  session.endSession();

  res.status(200).send({ message: "Transaction Successfull." });
});

export { getBalance, transferBalance };
