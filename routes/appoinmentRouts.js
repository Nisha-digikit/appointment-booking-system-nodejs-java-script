const { Router } = require("express");
const {
  getAppoinmemt,
  postAppoinmemt,
  updateAppoinmemt,
  deleteAppoinmemt,
  getSingleAppoinmemt,
  cancelAppoinmemt,
} = require("../controller/appoinmentController");
const auth = require("../middleware/auth");

const router = Router();

// router.get("/", getAppoinmemt);
router.get("/", auth, getAppoinmemt);
router.get("/:id", auth, getSingleAppoinmemt);
router.post("/", postAppoinmemt);
router.put("/cancel/:id", auth, cancelAppoinmemt);
router.put("/:id", auth, updateAppoinmemt);
router.delete("/:id", deleteAppoinmemt);

module.exports = router;
