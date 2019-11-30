import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { selectUser } from '../../store/user/selectors';

export const RouteGuard = ({ Component, privated, ...rest }: any) => {
  const hasUser = !!useSelector(selectUser).name;
  const isAllow =  hasUser ? privated : !privated;

  const AuthGuard = (props: any) => isAllow ?
    (<Component {...props} />) :
    (<Redirect to={{pathname: hasUser ? '/' : '/login'}}/>);

  return (
    <Route
      render={AuthGuard}
      {...rest}
    />
  );
};
