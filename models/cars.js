import mongoose from 'mongoose';

const carsSchema = new mongoose.Schema({
  name: String,
  color: String,
  fast: Boolean,
})
const Car = mongoose.model('Cars',carsSchema)
export {
  Car
}