import styled from 'styled-components';

interface IJackInputProps {}

export const JackInput = styled.input<IJackInputProps>`
  border-radius: 3px;
  border: 1px solid var(--white);
  color: var(--black);
  padding: 5px;
  box-sizing: border-box;

  :focus {
    outline: none;
    border: 1px solid var(--acent-light)
  }
`;
