import React from "react";
import { connect } from "react-redux";
//import ExpenseListItem from "../ExpenseListItem";
import ExpenseForm from "../ExpenseForm";
import { editExpense } from "../../actions/expenses";
const EditExpensePage = props => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        console.log("updated", props.expense.id, expense, props.expense);
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
