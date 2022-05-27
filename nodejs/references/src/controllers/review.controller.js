const Review = require("../models/review.model");
const { populate } = require("../models/user.model");
const User = require("../models/user.model");

module.exports = {
  list(req, res) {
    Review.find()
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(500).json(err));
  },

  show(req, res) {
    const { reviewId } = req.params;

    Review.findById(reviewId)
      .populate({
        path: "user",
        select: "email",
      })
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(404).json(err));
  },

  create(req, res) {
    const { userId } = req.params;

    Review.create({ ...req.body, user: userId })
      .then((review) => {
        User.findById(userId).then((user) => {
          user.reviews.push(review),
            user.save({ validateBeforeSave: false }).then(() => {
              res.status(201).json(review);
            });
        });
      })
      .catch((err) => res.status(400).json(err));
  },
};
