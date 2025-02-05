import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config();

let port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server started successfully.`);
    });

    app.on("error", (err) => {
      console.log("server error:", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
