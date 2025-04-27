import mongoose from "mongoose";
const medicalHistorySchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    condition: { type: String, required: true },
    diagnosisDate: { type: Date, required: true },
    treatment: { type: String },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    createdAt: { type: Date, default: Date.now },
  });
  
const MedicalHistory  = mongoose.model('MedicalHistory', medicalHistorySchema);
 
export default MedicalHistory
  