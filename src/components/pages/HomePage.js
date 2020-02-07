import React from "react";

import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";

const HomePage = props => (
  <div>
    <h1>Home</h1>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default HomePage;
