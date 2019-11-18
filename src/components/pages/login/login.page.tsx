import React from 'react';
import { connect } from 'react-redux';

import { setUser } from '../../../store/user/actions';
import { JackLoginForm } from '../../organisms/form-login/login-form';

export const LoginPage = connect()((props: any) => {
  const submitForm = (value: any) => {
    props.dispatch(setUser(value));
  };

  return (
    <div>
      <JackLoginForm onSubmitForm={submitForm} />
    </div>
  );
});
