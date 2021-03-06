import styled from 'styled-components';

import { Search } from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 12px 24px;
  width: min(399px, 100%);
  background: var(--primary);

  position: sticky;
  top: 0;
  z-index: 2;

  max-height: 60px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 52px;
  background: var(--search);
  border-radius: 19.5px;
  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    border: 1px solid var(--twitter);
    background: var(--primary);

    ~ svg {
      fill: var(--twitter);
    }
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
