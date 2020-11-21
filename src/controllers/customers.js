const express = require('express');
const router = express.Router();
const customers = require('../data/customers.json');

// Get all customers
router.get('/', (req, res) => {
    res.send(customers);
});

// Get customers by ID
router.get('/:id', (req, res) => {
    const found = customers.some(customer => customer.id === parseInt(req.params.id));

    if (found) {
        res.json(customers.filter(customer => customer.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No customer with the id of ${req.params.id}`});
    }
}) 

module.exports = router;
