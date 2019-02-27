const User = require('../model/user');

/** login */
exports.signIn = (req, res, next) => {
  User.findOneUser(req.body)
    .then(user => {res.send(user)})
    .catch(err => {console.log(err)});
}

exports.signUp = (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(err => {
      res.send(false);
      console.error(err);
    });
}
