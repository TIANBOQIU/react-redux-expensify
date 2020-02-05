import React from "react";

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      amount: {amount} created at: {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
