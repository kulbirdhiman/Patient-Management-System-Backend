import mongoose from "mongoose";
const prescriptionSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true, 
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  medications: [{ name: String, dosage: String, frequency: String }],
  dateIssued: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
export default Prescription;
