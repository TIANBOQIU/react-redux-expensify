import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should generate search text using defualt value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT",
    searchText: ""
  });
});

test("should generate search text object", () => {
  const action = setTextFilter("bill");
  expect(action).toEqual({
    type: "SET_TEXT",
    searchText: "bill"
  });
});

test("should generate setup sort by date object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date"
  });
});

test("should generate setup sort by amount object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
