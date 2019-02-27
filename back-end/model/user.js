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

userSchema.statics.userFindAll = function() {
  return this.find({});
}

userSchema.statics.userDelete = function(userId) {
  console.log(`schema.userDelete : ${userId}`)
  return this.remove({ userId });
}

module.exports = mongoose.model('user', userSchema);
