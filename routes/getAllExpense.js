const express = require("express");
const router = express.Router();
const getAllExpensesController = require("../controllers/getAllExpenses");

router.get("/", getAllExpensesController);

module.exports = router;
