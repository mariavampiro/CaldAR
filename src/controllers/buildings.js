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

// router.get("/", (req, res) => {
//   if (req.query.id === undefined) {
//     res.send(buildings);
//   } else {
//     const idFound = buildings.some(
//       (building) => building.id === parseInt(req.query.id)
//     );
//     if (idFound) {
//       res.json(
//         buildings.filter((building) => building.id === parseInt(req.query.id))
//       );
//     } else {
//       res
//         .status(400)
//         .json({ msg: `No building with the id of ${req.query.id}` });
//     }
//   }
// });

// router.delete("/", (req, res) => {
//   const idFound = buildings.some(
//     (building) => building.id === parseInt(req.query.id)
//   );

//   if (idFound) {
//     let buildingsDeleted = buildings.filter(
//       (building) => building.id !== parseInt(req.query.id)
//     );
//     res.json({
//       msg: "Building successfully deleted",
//       buildings: buildings.filter(
//         (building) => building.id !== parseInt(req.query.id)
//       ),
//     });
//     const jsonString = JSON.stringify(buildingsDeleted);
//     fs.writeFile("./src/data/buildings.json", jsonString, (err) => {
//       if (err) {
//         console.log("Error writing file", err);
//       } else {
//         console.log("Successfully wrote file");
//       }
//     });
//   } else {
//     res.status(400).json({ msg: `No building with the id of ${req.query.id}` });
//   }
// });