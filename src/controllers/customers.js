const express = require('express');
const router = express.Router();
const customers = require('../data/customers.json');
const fs = require('fs');

// Get customers (by id or type)
router.get('/', (req, res) => {
  //console.log('id: '+req.query.id);
  //console.log('type: '+req.query.type);
  if (req.query.id === undefined && req.query.type === undefined) {
    res.send(customers);
  } else if (req.query.id !== undefined && req.query.type === undefined) {
    const idFound = customers.some(customer => customer.id === parseInt(req.query.id));
    if (idFound) {
      res.json(customers.filter(customer => customer.id === parseInt(req.query.id)));
    } else {
      res.status(400).json({ msg: `No customer with the id of ${req.query.id}`});
    }
  } else if (req.query.id === undefined && req.query.type !== undefined) {
    const typeFound = customers.some(customer => customer.customerType === req.query.type);
    if (typeFound) {
      res.json(customers.filter(customer => customer.customerType === req.query.type));
    } else {
      res.status(400).json({ msg: `No customer with the type of ${req.query.type}`});
    }
  } else {
    res.status(400).json({ msg: `Invalid request parameters`});
  }
});

// Delete customer (by id)
router.delete('/', (req, res) => {
  //console.log('id: '+req.query.id);
  const idFound = customers.some(customer => customer.id === parseInt(req.query.id));
  if (idFound) {
    let customersDeleted = customers.filter(customer => customer.id !== parseInt(req.query.id));
    res.json({
      msg: 'Customer successfully deleted',
      customers: customers.filter(customer => customer.id !== parseInt(req.query.id))
    });
    //console.log(customersDeleted);
    const jsonString = JSON.stringify(customersDeleted);
    fs.writeFile('./src/data/customers.json', jsonString, err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    })
  } else {
    res.status(400).json({ msg: `No customer with the id of ${req.query.id}`});
  }
});

module.exports = router;