import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
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

  rooms: {
    type: [String],
  },
});

export default mongoose.model("Hotel", HotelSchema);
