const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TravelSchema = new Schema({
  priceid: {
    type: Schema.Types.ObjectId,
    ref: 'Price',
    required: true
  },
  firstprice: {
    type: Number,
    required: true
  },
  aditionalprice: {
    type: Number,
    required: true
  },
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

module.exports = mongoose.model('Travel', TravelSchema, 'travel')