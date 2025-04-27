import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialization: { type: String, required: true },
  phone: { type: String },
  email: { type: String, unique: true },
  availability: [{ type: Date }], 
  password : String,
  createdAt: { type: Date, default: Date.now },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor