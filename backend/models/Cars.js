// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
