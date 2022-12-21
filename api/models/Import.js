import mongoose from "mongoose";
const ImportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  warehousesId: {
    type: String,
    default: "",
    required: true,
  },
  materials: [
    {
      materialId: { type: String },
      quantity: { type: Number },
    },
  ],
  isDelete: { type: Boolean, default: false },
});

export default mongoose.model("Import", ImportSchema);
