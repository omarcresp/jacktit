import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../../store/user/actions';
import { selectUsername } from '../../../store/user/selectors';
import { JackLoginForm } from '../../organisms/form-login/login-form';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUsername);

  const submitForm = (value: any) => {
    dispatch(loginUser());
  };

  return (
    <div>
      {userName}
      <JackLoginForm onSubmitForm={submitForm} />
    </div>
  );
};
