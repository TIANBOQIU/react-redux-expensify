import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import { removeExpense, addExpense, editExpense } from "../../actions/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = removeExpense({ id: expenses[1].id });
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = removeExpense({ id: "-1" });
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const e = {
    description: "Test",
    note: "",
    amount: 19500,
    createdAt: 10
  };
  const action = addExpense(e);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
  const note = "new note";
  const action = editExpense(expenses[0].id, { note });
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note);
});

test("should not edit expense if expense not found", () => {
  const action = editExpense("-1", { amount: -10000 });
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
