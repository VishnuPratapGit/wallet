import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const userSingup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const duplicate = await User.findOne({
    $or: [{ name }, { email }],
  });

  if (duplicate) {
    throw new ApiError(409, "User alredy exists!");
  }

  const user = await User.create({ name, email, password });

  const userResponce = await User.findById(user._id);

  if (!userResponce) {
    throw new ApiError(400, "User registration failed!");
  }

  res.status(200).send({ message: "success", userResponce });
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "user not found");
  }

  const checkPassword = await user.comparePassword(password);

  if (!checkPassword) {
    throw new ApiError(401, "Invalid Password");
  }

  const responseUserData = await User.findById(user._id).select("-password");

  res.status(200).send({
    message: "success",
    responseUserData,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  if (!allUsers) {
    throw new ApiError(400, "no user present");
  }

  res.status(200).send({ message: "success", allUsers });
});

export { userSingup, userLogin, getAllUsers };
