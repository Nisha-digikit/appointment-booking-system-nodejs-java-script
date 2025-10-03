const docModels = require("../models/docModels");

//get
module.exports.getDoc = async (req, res) => {
  const doc = await docModels.find().sort({ _id: -1 });
  res.send(doc);
};

//post
module.exports.postDoc = (req, res) => {
  const { firstName, lastName, link, image, designation, dept, content, desc } =
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
      desc,
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
module.exports.updateDoc = async (req, res) => {
  const { id } = req.params;

  const {
    firstName,
    lastName,
    link,
    image,
    designation,
    dept,
    content,
    desc,
    isDoc,
  } = req.body;

  const updatedItem = await docModels.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      link,
      image,
      designation,
      dept,
      content,
      desc,
      isDoc,
    },
    { new: true }
  );

  if (updatedItem._id) {
    return res.json({
      status: true,
      message: "Doctor Updated Successfuly.......",
      updatedItem,
    });
  }

  // .catch((err) => {
  //   console.log("Error");
  //   res.send({ error: err, msg: "Somthing went wrong!" });
  // });
};

//delete
module.exports.deleteDoc = async (req, res) => {
  const { id } = req.params;

  const deletedItem = await docModels.findByIdAndDelete(id);

  res.json({
    status: true,
    message: "Doctor Deleted Successfuly.......",
  });

  // .catch((err) => {
  //   console.log("Error");
  //   res.send({ error: err, msg: "Somthing went wrong!" });
  // });
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
