const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaterialSchema = new Schema({
  name: {
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

module.exports = mongoose.model('Material', MaterialSchema, 'material')