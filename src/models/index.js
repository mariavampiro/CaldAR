const mongoose = require("mongoose");
const appointmentsSchemas = require("./appointments")(mongoose);
const boilersSchemas = require("./boilers")(mongoose);
const buildingsSchemas = require("./buildings")(mongoose);
const customersSchemas = require("./customers")(mongoose);
const techniciansSchemas = require("./technicians")(mongoose);

module.exports = {
  mongoose: mongoose,
  // Atlas service URL
  url: process.env.DB_CONNECTION_URL,
  // Schemas
  appointments: appointmentsSchemas,
  boilers: boilersSchemas,
  buildings: buildingsSchemas,
  customers: customersSchemas,
  technicians: techniciansSchemas,
};
