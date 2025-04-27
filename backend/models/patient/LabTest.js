const labTestSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    testName: { type: String, required: true },
    testDate: { type: Date, required: true },
    result: { type: String, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    createdAt: { type: Date, default: Date.now },
  });
  
  const LabTest = mongoose.model('LabTest', labTestSchema);
  
  export default LabTest