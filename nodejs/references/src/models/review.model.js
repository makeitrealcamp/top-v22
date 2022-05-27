const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
