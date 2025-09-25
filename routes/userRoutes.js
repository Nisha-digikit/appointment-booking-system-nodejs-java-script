const { Router } = require("express");
const {
  getUser,
  userRegister,
  updateUser,
  userLogin,
  getUserSingle,
  getProfile,
} = require("../controller/userController");
const auth = require("../middleware/auth");

const router = Router();

router.get("/", getUser);
router.get("/profile", auth, getProfile);
router.get("/:id", getUserSingle);
router.post("/register", userRegister);
router.post("/login", userLogin);
router.put("/:id", updateUser);

module.exports = router;
