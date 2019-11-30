import React from 'react';

import { IFormValues } from '../../../core/interfaces/login/login-form.interface';
import { JackLoginForm } from '../../organisms/form-login/login-form';

export const LoginPage = () => {
  const submitForm = (value: IFormValues) => {
    console.log(value);
  };

  return (
    <div>
      <JackLoginForm onSubmitForm={submitForm} />
    </div>
  );
};
