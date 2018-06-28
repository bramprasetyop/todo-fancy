const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  content: String
},{ timestamps: true });


const todo = mongoose.model("todos", todoSchema);

module.exports = todo;
