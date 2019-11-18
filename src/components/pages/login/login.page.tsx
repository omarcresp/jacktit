import React from 'react';
import { connect } from 'react-redux';

import { JackLoginForm } from '../../organisms/form-login/login-form';

export const LoginPage = connect()((props: any) => {
  console.log(props);

  return (
    <div>
      <JackLoginForm />
    </div>
  );
});
