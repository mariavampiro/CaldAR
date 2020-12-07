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
    !req.body.customerType ||
    !req.body.email ||
    !req.body.buildingsId ||
    !req.body.fiscalAddress
  ) {
    res.status(400).send({message: 'All customers fields must have data!'});
    return;
  }

  const customer = new Customers({
    id: req.body.id,
    customerType: req.body.customerType,
    email: req.body.email,
    buildingsId: req.body.buildingsId,
    fiscalAddress: req.body.fiscalAddress,
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
    !req.body.customerType ||
    !req.body.email ||
    !req.body.buildingsId ||
    !req.body.fiscalAddress
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
