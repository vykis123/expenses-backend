const Expense = require("../model/Expense");

const handleUpdateExpense = async (request, response) => {
  const allowedFields = ["title", "date", "price", "info"];

  const reqBody = request.body;
  const { id } = request.query;

  /**TODO
   * Add vlidation for key values
   * Add validation for key value types
   */

  if (Object.keys(reqBody).length === 0)
    response.status(401).json({ message: "Request body is empty" });

  /**Check if request body only has valid values */
  for (key in reqBody) {
    if (!allowedFields.includes(key)) {
      response.status(401).json({ message: "Request body is invalid." });
      return;
    }
  }

  if (!id)
    response.status(401).json({ message: "Request query ID is missing." });

  try {
    const data = await Expense.findByIdAndUpdate(id, reqBody, { new: true });
    if (!data) {
      response.status(404).json({ message: `No expense found with id ${id}.` });

      return;
    }

    response.status(202).json({ message: `Expense updated.`, Details: data });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

module.exports = handleUpdateExpense;
