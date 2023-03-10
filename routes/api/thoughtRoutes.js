const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, removeThought, updateThought, addReaction, removeReaction } = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:userId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
