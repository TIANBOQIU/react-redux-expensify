import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";
import ExpenseForm from "../ExpenseForm";

const AddExpensePage = props => (
  <div>
    <h3>new expense</h3>
    <ExpenseForm
      onSubmit={expense => {
        //console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
