const express = require("express");
const router = express.Router();
const updateExpenseController = require("../controllers/updateExpense");

router.patch("/", updateExpenseController);

module.exports = router;
