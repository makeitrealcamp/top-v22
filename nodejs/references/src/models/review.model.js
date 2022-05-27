const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: String,
    comment: String,
    user: {
      type: Schema.Types.ObjectId, //Usuario con id único
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
