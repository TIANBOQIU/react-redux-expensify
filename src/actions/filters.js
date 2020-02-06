// FILTERS: SET TEXT
export const setTextFilter = (searchText = "") => ({
  type: "SET_TEXT",
  searchText
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date"
});

// SORT_BY_AMOUNT

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});
// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
