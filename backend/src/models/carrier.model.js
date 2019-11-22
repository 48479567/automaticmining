const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarrierSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  providerid: {
    type: Schema.Types.ObjectId,
    ref: 'Provider'
  },
  ruc: {
    type: String,
    minlength: 11,
    unique: true,
  },
  address: {
    type: String
  },
  phonenumber: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Carrier', CarrierSchema, 'carrier')