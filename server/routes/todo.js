const express = require('express')
const router = express.Router()
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  editTodo,getOnetodo
} = require('../controller/todoController')
var { signUpVal } = require("../helpers/signupValidation");

/* todo listing. */
router
  .post('/content',signUpVal, createTodo)
  .get('/content/show',getOnetodo)
  .get('/content/all', getAllTodo)
  //   .get("/customers/:id", getOneCustomers)
  .put('/content/edit/:id', editTodo)
  .delete('/content/delete/:id', deleteTodo)
//   .post("/signin", loginCustomer);

module.exports = router