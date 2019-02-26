/** login */
exports.signIn = (req, res, next) => {
  console.log(req.body.user);
}

exports.signUp = (req, res, next) => {
  res.send({result: true});
}
