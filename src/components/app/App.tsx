import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/">
          <HomePage />
        </Route>
        <Route exact={true} path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
