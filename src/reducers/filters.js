/**
 * filters reducer
 * state maintained: an object {searchText: "", sortBy="date", startDate="", endDate=""}
 * methods maintained: set text, sort by date/amount, set start/end date
 */

import moment from "moment";

// Filters Reducer
const filterReducerDefaultState = {
  searchText: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filterReducer;
