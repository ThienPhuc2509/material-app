import mongoose from "mongoose";
const ImportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  supplierId: { type: String, required: true },
  materials: [
    {
      materialId: { type: String },
      title: { type: String },
      quantity: { type: Number },
      total: { type: Number },
      state: { type: Boolean },
    },
  ],
});

export default mongoose.model("Import", ImportSchema);
