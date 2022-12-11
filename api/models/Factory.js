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
    material: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Factory", FactorySchema);
