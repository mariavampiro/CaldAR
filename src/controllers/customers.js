const db = require("../models");
const customers = db.customers;

exports.findAll = (req, res) => {
  customers.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "An error ocurred while retrieving customers."
    });
  });
};

// router.get("/", (req, res) => {
//   if (req.query.id === undefined && req.query.type === undefined) {
//     res.send(customers);
//   } else if (req.query.id !== undefined && req.query.type === undefined) {
//     const idFound = customers.some(
//       (customer) => customer.id === parseInt(req.query.id)
//     );
//     if (idFound) {
//       res.json(
//         customers.filter((customer) => customer.id === parseInt(req.query.id))
//       );
//     } else {
//       res
//         .status(400)
//         .json({ msg: `No customer with the id of ${req.query.id}` });
//     }
//   } else if (req.query.id === undefined && req.query.type !== undefined) {
//     const typeFound = customers.some(
//       (customer) => customer.customerType === req.query.type
//     );
//     if (typeFound) {
//       res.json(
//         customers.filter((customer) => customer.customerType === req.query.type)
//       );
//     } else {
//       res
//         .status(400)
//         .json({ msg: `No customer with the type of ${req.query.type}` });
//     }
//   } else {
//     res.status(400).json({ msg: `Invalid request parameters` });
//   }
// });

// router.delete("/", (req, res) => {
//   const idFound = customers.some(
//     (customer) => customer.id === parseInt(req.query.id)
//   );

//   if (idFound) {
//     let customersDeleted = customers.filter(
//       (customer) => customer.id !== parseInt(req.query.id)
//     );
//     res.json({
//       msg: "Customer successfully deleted",
//       customers: customers.filter(
//         (customer) => customer.id !== parseInt(req.query.id)
//       ),
//     });
//     const jsonString = JSON.stringify(customersDeleted);
//     fs.writeFile("./src/data/customers.json", jsonString, (err) => {
//       if (err) {
//         console.log("Error writing file", err);
//       } else {
//         console.log("Successfully wrote file");
//       }
//     });
//   } else {
//     res.status(400).json({ msg: `No customer with the id of ${req.query.id}` });
//   }
// });