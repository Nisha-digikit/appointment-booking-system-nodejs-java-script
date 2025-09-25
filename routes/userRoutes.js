const { Router } = require("express");
const {
  getUser,
  userRegister,
  updateUser,
  userLogin,
  getUserSingle,
} = require("../controller/userController");

const router = Router();

router.get("/", getUser);
router.get("/:id", getUserSingle);
router.post("/register", userRegister);
router.post("/login", userLogin);
router.put("/:id", updateUser);

module.exports = router;
