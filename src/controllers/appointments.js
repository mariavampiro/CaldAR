const Appointment = require('../models').appointments;

exports.findAll = (req, res) => {
  const boiler = +req.query.boiler || '';
  const building = +req.query.building || '';

  if (!boiler && !building)
    return Appointment.find({})
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({message: err.message || 'Error in query db'}),
      );

  return Appointment.find({
    $or: [{buildingId: building}, {boilerId: boiler}],
  })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({message: err.message || 'Error in query db'}),
    );
};

exports.create = (req, res) => {
  const {id, buildingId, boilerId, start_timestamp, end_timestamp} = req.body;

  if (!id || !buildingId || !boilerId || !start_timestamp || !end_timestamp)
    return res.status(400).send({
      message:
        'Uncomplete id, buildingId, boilerId, start_timestamp, end_timestamp',
    });

  const appointment = new Appointment({
    id,
    buildingId,
    boilerId,
    start_timestamp,
    end_timestamp,
  });

  appointment
    .save(appointment)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};

exports.findById = (req, res) => {
  const id = +req.params.id || '';

  Appointment.findOne({id})
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({message: `Appouintment ${req.params.id} was not found.`});

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};

exports.editById = (req, res) => {
  const idAppointment = +req.params.id;

  if (!idAppointment)
    return res.status(400).send({message: `Invalid Id ${req.params.id}`});

  req.body = req.body || {};
  const {id, buildingId, boilerId, start_timestamp, end_timestamp} = req.body;

  if (!id || !buildingId || !boilerId || !start_timestamp || !end_timestamp)
    return res.status(400).send({
      message:
        'Uncomplete id, buildingId, boilerId, start_timestamp, end_timestamp',
    });

  Appointment.findOneAndUpdate({id: idAppointment}, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({message: `Appouintment ${req.params.id} was not found.`});

      res.send({message: `Appouintment ${req.params.id} was updated.`});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};

exports.deleteById = (req, res) => {
  const id = +req.params.id;

  if (!id) return res.status(400).send({message: `Invalid Id ${id}`});

  Appointment.findOneAndDelete({id}, {useFindAndModify: false})
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};
