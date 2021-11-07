import { Vegetable } from "../models/vegetable.js"

function index(req, res) {
  Vegetable.find({})
  .then(vegetables => {
    res.json(vegetables)
  })
  .catch(err=> {
    res.json(err)
  })
}

function show(req, res) {
  Vegetable.findById(req.params.id)
  .then(vegetable => {
    res.json(vegetable)
  })
  .catch(err=> {
    res.json(err)
  })
}

function create(req, res) {
  Vegetable.create(req.body)
  .then(vegetable => {
    res.json(vegetable)
  })
  .catch(err=> {
    res.json(err)
  })
}

function update(req, res) {
  Vegetable.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(vegetable => {
    res.json(vegetable)
  })
  .catch(err=> {
    res.json(err)
  })
}

function deleteVegetable(req, res) {
  Vegetable.findByIdAndDelete(req.params.id)
  .then(vegetable => {
    res.json(vegetable)
  })
}

export {
  index,
  show,
  create,
  update,
  deleteVegetable as delete
}