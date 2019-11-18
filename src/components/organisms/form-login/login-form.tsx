import { Formik, FormikHandlers, FormikProps } from 'formik';
import React from 'react';

import { JackButton } from '../../atoms/buttons';
import { JackTextField } from '../../molecules/text-field/text-field';

import './login-form.css';

interface IFormValues {
  email: string;
  pass: string;
  [key: string]: string;
}

export const JackLoginForm = (props: any) => {
  const formValues: IFormValues = {
    email: '',
    pass: '',
  };

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  const formData = [
    { value: 'email', text: 'Email' },
    { value: 'pass', text: 'Contraseña' },
  ];

  const generateInput = (
    values: IFormValues,
    handleChange: FormikHandlers['handleChange'],
    handleBlur: FormikHandlers['handleBlur'],
  ) => formData.map((d) => (
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
    const {
      submitForm,
      handleChange,
      handleBlur,
      values,
    } = formikProps;

    return (
      <div>
        {generateInput(values, handleChange, handleBlur)}

        <JackButton type="submit" className="login_form-button" onClick={submitForm}>
          Submit
        </JackButton>
      </div>
    );
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      {(formikProps: FormikProps<IFormValues>) => GenerateForm(formikProps)}
    </Formik>
  );
};
