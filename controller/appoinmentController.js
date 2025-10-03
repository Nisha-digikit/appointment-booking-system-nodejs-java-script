const appoinmentModels = require("../models/appoinmentModels");

//get
module.exports.getAppoinmemt = async (req, res) => {
  const appoinment = await appoinmentModels
    .find({ user: req.user._id }, {}, { lean: true })
    .populate([{ path: "doctor" }, { path: "user", select: "_id name email" }]);
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
  const { doctor, date, time, appointmentFor, user } = req.body;

  if ((!doctor, !date, !time, !appointmentFor, !user)) {
    return res.status(404).json({ message: "All the fields are mandatory" });
  }
  appoinmentModels
    .create({
      doctor,
      date,
      time,
      appointmentFor,
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

//Cancel Appointment
module.exports.cancelAppoinmemt = async (req, res) => {
  const { id } = req.params;

  const appointment = await appoinmentModels.findOne({ _id: id });

  console.log("appointment=>", appointment);

  if (!appointment) {
    return res
      .status(404)
      .json({ status: false, message: "Appointment Not Found" });
  }

  const updatedItem = await appoinmentModels.findByIdAndUpdate(
    id,
    {
      status: "Canceled",
    },
    { new: true }
  );

  if (updatedItem._id) {
    return res.json({
      status: true,
      message: "Appointment canceled Successfuly.......",
      updatedItem,
    });
  }
};

//update
module.exports.updateAppoinmemt = (req, res) => {
  const { id } = req.params;
  const { doctor, date, time, appoinmentFor } = req.body;
  appoinmentModels
    .findByIdAndUpdate(id, {
      doctor,
      date,
      time,
      appoinmentFor,
      // user,
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
