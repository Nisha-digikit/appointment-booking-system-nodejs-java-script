const userDocModels = require("../models/userDocModels");

//get
module.exports.getUserDoc = async (req, res) => {
  const user = await userDocModels.find();
  res.send(user);
};

//post
module.exports.userDocRegister = (req, res) => {
  const { email, password } = req.body;

  userDocModels
    .create({
      email,
      password,
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
module.exports.updateUserDoc = (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  userDocModels
    .findByIdAndUpdate(id, {
      email,
      password,
    })
    .then(() => {
      res.send("Updated Successfuly.......");
    })
    .catch((err) => {
      console.log("Error");
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};
