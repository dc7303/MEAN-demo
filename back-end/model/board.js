const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, require: true }
}, {
  timestamps: true
});

boardSchema.statics.create = function(payload) {
  const board = new this(payload);
  return board.save();
}

module.exports = mongoose.model('board', boardSchema);
