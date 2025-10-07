const { Router } = require("express");
const {
  getDept,
  postDept,
  updateDept,
  deleteDept,
  singleDept,
} = require("../controller/deptController");

const router = Router();

router.get("/", getDept);
router.get("/:id", singleDept);
router.post("/", postDept);
router.put("/:id", updateDept);
router.delete("/:id", deleteDept);

module.exports = router;
