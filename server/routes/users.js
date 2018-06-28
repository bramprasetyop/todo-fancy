const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  getOneCustomers,
  editCustomers,
  deleteCustomers,
  loginCustomer
} = require("../controller/customerController");

/* GET customer listing. */
router
  .post("/signup", createCustomer)
  .get("/customers", getCustomers)
  .get("/customers/:id", getOneCustomers)
  .put("/customers/:id", editCustomers)
  .delete("/customers/:id", deleteCustomers)
  .post("/signin", loginCustomer);

module.exports = router;
