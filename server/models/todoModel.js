const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let todoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "customers"
  },
  content: String
}, {
  timestamps: true
});





const todo = mongoose.model("todos", todoSchema);

module.exports = todo;