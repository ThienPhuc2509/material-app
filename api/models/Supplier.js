import mongoose from "mongoose";
const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      default: "",
    },
    address: {
      type: String,
      required: true,
      default: "",
    },
    phone: {
      type: String,
      required: true,
      default: "",
    },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Supplier", SupplierSchema);
