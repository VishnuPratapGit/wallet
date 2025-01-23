import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const verifyUser = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized User");
  }

  const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (!payload) {
    throw new ApiError(401, "Invalid User");
  }

  const user = await User.findById(payload?._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "User Not Found");
  }

  req.user = user;

  next();
});

export default verifyUser;
