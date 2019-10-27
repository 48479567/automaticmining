const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChequerSchema = new Schema({
  username: {
    type: String,
    minlength: 8,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  fullname: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Chequer', ChequerSchema, 'chequer')