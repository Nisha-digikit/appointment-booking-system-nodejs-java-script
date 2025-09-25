const { Router } = require("express");
const {
  getAppoinmemt,
  postAppoinmemt,
  updateAppoinmemt,
  deleteAppoinmemt,
  getSingleAppoinmemt,
} = require("../controller/appoinmentController");

const router = Router();

router.get("/", getAppoinmemt);
router.get("/:id", getSingleAppoinmemt);
router.post("/", postAppoinmemt);
router.put("/:id", updateAppoinmemt);
router.delete("/:id", deleteAppoinmemt);

module.exports = router;
