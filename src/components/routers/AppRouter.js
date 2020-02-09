// router is actually a React Component
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// header, home page, add, edit, help, 404 Component
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../Header";
import AddExpensePage from "../pages/AddExpensePage";
import EditExpensePage from "../pages/EditExpensePage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
