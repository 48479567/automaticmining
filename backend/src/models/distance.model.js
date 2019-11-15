const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DistanceSchema = new Schema({
	origin: {
		type: Schema.Types.ObjectId,
		ref: 'Location',
		required: true
	},
	destiny: {
		type: Schema.Types.ObjectId,
		ref: 'Location',
		required: true
	},
	value: {
		type: Number,
		required: true
	},
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Distance', DistanceSchema, 'distance')