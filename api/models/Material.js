import mongoose from "mongoose";
const MaterialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: "",
    },
    unit: {
      type: String,
      default: "",
      required: true,
    },
    desc: {
      type: String,
      default: "",
      required: true,
    },

    quantity: {
      type: Number,
      default: 0,
      required: true,
    },
    supplierId: {
      type: String,
      default: "",
      required: true,
    },
    warehousesId: {
      type: String,
      default: "",
      required: true,
    },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Material", MaterialSchema);
