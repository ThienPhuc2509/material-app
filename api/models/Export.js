import mongoose from "mongoose";
const ExportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  factoryId: { type: String, required: true },
  materials: [
    {
      materialId: { type: String },
      quantity: { type: Number }, // số lượng xuất
    },
  ],
});

export default mongoose.model("Export", ExportSchema);
