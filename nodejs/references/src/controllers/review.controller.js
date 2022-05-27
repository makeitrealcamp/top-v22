const Review = require("../models/review.model");

module.exports = {
  list(req, res) {
    Review.find()
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(500).json(err));
  },

  show(req, res) {
    const { reviewId } = req.params;

    Review.findById(reviewId)
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(404).json(err));
  },

  create(req, res) {
    Review.create(req.body)
      .then((review) => res.status(201).json(review))
      .catch((err) => res.status(400).json(err));
  },
};
