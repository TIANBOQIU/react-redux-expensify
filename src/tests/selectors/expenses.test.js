import selectExpense from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    searchText: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    searchText: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

// should filter by end date
test("should filter expenses by the end date", () => {
  const filters = {
    searchText: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(1, "days")
  };

  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

// should sort by date
test("should sort by date", () => {
  const filters = {
    searchText: "",
    sortBy: "date",
    startDtae: undefined,
    endDate: undefined
  };

  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test("should sort by amount", () => {
  const filters = {
    searchText: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
