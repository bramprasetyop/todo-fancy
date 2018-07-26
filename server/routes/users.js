const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  getOneCustomers,
  editCustomers,
  deleteCustomers,
  loginCustomer,loginCustomerByFb
} = require("../controller/customerController");

/* GET customer listing. */
router
  .post("/signup", createCustomer)
  .get("/customers", getCustomers)
  .get("/customers/one", getOneCustomers)
  .put("/customers/:id", editCustomers)
  .delete("/customers/:id", deleteCustomers)
  .post("/signin", loginCustomer)
  .post('/loginWithFb',loginCustomerByFb)

module.exports = router;
