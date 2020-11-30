const db = require("../models");
const buildings = db.buildings;

exports.findAll = (req, res) => {
  buildings.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "An error ocurred while retrieving buildings."
    });
  });
};

exports.findOne = (req, res) => {
  buildings.findOne ({id: req.params.id})
  .then (data => {
    if (!data) {
      return res.status(404).send({
        message: `No building with id ${req.params.id}`
      })
    }
    res.send(data);
  })
  .catch (err => {
    res.status(500).send({
      message: err.message || "An error ocurred while retrieving building."
    });
  });
};

exports.create = (req, res) => {
  if (!req.body.id || !req.body.address || !req.body.boilersId || !req.body.fullName || !req.body.phone) {
    res.status(400).send ({message: "All buildings fields must have data!"});
    return;
  }

  const building = new buildings ({
    id: req.body.id,
    address: req.body.address,
    boilersId: req.body.boilersId,
    fullName: req.body.fullName,
    phone: req.body.phone,
  });

  building
    .save(building)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error ocurred while creating the building."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.id || !req.body.address || !req.body.boilersId || !req.body.fullName || !req.body.phone) {
    res.status(400).send ({message: "To update the building all fields must have data!"});
    return;
  }

  const id = req.params.id;

  buildings.findOneAndUpdate({id}, req.body, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      return res.status(404).send({
        message: `Cannot update building with id ${id}. Building with this id may not exist.`
      });
    } else res.send({ message: "Building successfully updated."});
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "An error ocurred while updating the building."
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  buildings.findOneAndRemove ({id}, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete building with id ${id}. Building with this id may not exist.`
        });
      } else res.send({ message: "building successfully deleted."});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error ocurred while deleting the building."
      });
    });
};