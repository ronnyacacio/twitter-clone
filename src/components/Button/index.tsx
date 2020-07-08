import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export const Button = styled.button<Props>`
  color: ${({ outlined }) => (outlined ? 'var(--twitter)' : 'var(--white)')};
  background: ${({ outlined }) =>
    outlined ? 'transparent' : 'var(--twitter)'};
  border: ${({ outlined }) => (outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;
  outline: 0;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;

  &:hover {
    background: ${({ outlined }) =>
    outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }
`;
