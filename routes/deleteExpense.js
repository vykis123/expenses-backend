const express = require("express");
const router = express.Router();
const deleteExpenseController = require("../controllers/deleteExpense");

router.delete("/", deleteExpenseController);

module.exports = router;
