const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, require: true, unique: true },
  userPwd: { type: String, require: true },
  name: { type: String, require: false },
  email: { type: String, require: false }
},
{
  timestamps: true
});

userSchema.statics.create = function(load) {
  const user = new this(load);
  return user.save();
}

userSchema.statics.findOneUser = function(userInfo) {
  return this.findOne(userInfo);
}

module.exports = mongoose.model('user', userSchema);
