/**
 * filters reducer
 * state maintained: an object {searchText: "", sortBy="date", startDate="", endDate=""}
 * methods maintained: set text, sort by date/amount, set start/end date
 */

const filtersReducerDefaultState = {
  searchText: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };
    case "SORT_BY":
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

export default filtersReducer;
