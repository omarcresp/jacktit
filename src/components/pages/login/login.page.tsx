import React from 'react';
import { connect, useSelector } from 'react-redux';

import { getUser } from '../../../store/user/selectors';
import { JackLoginForm } from '../../organisms/form-login/login-form';

export const LoginPage = connect()((props: any) => {
  console.log(props);
  console.log(useSelector(getUser));

  return (
    <div>
      <JackLoginForm />
    </div>
  );
});
