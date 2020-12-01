const boylerTypes = require("../models").boilerTypes;

exports.findAll = (req, res) => {
  const boilerTypeId = +req.params.boilerTypeId || "";

  if (!boilerTypeId)
    return boylerTypes.find({})
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({ message: err.message || "Error in query db" })
      );

  return boylerTypes.find({ typeId: boilerTypeId },
  )
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || "Error in query db" })
    );
};

exports.create = (req, res) => {
  const { typeId, stock, description } = req.body;

  if (!typeId || !stock || !description)
    return res.status(400).send({
      message:
        "Uncomplete typeId, stock, description",
    });

  const newBoylerType = new boylerTypes({
    typeId,
    stock,
    description,
  });

  newBoylerType
    .save(newBoylerType)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving resource in DB.",
      });
    });
};

exports.findById = (req, res) => {
  const id = +req.params.id || "";

  boylerTypes.findOne({ id })
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({ message: `Appouintment ${req.params.id} was not found.` });

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving resource in DB.",
      });
    });
};

exports.editById = (req, res) => {
  const idAppointment = +req.params.id;

  if (!idAppointment)
    return res.status(400).send({ message: `Invalid Id ${req.params.id}` });

  req.body = req.body || {};
  const { id, buildingId, boilerId, start_timestamp, end_timestamp } = req.body;

  if (!id || !buildingId || !boilerId || !start_timestamp || !end_timestamp)
    return res.status(400).send({
      message:
        "Uncomplete id, buildingId, boilerId, start_timestamp, end_timestamp",
    });

  Appointment.findOneAndUpdate({ id: idAppointment }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({ message: `Appouintment ${req.params.id} was not found.` });

      res.send({ message: `Appouintment ${req.params.id} was updated.` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving resource in DB.",
      });
    });
};

exports.deleteById = (req, res) => {
  const id = +req.params.id;

  if (!id) return res.status(400).send({ message: `Invalid Id ${id}` });

  Appointment.findOneAndDelete({ id }, { useFindAndModify: false })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving resource in DB.",
      });
    });
};