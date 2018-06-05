const axios = require("axios");
// const users = require("../models/users");

//Login
const registerUser = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { session } = req;
  const { username, password } = req.body;

  dbInstance
    .register_user([username, password])
    .then(user => {
      session.userid = user[0].id;
      res.status(200).send(user);
      console.log(session);
    })
    .catch(console.log);
};

// const registerUser = ( req, res, next ) => {
//   const { session } = req;
//   const { username, password } = req.body;

//   users.push({ id, username, password });
//   id++;

//   session.user.username = username;

//   res.status(200).send( session.user );
// },

const loginUser = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { session } = req;
  const { username, password } = req.body;

  dbInstance

    .login_user([username, password])
    .then(user => {
      session.userid = user[0].id;
      res.status(200).send(user);
      console.log(user);
      console.log(session);
    })
    .catch(console.log);
};

// const loginUser = ( req, res, next ) => {
//   const { session } = req;
//   const { username, password } = req.body;

//   const user = users.find( user => user.username === username && user.password === password );

//   if ( user ) {
//     session.user.username = user.username;
//     res.status(200).send(session.user);
//   } else {
//     res.status(500).send('Unauthorized.');
//   }
// },

//APP
const getAllPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { userid } = req.session;
  const { userposts, string } = req.query;
  // console.log(id, userposts, string);

  if (userposts && string) {
    // Get all posts where title contains string
    dbInstance
      .postsandstring([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log);
  } else if (!userposts && !string) {
    // Get all posts where user is not author
    dbInstance
      .no_postsandstring([userid])
      .then(response => res.status(200).send(response))
      .catch(console.log);
  } else if (!userposts && string) {
    // Get all posts where user is not author and title contains string
    dbInstance
      .noposts_string([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log);
  } else if (userposts && !string) {
    // Return all posts
    dbInstance
      .posts_nostring([userposts, string])
      .then(response => res.status(200).send(response))
      .catch(console.log);
  }
};
const getOne = (req, res, next) => {
  const db = req.app.get("db");
  const { postid } = req.params;
  db.get_post([postid])
    .then(response => res.status(200).send(response[0]))
    .catch(console.log);
};

const newPost = (req, res, next) => {
  const db = req.app.get("db");
  const { userid } = req.session;
  const { title, content } = req.body;
  // console.log(typeof +userid, title, content);
  db.new_post([+userid, title, content])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const updatePost = (req, res) => {
  const db = req.app.get("db");
  const { postid } = req.params;
  const { content } = req.body;
  db.update_post([postid, content])
    .then(response => {
      console.log(response);
    })
    .catch(e => console.log(e));
};

module.exports = {
  registerUser,
  loginUser,
  getAllPosts,
  getOne,
  newPost,
  updatePost
};
