import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "../components/ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);
