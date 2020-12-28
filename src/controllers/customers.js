const Customers = require('../models').customers;


exports.findAll = (req, res) => {
  Customers
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error ocurred while retrieving customers.',
      });
    });
};

exports.findOne = (req, res) => {
  Customers
    .findOne({id: req.params.id})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `No customer with id ${req.params.id}`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error ocurred while retrieving customer.',
      });
    });
};

exports.create = (req, res) => {
  if (
    !req.body.id ||
    !req.body.businessName ||
    !req.body.contactName ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.fiscalAddress ||
    !req.body.type ||
    !req.body.buildings
  ) {
    res.status(400).send({message: 'All customers fields must have data!'});
    return;
  }

  const customer = new Customers({
    id: req.body.id,
    businessName: req.body.businessName,
    contactName: req.body.contactName,
    email: req.body.email,
    phone: req.body.phone,
    fiscalAddress: req.body.fiscalAddress,
    type: req.body.type,
    buildings: req.body.buildings  
  });

  customer
    .save(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error ocurred while creating the customer.',
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  if (
    !req.body.id ||
    !req.body.businessName ||
    !req.body.contactName ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.fiscalAddress ||
    !req.body.type ||
    !req.body.buildings
  ) {
    res
      .status(400)
      .send({message: 'To update the customer all fields must have data!'});
    return;
  }

  const id = req.params.id;

  Customers
    .findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update customer with id ${id}. Customer with this id may not exist.`,
        });
      } res.send({message: 'Customer successfully updated.'});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error ocurred while updating customer.',
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Customers
    .findOneAndRemove({id}, {useFindAndModify: false})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete customer with id ${id}. Customer with this id may not exist.`,
        });
      } res.send({message: 'Customer successfully deleted.'});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error ocurred while deleting the customer.',
      });
    });
};
