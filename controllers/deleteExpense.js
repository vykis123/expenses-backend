const Expense = require("../model/Expense");

const handleRemoveExpense = async (request, response) => {
  const { id } = request.query;

  try {
    if (!id)
      response.status(401).json({ message: "Query param ID is missing" });

    const result = await Expense.findByIdAndDelete(id);

    if (!result)
      response
        .status(401)
        .json({ message: `No expense found with this id: ${id}` });

    response.status(202).json({ message: `Expense was removed.` });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = handleRemoveExpense;
