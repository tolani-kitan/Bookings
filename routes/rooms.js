const express = require("express");
const {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/rooms");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/").get(getRooms).post(createRoom);
// .post(protect, bookRoom);

router.route("/:id").get(protect, getRoom).put(updateRoom).delete(deleteRoom);

// router.post("/bookRoom", protect, bookRoom);

module.exports = router;
