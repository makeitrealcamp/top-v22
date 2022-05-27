const router = require("express").Router();
const reviewController = require("../controllers/review.controller");

router.route("/").get(reviewController.list);
router.route("/:postId").get(reviewController.show);
router.route("/").post(reviewController.create);

module.exports = router;
