
import mongoose from "mongoose";
const billingSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
    paymentDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
  });
  
const Billing = mongoose.model('Billing', billingSchema);

export default Billing
  