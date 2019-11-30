import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { IFormValues } from '../../../core/interfaces/login/login-form.interface';
import { loginUser } from '../../../store/user/actions';
import { JackButton } from '../../atoms/buttons';
import { GoogleButton } from '../../atoms/googleButton';
import { JackTextField } from '../../molecules/text-field/text-field';

import './login-form.css';

interface IJackLoginFormProps {
  onSubmitForm: (values: IFormValues) => void;
}

interface IFormData {
  value: string;
  text: string;
  type?: string;
}

export const JackLoginForm = (props: IJackLoginFormProps) => {
  const dispatch = useDispatch();
  const login = () => dispatch(loginUser());

  const { onSubmitForm } = props;

  const formValues: IFormValues = {
    email: '',
    pass: '',
  };

  const formData: IFormData[] = [
    { value: 'email', text: 'Email', type: 'email' },
    { value: 'pass', text: 'Contraseña', type: 'password' },
  ];

  const generateInput = ({ values, handleBlur, handleChange }: FormikProps<IFormValues>) => formData.map((d) => (
    <JackTextField
      key={d.value}
      label={d.text}
      name={d.value}
      value={values[d.value]}
      handleChange={handleChange}
      handleBlur={handleBlur}
      inputType={d.type}
    />
  ));

  const GenerateForm = (formikProps: FormikProps<IFormValues>) => {
    const { submitForm } = formikProps;

    return (
      <div>
        {generateInput(formikProps)}

        <JackButton type="submit" className="login_form-button" onClick={submitForm}>
          Submit
        </JackButton>

        <GoogleButton click={login}/>
      </div>
    );
  };

  return (
    <Formik initialValues={formValues} onSubmit={onSubmitForm}>
      {(formikProps: FormikProps<IFormValues>) => GenerateForm(formikProps)}
    </Formik>
  );
};
