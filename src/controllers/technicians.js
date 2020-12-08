const Technicians = require('../models').technicians;

exports.findAll = (req, res) => {
  const type = +req.query.type || '';

  if (!type)
    return Technicians.find({})
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({message: err.message || 'Error in query db'}),
      );

  return Technicians.find({type_ids: type})
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({message: err.message || 'Error in query db'}),
    );
};

exports.create = (req, res) => {
  const {
    id,
    first_name,
    last_name,
    email,
    type_ids,
    skills_id,
    hour_rate,
    daily_capacity,
  } = req.body;

  if (
    !id ||
    !first_name ||
    !last_name ||
    !email ||
    !type_ids ||
    !skills_id ||
    !hour_rate ||
    !daily_capacity
  )
    return res.status(400).send({
      message:
        'Uncomplete id, first_name, last_name, email, type_ids, skills_id, hour_rate, daily_capacity',
    });

  const technicians = new Technicians({
    id,
    first_name,
    last_name,
    email,
    type_ids,
    skills_id,
    hour_rate,
    daily_capacity,
  });

  technicians
    .save(technicians)
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

  Technicians.findOne({id})
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
  const idTechnician = +req.params.id;

  if (!idTechnician)
    return res.status(400).send({message: `Invalid Id ${req.params.id}`});

  req.body = req.body || {};
  const {
    id,
    first_name,
    last_name,
    email,
    type_ids,
    skills_id,
    hour_rate,
    daily_capacity,
  } = req.body;

  if (
    !id ||
    !first_name ||
    !last_name ||
    !email ||
    !type_ids ||
    !skills_id ||
    !hour_rate ||
    !daily_capacity
  )
    return res.status(400).send({
      message:
        'Uncomplete id, first_name, last_name, email, type_ids, skills_id, hour_rate, daily_capacity',
    });

  Technicians.findOneAndUpdate({id: idTechnician}, req.body, {
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

  if (!id)
    return res.status(400).send({message: `Invalid technicians Id ${id}`});

  Technicians.findOneAndDelete({id}, {useFindAndModify: false})
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};
