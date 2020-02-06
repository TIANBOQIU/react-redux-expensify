import React from "react";
import ReactDOM from "react-dom";

// React Router
import AppRouter from "./components/routers/AppRouter";

// Redux store
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate } from "./actions/filters";

// CSS
import "normalize.css";
// import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => console.log(store.getState()));
// bootstrap data

store.dispatch(
  addExpense({ description: "water bill", amount: 700, createdAt: 100 })
);
store.dispatch(
  addExpense({ description: "gas bill", amount: 500, createdAt: 300 })
);
//store.dispatch(setTextFilter("gas"));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
