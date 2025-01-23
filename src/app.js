import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
import userRoutes from "./routes/user.routes.js";

app.use("/users", userRoutes);

export { app };
