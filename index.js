const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const db = require("./src/models");

const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(routes);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to DB successful!");

    // Initiate Server
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Cannot connect to DB!", err);
    process.exit();
  });
