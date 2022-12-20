import mongoose from "mongoose";
const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  materials: {
    type: Array,
    default: [],
  },
  isDelete: { type: Boolean, default: false },
});

export default mongoose.model("Warehouse", WarehouseSchema);
