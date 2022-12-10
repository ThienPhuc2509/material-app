import mongoose from "mongoose";
const ExportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  factoryId: { type: String, required: true },
  materials: [
    {
      materialId: { type: String },
      title: { type: String },
      quantity: { type: Number },
    },
  ],
});

export default mongoose.model("Export", ExportSchema);
