const { Router } = require("express");
const {
  getUser,
  userRegister,
  updateUser,
} = require("../controller/userController");

const router = Router();

router.get("/", getUser);
router.post("/register", userRegister);
router.put("/:id", updateUser);

module.exports = router;
