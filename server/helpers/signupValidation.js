// ============= tambahan npm install --save express-validator =========
const {
  check
} = require("express-validator/check");
// ============= tambahan npm install --save express-validator =========

var signUpVal = [
  check("content")
  .isEmpty()
  .trim()
  .isLength({
    min: 1
  })
  .withMessage("Content must be at least 1 chars long")
];
module.exports = {
  signUpVal
};