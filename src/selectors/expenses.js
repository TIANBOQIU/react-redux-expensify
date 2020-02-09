/**
 * selector for store:expenses
 * filtering and sorting
 */
import moment from "moment";
const getVisibleExpenses = (
  expenses,
  { searchText, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      //console.log(expense.description);
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch =
        !startDate || startDate.isSameOrBefore(createdAtMoment, "day");

      const endDateMatch = !endDate || endDate.isSameOrAfter(createdAtMoment);
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
