const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mine: {
    type: Boolean,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
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

module.exports = mongoose.model('Location', LocationSchema, 'location')