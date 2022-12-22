import mongoose from "mongoose";
const ExportSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    factoryId: { type: String, required: true },
    // warehousesId: {
    //   type: String,
    //   default: "",
    //   required: true,
    // },
    materials: [
      {
        materialId: { type: String },
        quantity: { type: Number }, // số lượng xuất
      },
    ],
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Export", ExportSchema);
