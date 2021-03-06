const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkSchema = new Schema({
  companyid: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
}, { timestamps: { createdAt: 'createdat', updatedAt: 'updatedat' } })

module.exports = mongoose.model('Work', WorkSchema, 'work')
