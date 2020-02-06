/**
 * selector for store:expenses
 * filtering and sorting
 */

const getVisibleExpenses = (
  expenses,
  { searchText, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      //console.log(expense.description);
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(searchText.toLowerCase());
      //console.log(expense.description, startDateMatch, endDateMatch, textMatch);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return b.createdAt - a.createdAt;
      } else if (sortBy === "amount") {
        return b.amount - a.amount;
      }
    });
};

export default getVisibleExpenses;
