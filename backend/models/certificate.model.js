const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
   code: {
      type: String,
      required: true
   },
   provider: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   plannedExecutionDate: {
      type: Date,
      required: false
   },
   completed: {
      type: Date,
      required: false
   },
   description: {
      type: String,
      required: false
   }
   //,timestamps: true
});

module.exports = mongoose.model('Certificate', certificateSchema);