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

exports.userFindAll = (req, res, next) => {
  User.userFindAll()
    .then(users => res.send(users))
    .catch(err => {
      res.send(err)
    });
}

exports.userDelete = (req, res, next) => {
  User.userDelete(req.query.userId)
    .then(result => res.send(result))
    .catch(err => console.log(`[ERROR] UserDelete : ${err}`));
}
