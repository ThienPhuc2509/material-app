import mongoose from "mongoose";
const MaterialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
    },
    desc: {
      type: String,
    },

    quantity: {
      type: Number,
      default: 0,
    },
    supplierId: {
      type: String,
    },
    warehousesId: {
      type: String,
    },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Material", MaterialSchema);
