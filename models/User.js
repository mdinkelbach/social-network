const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address'],
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;