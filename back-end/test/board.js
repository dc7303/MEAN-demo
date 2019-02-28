const Board = require('../model/board');

const test = {title: 'test1', content:'dlkfdn'};

function insert(test) {
  Board.create(test)
    .then(res => console.log(res))
    .catch(err => console.log('errorororo'))
}


insert(test);
