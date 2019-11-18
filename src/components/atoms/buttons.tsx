import styled from 'styled-components';

interface IJackButtonProps {
  size?: number;
  color?: string;
}

export const JackButton = styled.button<IJackButtonProps>`
  background-color: var(--${(props) => props.color || 'primary'});
  color: var(--text-${(props) => props.color || 'primary'});
  border: none;
  border-radius: 3px;
  padding: 5px 20px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :active {
    background: var(--${(props) => props.color || 'primary'})
      linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      );
  }
`;
