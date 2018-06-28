const Todo = require('../models/todoModel')

function createTodo(req, res) {
  let obj = {
    content: req.body.content
  }

  Todo.create(obj)
    .then(todo => {
      res.status(200).json({ message: 'add todo success', todo })
    })
    .catch(err => {
      res.status(400).json({ message: 'add todo failed' })
    })
}

function getAllTodo(req, res) {
  Todo.find()
    .then(todos => {
      res.status(200).json({ message: 'get all todo success', todos })
    })
    .catch(err => {
      res.status(400).json({ message: 'failed get all todo' })
    })
}

function deleteTodo(req, res) {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => {
      res.status(200).json({ message: 'delete success', todo })
    })
    .catch(err => {
      res.status(200).json({ message: 'delete failed' })
    })
}

function editTodo(req, res) {
  let id = req.params.id
  let obj = {
    content: req.body.content
  }

  Todo.findByIdAndUpdate(id, obj)
    .then(todo => {
      res.status(200).json({ message: 'update success', todo })
    })
    .catch(err => {
      res.status(400).json({ message: 'update failed' })
    })
}

module.exports = {
  createTodo,
  getAllTodo,
  deleteTodo,
  editTodo
}
