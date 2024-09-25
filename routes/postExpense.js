const express = require("express");
const router = express.Router();
const addExpenseController = require("../controllers/addExepense");

router.post("/", addExpenseController);

module.exports = router;
