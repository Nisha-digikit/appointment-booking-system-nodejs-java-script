const userModels = require("../models/userModels");

//get
module.exports.getUser = async (req, res) => {
  const user = await userModels.find();
  res.send(user);
};

//post
module.exports.userRegister = (req, res) => {
  const { name, email, password } = req.body;

  userModels
    .create({
      name,
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
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  userModels
    .findByIdAndUpdate(id, {
      name,
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
