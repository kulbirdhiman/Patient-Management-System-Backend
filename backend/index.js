import express from "express"; 
import connectDb from "./db/connectDb.js";
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = 3000;
app.listen(port, () => {
  connectDb();
  console.log(`server running on ${port}`);
});
