const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

let customerSchema = new Schema({
  fullName: String,
  userName: String,
  email: String,
  password: { type: String, required: true },
  phone: String
},{ timestamps: true });

customerSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// customerSchema.methods.comparePassword = function(passw, cb) {
//   bcrypt.compare(passw, this.password, function(err, isMatch) {
//     if (err) {
//       return cb(err);
//     }
//     cb(null, isMatch);
//   });
// };

const customer = mongoose.model("customers", customerSchema);

module.exports = customer;
