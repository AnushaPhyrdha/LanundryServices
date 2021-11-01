const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  order_id: { type: String, required: true },
  user_id: { type: mongoose.Types.ObjectId, reference: "User" },
  details: [
    {
      item: { type: String },
      quantity: { type: Number },
      wash: { type: Boolean, default: false },
      press: { type: Boolean, default: false },
      fold: { type: Boolean, default: false },
      pack: { type: Boolean, default: false },
      price: { type: Number, required: true },
    },
  ],
  total_price: { type: Number },
  status: {
    type: String,
    enum: ["Ready to Pick Up", "Washed", "Ironed", "Delivered"],
    required: true,
  },
  address: { type: String, required: true },
});

const order = mongoose.model("order", OrderSchema);

module.exports = order;
