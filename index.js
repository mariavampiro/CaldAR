const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/buildings', require('./src/controllers/buildings'));
app.use('/customers', require('./src/controllers/customers'));
app.use('/technicians', require('./src/controllers/technicians'));
app.use('/appointments', require('./src/controllers/appointments'));
app.use('/boilers', require('./src/controllers/boilers'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
