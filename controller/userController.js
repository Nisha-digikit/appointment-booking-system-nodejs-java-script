const { generateToken } = require("../common/common");
const userModels = require("../models/userModels");

//get
module.exports.getUser = async (req, res) => {
  const user = await userModels.find();
  res.send(user);
};

//post
module.exports.userRegister = async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  const user = await userModels.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }

  const token = generateToken({
    _id: user._id,
    name,
    email,
  });

  res.status(201).send({
    success: true,
    token,
    user: {
      name,
      email,
      _id: user._id,
    },
  });
};

module.exports.userLogin = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  // Check if user exists
  const user = await userModels.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = generateToken({
    _id: user._id,
    name: user.name,
    email,
  });

  res.status(200).send({
    success: true,
    token,
    user: {
      _id: user._id,
      name: user.name,
      email,
    },
  });
};

module.exports.getUserSingle = async (req, res) => {
  const { id } = req.params;
  const user = await userModels.findOne({ _id: id });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });
  } else {
    res.send(user);
  }
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
