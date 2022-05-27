const router = require("express").Router();
const reviewController = require("../controllers/review.controller");

router.route("/").get(reviewController.list);
router.route("/:reviewId").get(reviewController.show);
router.route("/:userId").post(reviewController.create);

module.exports = router;
