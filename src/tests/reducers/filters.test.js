import filtersReducer from "../../reducers/filters";
import moment from "moment";

import {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    searchText: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to account", () => {
  const state = filtersReducer(undefined, sortByAmount());
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    searchText: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = sortByDate();
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, setTextFilter("water"));
  expect(state.searchText).toBe("water");
});

test("should set startDate filter", () => {
  const startDate = moment();
  const action = setStartDate(startDate);
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
  const endDate = moment();
  const action = setEndDate(endDate);
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
