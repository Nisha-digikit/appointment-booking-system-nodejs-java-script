const appoinmentModels = require("../models/appoinmentModels");

//get
module.exports.getAppoinmemt = async (req, res) => {
  const appoinment = await appoinmentModels.find({}, {}, { lean: true });
  // .populate([{ path: "doctor", select: "name" }]);
  res.send(appoinment);
};

module.exports.getSingleAppoinmemt = async (req, res) => {
  const { id } = req.params;
  const appointment = await appoinmentModels.findById(id);

  if (!appointment) {
    return res
      .status(400)
      .json({ status: false, message: "Appointment Not Found" });
  } else {
    return res.send(appointment);
  }
};
//post
module.exports.postAppoinmemt = (req, res) => {
  const { doctor, date, time, appoinmentFor, user } = req.body;
  appoinmentModels
    .create({
      doctor,
      date,
      time,
      appoinmentFor,
      user,
    })
    .then((data) => {
      console.log("Save Successfully.........");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log("Error");
      res.send({ err, msg: "Somthing went wrong!" });
    });
};

//update
module.exports.updateAppoinmemt = (req, res) => {
  const { id } = req.params;
  const { doctor, date, time, appoinmentFor, user } = req.body;
  appoinmentModels
    .findByIdAndUpdate(id, {
      doctor,
      date,
      time,
      appoinmentFor,
      user,
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
module.exports.deleteAppoinmemt = (req, res) => {
  const { id } = req.params;
  appoinmentModels
    .findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfuly.......");
    })
    .catch((err) => {
      console.log("Error");
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};
