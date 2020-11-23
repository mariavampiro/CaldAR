const fs = require("fs");
const express = require("express");
const router = express.Router();
const appointments = require("../data/appointments.json");

// Get all technicians
router.get("/", (req, res) => {
  const boiler = +req.query.boiler;
  const building = +req.query.building;

  // If no param return everything
  if (!boiler && !building) return res.json(appointments);

  return res.json(
    appointments.filter(
      (a) => a.buildingId === building || a.boilerId === boiler
    )
  );
});

// Get technician by ID
router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const appointment = appointments.find((t) => t.id === id);
  if (!appointment) return res.sendStatus(404);

  return res.json(appointment);
});

// Delete technician by ID
router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const deletedAppointment = appointments.find((t) => t.id === id);
  if (!deletedAppointment) return res.sendStatus(404);

  // Technicna found, remove from DB
  const filteredAppointments = appointments.filter(
    (t) => t.id !== deletedAppointment.id
  );

  const appointmentsJSON = JSON.stringify(filteredAppointments);
  fs.writeFile("./src/data/appointments.json", appointmentsJSON, (err) => {
    if (err) return res.status(500).send("Error in saving changes.");

    return res.sendStatus(204);
  });
});

module.exports = router;
