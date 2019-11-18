import React from 'react';
import { FormikProps, Formik } from 'formik';

import { JackTextField } from '../../molecules/text-field/text-field';
import { JackButton } from '../../atoms/buttons';

import './login-form.css';

interface IFormValues {
  email: string;
  pass: string;
  [key: string]: string;
}

export const JackLoginForm = (props: any) => {
  const formValues: IFormValues = {
    email: '',
    pass: ''
  };

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  const formData = [
    { value: 'email', text: 'Email' },
    { value: 'pass', text: 'Contraseña' }
  ];

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      {(formikProps: FormikProps<IFormValues>) => {
        const {
          submitForm,
          handleChange,
          handleBlur,
          values
        } = formikProps;

        return (
          <div>
            { formData.map(d => (
              <JackTextField
                key={d.value}
                label={d.text}
                name={d.value}
                value={values[d.value]}
                handleChange={handleChange}
                handleBlur={handleBlur}
              ></JackTextField>
            )) }

            <JackButton type="submit" className="login_form-button" onClick={submitForm}>
              Submit
            </JackButton>
          </div>
        )
      }}
    </Formik>
  );
};
