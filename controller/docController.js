const docModels = require("../models/docModels");

//get
module.exports.getDoc = async (req, res) => {
  const doc = await docModels.find();
  res.send(doc);
};

//post
module.exports.postDoc = (req, res) => {
  const { firstName, lastName, link, image, designation, dept, content } =
    req.body;

  docModels
    .create({
      firstName,
      lastName,
      link,
      image,
      designation,
      dept,
      content,
    })
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
module.exports.updateDoc = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, link, image, designation, dept, content } =
    req.body;

  docModels
    .findByIdAndUpdate(id, {
      firstName,
      lastName,
      link,
      image,
      designation,
      dept,
      content,
    })
    .then(() => {
      res.send("Updated Successfuly.......");
    })
    .catch((err) => {
      console.log("Error");
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};

//delete
module.exports.deleteDoc = (req, res) => {
  const { id } = req.params;

  docModels
    .findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfuly.......");
    })
    .catch((err) => {
      console.log("Error");
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};

//singleDoctor
module.exports.singleDoc = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await docModels.findById(id);

    if (!doctor) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor not found" });
    } else {
      res.json(doctor);
    }
  } catch (error) {
    console.log("Error");
    res.send({ msg: "Somthing went wrong!" });
  }
};
