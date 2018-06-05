const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + "/controller.js");
const massive = require("massive");
require("dotenv").config("");
const session = require("express-session");
// const checkForSession = require("./middlewares/checkForSession");

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
// app.use(checkForSession);

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.post(`/api/auth/register`, mc.registerUser);
app.post(`/api/auth/login`, mc.loginUser);
app.get(`/api/posts`, mc.getAllPosts);
app.get(`/api/onepost/:postid`, mc.getOne);
app.post(`/api/newpost`, mc.newPost);
app.put(`/api/newpost/:postid`, mc.updatePost);

const port = 3001;

app.listen(port, () => {
  console.log(`LISTENING ON ${port}`);
});
