const Expense = require("../model/Expense");

const handleAddExpense = async (request, response) => {
  /**Validate request data for empty values. Can be expanded to check also type of data. But for now leaving only for empty */
  /**TODO:
   * Add validation for request types
   * Add validation for lengths/content for title, price, date format, info if passed
   */

  if (Object.keys(request.body).length === 0)
    response.status(401).json({ message: "Request body data is missing." });

  if (!request.body.title)
    response.status(401).json({ message: "Title is missing." });

  if (!request.body.price)
    response.status(401).json({ message: "Price is missing." });

  if (!request.body.date)
    response.status(401).json({ message: "Date is missing." });

  try {
    const { title, price, date, info = "" } = request.body;

    const newExpense = await Expense.create({
      title,
      price,
      date,
      info,
    });

    response.status(201).json({
      message: `New expense ${newExpense._id} was created.`,
      _id: newExpense._id,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = handleAddExpense;
