const Board = require('../model/board');

exports.boardInsert = (req, res, next) => {
  Board.create(req.body)
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
}
