
import {Car} from '../models/cars.js'
function index(req, res) {
Car.find({})
  .then(cars =>{
    res.render('cars/index',{
      cars,
      title: 'hellow wordl'
    })
  })
}
function newCar(req, res) {
  res.render('cars/new')
}

function create(req, res){
  Car.create(req.body)
  .then(car => res.redirect('/cars'))
  .catch(err => console.error(err))
}

function deleteCars(req, res){
Car.findByIdAndDelete(req.params.id)
.then(car =>res.redirect('/cars'))
}
function show(req, res){
Car.findById(req.params.id)
.then(car =>{
  res.render('cars/show'),{
    car
  }
})
.catch(err => console.error(err))  
}

export{
  index,
  newCar as new,
  create,
  deleteCars as delete,
  show
}