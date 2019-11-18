import styled from 'styled-components';

interface IJackLabelProps {
  size?: number;
  color?: string;
}

export const JackLabel = styled.p<IJackLabelProps>`
  color: var(--${(props) => props.color || 'initial'});
  font-size: ${(props) => props.size || 1}rem;
`;
