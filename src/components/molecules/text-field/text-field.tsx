import React from 'react';

import { JackInput } from '../../atoms/input';
import { JackLabel } from '../../atoms/label';

import './text-field.css';

interface IJackTextFieldProps {
  label: string;
  handleChange?: any;
  handleBlur?: any;
  value: string;
  name: string;
}

export const JackTextField = (props: IJackTextFieldProps) => {
  const {
    handleBlur,
    handleChange,
    value,
    name,
    label,
  } = props;

  return (
    <div className="textfield-container">
      <JackInput
        className="textfield-input"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <JackLabel className="textfield-label">{label}</JackLabel>
    </div>
  );
};
