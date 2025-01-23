import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config();

let port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server listens on http://localhost:${port}`);
    });

    app.on("error", (err) => {
      console.log("server error:", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
