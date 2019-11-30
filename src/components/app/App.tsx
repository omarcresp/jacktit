import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { auth } from 'firebase';
import { getUser } from '../../store/user/actions';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { RouteGuard } from '../route-guards/route-guard';

export const App = () => {
  const dispatch = useDispatch();

  auth().onAuthStateChanged(() => {
    dispatch(getUser());
  });

  return (
    <BrowserRouter>
      <Switch>
        <RouteGuard path="/" exact={true} Component={HomePage} privated={true} />
        <RouteGuard path="/login" Component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
