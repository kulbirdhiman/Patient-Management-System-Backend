import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  medicalHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MedicalHistory" },
  ],
  allergies: [String],
  medications: [String],
  password : String,
  createdAt: { type: Date, default: Date.now },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
