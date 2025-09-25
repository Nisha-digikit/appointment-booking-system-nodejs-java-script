const { Router } = require("express");
const {
  getDoc,
  postDoc,
  updateDoc,
  deleteDoc,
  singleDoc,
} = require("../controller/docController");

const router = Router();

router.get("/", getDoc);
router.get("/:id", singleDoc);
router.post("/", postDoc);
router.put("/:id", updateDoc);
router.delete("/:id", deleteDoc);

module.exports = router;
