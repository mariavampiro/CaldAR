const BoilersTypes = require('../models').boilersTypes;

exports.findAll = (req, res) => {
  BoilersTypes.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'An error ocurred while retrieving boilers-types data.',
      });
    });
};

exports.findOne = (req, res) => {
  BoilersTypes.findOne({typeId: req.params.typeId})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `No building with typeId ${req.params.typeId}`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'An error ocurred while retrieving boilers-types data.',
      });
    });
};

exports.create = (req, res) => {
  if (
    !req.body.typeId ||
    !req.body.skillsId ||
    !req.body.description ||
    !req.body.stock
  ) {
    res
      .status(400)
      .send({message: 'All boilers-types data fields are required!'});
    return;
  }

  const boilersType = new BoilersTypes({
    typeId: req.body.typeId,
    skillsId: req.body.skillsId,
    description: req.body.description,
    stock: req.body.stock,
  });

  boilersType
    .save(boilersType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'An error ocurred while adding the new boiler type',
      });
    });
};

exports.update = (req, res) =>
  // TODO Correct!!!
  // if (!req.body) {
  //   return res.status(400).send({
  //     message: 'Unable to update with empty data',
  //   });
  // }

  // if (
  //   !req.body.typeId ||
  //   !req.body.skillsId ||
  //   !req.body.description ||
  //   !req.body.stock
  // ) {
  //   res
  //     .status(400)
  //     .send({
  //       message: 'To update the boilers-type all fields must not be empty',
  //     });
  //   return;
  // }

  // const id = req.params.typeId;

  // buildings
  //   .findOneAndUpdate({typeId}, req.body, {useFindAndModify: false})
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(404).send({
  //         message: `Cannot update boilers-type with typeId ${typeId}. Boilers-type with this typeId does not exist in DB.`,
  //       });
  //     } res.send({message: 'boilers-type successfully updated.'});
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message || 'An error ocurred while updating the boilers-type.',
  //     });
  //   });
  res.send({message: 'building successfully deleted.'});

exports.delete = (req, res) =>
  // TODO Correct!!!
  // const id = req.params.typeId;
  // buildings
  //   .findOneAndRemove({typeId}, {useFindAndModify: false})
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(404).send({
  //         message: `Cannot delete boilers-type with typeId ${typeId}. Boilers-type with this typeId does not exist in DB.`,
  //       });
  //     } res.send({message: 'building successfully deleted.'});
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || 'An error ocurred while deleting the building.',
  //     });
  //   });
  res.send({message: 'building successfully deleted.'});
