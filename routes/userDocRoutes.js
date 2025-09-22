const { Router } = require("express");
const {
  getUserDoc,
  userDocRegister,
  updateUserDoc,
} = require("../controller/userDocController");

const router = Router();

router.get("/", getUserDoc);
router.post("/", userDocRegister);
router.put("/:id", updateUserDoc);

module.exports = router;
