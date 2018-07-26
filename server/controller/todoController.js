const Todo = require('../models/todoModel')

var jwt = require("jsonwebtoken");

function createTodo(req, res) {
  var decoded = jwt.verify(req.headers.token,process.env.SECRET)


  let obj = {
    content: req.body.content,
    date:req.body.date,
    userId : decoded.userId
  }

  Todo.create(obj)
  // console.log(obj)
  
    .then(todo => {
      res.status(200).json({
        message: 'add todo success',
        todo
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'add todo failed'
      })
    })
}

function getAllTodo(req, res) {
  Todo.find()
    .then(todos => {
      res.status(200).json({
        message: 'get all todo success',
        todos
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed get all todo'
      })
    })
}

function deleteTodo(req, res) {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => {
      res.status(200).json({
        message: 'delete success',
        todo
      })
    })
    .catch(err => {
      res.status(200).json({
        message: 'delete failed'
      })
    })
}

function editTodo(req, res) {
  let id = req.params.id
  let obj = {
    content: req.body.content,
    date:req.body.date
  }

  Todo.findByIdAndUpdate(id, obj)
    .then(todo => {
      res.status(200).json({
        message: 'update success',
        todo
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'update failed'
      })
    })
}



function getOnetodo(req, res) {
  // console.log('--------------------------masuk nih');
  console.log(req.headers);
  
  // console.log(process.env.JWT_SALT);
  
  var decoded = jwt.verify(req.headers.token,process.env.SECRET)

  // console.log('xxxxxxxxxxxxxxxxxxxxxxxx',decoded);
  
  // console.log(decoded);
  // console.log('===================',req.headers.token);
  
  

  Todo.
  find({userId: decoded.userId}).
  populate('userId').
  exec(function (err, dataTodos) {
    if (err) {
      res.status(400).json({message:err.message}) 
    }
    else{
      res.status(200).json({message : 'berhasil',dataTodos})
    }
  });
}

module.exports = {
  createTodo,
  getAllTodo,
  deleteTodo,
  editTodo,
  getOnetodo
}