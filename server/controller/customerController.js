const Customer = require("../models/customerModel");
// console.log(Customer.schema.obj.password);
var bcrypt = require("bcrypt");
let saltRounds = 10;

var jwt = require("jsonwebtoken");

function createCustomer(req, res) {
  let objCustomer = {
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  };
  Customer.create(objCustomer)
    .then(customers => {
      res.status(200).json({
        message: "add new customer success",
        customers
      });
    })
    .catch(err => {
      res.status(400).json({
        err
      });
    });
}

function getCustomers(req, res) {
  Customer.find()
    .then(customers => {
      res.status(200).json({
        message: "get all customer success",
        customers
      });
    })
    .catch(err => {
      res.status(400).json({
        err
      });
    });
}

function getOneCustomers(req, res) {

  var decoded = jwt.verify(req.headers.token,process.env.SECRET)
  let customerId = decoded.userId;
  Customer.findById(customerId).then(customers => {
    res.status(200).json({
      message: "get one customer success",
      customers
    });
  });
}

function editCustomers(req, res) {
  let customerId = req.params.id;
  let objCustomer = {
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  };
  Customer.findByIdAndUpdate(customerId, objCustomer).then(customers => {
    res.status(200).json({
      message: "update customer success",
      customers
    });
  });
}

function deleteCustomers(req, res) {
  let customerId = req.params.id;
  Customer.findByIdAndRemove(customerId).then(customers => {
    res.status(200).json({
      message: "delete customer success",
      customers
    });
  });
}


function loginCustomer(req, res) {
  let emailCustomer = req.body.email;
  let pass = req.body.password;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(pass, salt);
  //   console.log('=============>',pass);

  Customer.findOne({
      email: emailCustomer
    })
    .then(customers => {
      // console.log(customers);

      let compare = bcrypt.compareSync(pass, customers.password);
      if (compare) {
        jwt.sign({
            userId: customers._id
          },
          process.env.SECRET,
          (err, token) => {
            res.status(200).json({
              message: "login successfully",
              token
            });
            

          }
        );
      }
    })
    .catch(err => {
      res.status(400).json({
        message: "wrong password/email "
      });
    });
}

// ====================== tambahan yang ini coy ===========================

function loginCustomerByFb(req, res) {
  let emailCustomer = req.body.email;
  let pass = req.body.password;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(pass, salt);
  //   console.log('=============>',pass);

  Customer.findOne({
      email: emailCustomer
    })
    .then(customers => {
      // console.log(customers);
      if (!customers) {

        console.log('==========', 'masuks');
        let objCustomer = {
          fullName: req.body.fullName,
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone
        };
        Customer.create(objCustomer)
          .then(customers => {
            jwt.sign({
                userId: customers._id
              },
              process.env.SECRET,
              (err, token) => {
                res.status(200).json({
                  message: "login successfully",
                  token
                });
                // console.log(token);
              }
            )
          })
          .catch(err => {
            res.status(400).json({
              err
            });
          });
      } else {
        let compare = bcrypt.compareSync(pass, customers.password);
        if (compare) {
          jwt.sign({
              userId: customers._id
            },
            process.env.SECRET,
            (err, token) => {
              res.status(200).json({
                message: "login successfully",
                token
              });
              // console.log(token);
            }
          );
        }
      }

    })
    .catch(err => {
      res.status(400).json({
        message: "wrong password/email "
      });
    });
}
// ====================== tambahan yang ini coy ===========================


module.exports = {
  createCustomer,
  getCustomers,
  getOneCustomers,
  editCustomers,
  deleteCustomers,
  loginCustomer,
  loginCustomerByFb
};