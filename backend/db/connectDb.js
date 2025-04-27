import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log(`database connected successfully😉`);
  } catch (error) {
    console.log("check database")
  }
};
export default connectDb;
