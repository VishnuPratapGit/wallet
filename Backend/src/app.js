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

// app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
import userRoutes from "./routes/user.routes.js";
import accountRouter from "./routes/account.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/account", accountRouter);

export { app };
