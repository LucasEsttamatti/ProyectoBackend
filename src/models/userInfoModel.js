const mongoose = require('mongoose')

const { Schema } = mongoose

const model = new Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true
  },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('UserInfo', model)