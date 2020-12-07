const boilers = require('../models').boilers;

exports.findAll = (req, res) => {
  const typeId = +req.query.typeId || '';
  const warehouse = +req.query.warehouse_id || '';

  if (!typeId && !warehouse)
    return boilers
      .find({})
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({message: err.message || 'Error in query db'}),
      );

  return boilers
    .find({
      $or: [{typeId: typeId}, {warehouse_id: warehouse}],
    })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({message: err.message || 'Error in query db'}),
    );
};

exports.create = (req, res) => {
  const {
    id,
    typeId,
    status,
    maintaince_rate,
    hour_maintaince_cost,
    hour_eventual_cost,
    warehouse_id,
  } = req.body;

  if (
    !id ||
    !typeId ||
    !status ||
    !maintaince_rate ||
    !hour_maintaince_cost ||
    !hour_eventual_cost ||
    !warehouse_id
  )
    return res.status(400).send({
      message:
        'Incomplete id, typeId, status, maintaince_rate, hour_maintaince_cost, hour_eventual_cost, warehouse_id',
    });

  const boiler = new boilers({
    id,
    typeId,
    status,
    maintaince_rate,
    hour_maintaince_cost,
    hour_eventual_cost,
    warehouse_id,
  });

  boiler
    .save(boiler)
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

  boilers
    .findOne({id})
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({message: `Boiler ${req.params.id} was not found.`});

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};

exports.editById = (req, res) => {
  const idBoiler = +req.params.id;

  if (!idBoiler)
    return res.status(400).send({message: `Invalid Id ${req.params.id}`});

  req.body = req.body || {};
  const {
    id,
    typeId,
    status,
    maintaince_rate,
    hour_maintaince_cost,
    hour_eventual_cost,
    warehouse_id,
  } = req.body;

  if (
    !id ||
    !typeId ||
    !status ||
    !maintaince_rate ||
    !hour_maintaince_cost ||
    !hour_eventual_cost ||
    !warehouse_id
  )
    return res.status(400).send({
      message:
        'Incomplete id, typeId, status, maintaince_rate, hour_maintaince_cost, hour_eventual_cost, warehouse_id',
    });

  boilers
    .findOneAndUpdate({id: idBoiler}, req.body, {
      useFindAndModify: false,
    })
    .then((data) => {
      if (!data)
        return res
          .status(404)
          .send({message: `Boiler ${req.params.id} was not found.`});

      res.send({message: `Boiler ${req.params.id} was updated.`});
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

  boilers
    .findOneAndDelete({id}, {useFindAndModify: false})
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error in saving resource in DB.',
      });
    });
};
