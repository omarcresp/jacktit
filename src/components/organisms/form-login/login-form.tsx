import { Formik, FormikHandlers, FormikProps } from 'formik';
import React from 'react';

import { JackButton } from '../../atoms/buttons';
import { JackTextField } from '../../molecules/text-field/text-field';

import { GoogleButton } from '../../atoms/googleButton';
import './login-form.css';

interface IFormValues {
  email: string;
  pass: string;
  [key: string]: string;
}

interface IJackLoginFormProps {
  onSubmitForm: (values: IFormValues) => void;
}

export const JackLoginForm = (props: IJackLoginFormProps) => {
  const { onSubmitForm } = props;

  const formValues: IFormValues = {
    email: '',
    pass: '',
  };

  const formData = [
    { value: 'email', text: 'Email' },
    { value: 'pass', text: 'Contraseña' },
  ];

  const generateInput = ({ values, handleBlur, handleChange }: FormikProps<IFormValues>) => formData.map((d) => (
    <JackTextField
      key={d.value}
      label={d.text}
      name={d.value}
      value={values[d.value]}
      handleChange={handleChange}
      handleBlur={handleBlur}
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

        <GoogleButton/>
      </div>
    );
  };

  return (
    <Formik initialValues={formValues} onSubmit={onSubmitForm}>
      {(formikProps: FormikProps<IFormValues>) => GenerateForm(formikProps)}
    </Formik>
  );
};
