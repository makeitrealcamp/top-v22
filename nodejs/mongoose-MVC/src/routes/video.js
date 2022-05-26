const router = require("express").Router();
const videoController = require("../controllers/video.controller");

router.route("/").get(videoController.list);
router.route("/:videoId").get(videoController.show);
router.route("/").post(videoController.create);
router.route("/:videoId").put(videoController.update);
router.route("/:videoId").delete(videoController.destroy);

module.exports = router;
