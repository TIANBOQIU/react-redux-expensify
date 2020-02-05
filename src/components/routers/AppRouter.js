// router is actually a React Component
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// header, home page, add, edit, help, 404 Component
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
