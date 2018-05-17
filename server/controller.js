const axios = require("axios");

const registerUser = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, password } = req.body;

  dbInstance
    .register_user([username, password])
    .then(response => res.status(200).send(response[0]))
    .catch(console.log());
};

const loginUser = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, password } = req.body;

  dbInstance
    .login_user([username, password])
    .then(response => res.status(200).send(response[0]))
    .catch(console.log());
};

const getAllPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  const { userposts, string } = req.query;
  console.log(id, userposts, string);

  if (userposts && string) {
    // Get all posts where title contains string
    dbInstance
      .postsandstring([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log());
  } else if (!userposts && !string) {
    // Get all posts where user is not author
    dbInstance
      .no_postsandstring([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log());
  } else if (!userposts && string) {
    // Get all posts where user is not author and title contains string
    dbInstance
      .noposts_string([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log());
  } else if (userposts && !string) {
    // Return all posts
    dbInstance
      .posts_nostring([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log());
  }
};
const getOne = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db
    .get_post([id])
    .then(post => res.status(200).send(post))
    .catch(() => res.status(500).send());
};

module.exports = {
  registerUser,
  loginUser,
  getAllPosts,
  getOne
};
