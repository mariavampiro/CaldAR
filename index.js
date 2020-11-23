// Taken from http://expressjs.com/en/starter/hello-world.html
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 

// Buildings API location
app.use('/buildings', require('./src/controllers/buildings'));

// Customers API location
app.use('/customers', require('./src/controllers/customers'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
