const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + "/controller.js");
const massive = require("massive");
require("dotenv").config("");

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.post(`api/auth/register`, mc.registerUser);
app.post(`/api/auth/login`, mc.loginUser);

const port = 3001;

app.listen(port, () => {
  console.log(`LISTENING ON ${port}`);
});
