const express = require("express");
const router = express.Router();
const getSingleExpenseController = require("../controllers/getSingleExpense");

router.get("/", getSingleExpenseController);

module.exports = router;
