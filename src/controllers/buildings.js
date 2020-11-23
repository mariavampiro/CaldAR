const express = require('express');
const router = express.Router();
const buildings = require('../data/buildings.json');
const fs = require('fs');

// Get buildings (by id)
router.get('/', (req, res) => {
  //console.log('id: '+req.query.id);
  if (req.query.id === undefined) {
    res.send(buildings);
  } else {
    const idFound = buildings.some(building => building.id === parseInt(req.query.id));
    if (idFound) {
      res.json(buildings.filter(building => building.id === parseInt(req.query.id)));
    } else {
      res.status(400).json({ msg: `No building with the id of ${req.query.id}`});
    }
  }
});

// Delete building (by id)
router.delete('/', (req, res) => {
  //console.log('id: '+req.query.id);
  const idFound = buildings.some(building => building.id === parseInt(req.query.id));
  if (idFound) {
    let buildingsDeleted = buildings.filter(building => building.id !== parseInt(req.query.id));
    res.json({
      msg: 'Building successfully deleted',
      buildings: buildings.filter(building => building.id !== parseInt(req.query.id))
    });
    //console.log(buildingsDeleted);
    const jsonString = JSON.stringify(buildingsDeleted);
    fs.writeFile('./src/data/buildings.json', jsonString, err => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    })
  } else {
    res.status(400).json({ msg: `No building with the id of ${req.query.id}`});
  }
});

module.exports = router;