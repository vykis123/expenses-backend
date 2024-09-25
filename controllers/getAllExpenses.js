const Expense = require("../model/Expense");

const handleGetAllExpenses = async (request, response) => {
  try {
    const expenses = await Expense.find();

    if (!expenses) {
      return response.status(201).json({ data: [] });
    }

    response.status(201).json({ expenses: expenses });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = handleGetAllExpenses;
