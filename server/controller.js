const axios = require("axios");

const registerUser = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, password } = req.params;

  dbInstance
    .register_user()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  registerUser
};
