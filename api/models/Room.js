import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    roomNumbers: [
      {
        title: String,
        price: Number,
        unit: String,
        desc: String,
        from: String,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
