const Review = require("../models/review.model");
const { populate } = require("../models/user.model");
const User = require("../models/user.model");

module.exports = {
  async list(req, res) {
    try {
      const review = await Review.find();
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  /*   list(req, res) {
    Review.find()
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(500).json(err));
  }, */

  async show(req, res) {
    try {
      const { reviewId } = req.params;

      const review = await Review.findById(reviewId).populate({
        path: "user",
        select: "email",
      });
      res.status(200).json(review);
    } catch (err) {
      res.status(404).json(err);
    }
  },

  async create(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      if (!user) {
        throw new Error("Invalid user");
      }

      const review = await Review.create({ ...req.body, user: user });
      user.review.push(review);
      await user.save({ validateBeforeSave: false });

      res.status(201).json(review);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  /*   create(req, res) {
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
  }, */
};
