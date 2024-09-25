const Expense = require("../model/Expense");
const mongoose = require("mongoose");

const handleGetSingleExpense = async (request, response) => {
  const { id } = request.query;
  try {
    if (!id)
      response.status(401).json({ message: "Query param ID is missing" });

    const expenseId = new mongoose.Types.ObjectId(id);

    const expense = await Expense.findOne({ _id: expenseId });

    if (!expense)
      response.status(404).json({ message: `No expense found with id: ${id}` });

    response.status(202).json(expense);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = handleGetSingleExpense;
