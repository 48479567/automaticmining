const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TruckSchema = new Schema({
  carrierid: {
    type: Schema.Types.ObjectId,
    ref: 'Carrier',
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  mark: {
    type: String,
    required: true
  },
  plaque: {
    type: String,
    required: true
  },
  extension: {
    type: Boolean,
    default: false
  },
  capacityextension: {
    type: Number,
    validate: [ () => this.extension === true ]
  },
  status: {
    type: Boolean
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Truck', TruckSchema, 'truck')