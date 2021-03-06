const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PriceSchema = new Schema({
  materialid: {
    type: Schema.Types.ObjectId,
    ref: 'Material',
    required: true
  },
  local: {
    type: Boolean,
    required: true
  },
  name: {
    type: Number,
    required: true
  },
  carrier: {
    type: Schema.Types.ObjectId,
    ref: 'Carrier',
    required: true
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Price', PriceSchema, 'price')