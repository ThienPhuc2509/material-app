import mongoose from "mongoose";
const FactorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    materials: [
      {
        materialId: { type: String },
        quantity: { type: Number }, // số lượng factory
      },

    ],
  },
  { timestamps: true }
);

export default mongoose.model("Factory", FactorySchema);
