const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProviderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    unique: true
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Provider', ProviderSchema, 'provider')