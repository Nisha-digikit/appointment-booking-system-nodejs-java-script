const deptModels = require("../models/deptModels");

//get
module.exports.getDept = async (req, res) => {
  const depet = await deptModels.find();
  res.send(depet);
};

//post
module.exports.postDept = (req, res) => {
  const { dept, image } = req.body;

  deptModels
    .create({ dept, image })
    .then((data) => {
      console.log("Save Successfully.........");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log("Error");
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};

//update
module.exports.updateDept = async (req, res) => {
  const { id } = req.params;

  const { dept, image } = req.body;

  const updateItem = await deptModels.findByIdAndUpdate(id, { dept, image });

  if (updateItem._id) {
    return res.json({
      status: true,
      message: "Department updated successfully...................",
      updateItem,
    });
  }
};

//delete
module.exports.deleteDept = async (req, res) => {
  const { id } = req.params;

  const deleteItem = await deptModels.findByIdAndDelete(id);
  if (deleteItem._id) {
    res.json({
      status: true,
      message: "Department deleted successfully...................",
    });
  }
};

//single get
module.exports.singleDept = async (req, res) => {
  const { id } = req.params;

  try {
    const departement = await deptModels.findById(id);

    if (!departement) {
      return res
        .status(404)
        .json({ success: false, message: "Department not found" });
    } else {
      res.json(departement);
    }
  } catch (error) {
    console.log("Error");
    res.send({ msg: "Somthing went wrong!" });
  }
};
