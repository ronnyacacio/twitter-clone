import styled, { css } from 'styled-components';

import {
  Rocketseat,
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;

  > path {
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 8.25px 0;
  outline: 0;

  border-radius: 25px;
  cursor: pointer;

  > span {
    display: none;
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    > span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-size: 19px;
      font-weight: bold;
    }
    padding-right: 15px;
  }
`;

const iconsStyle = css`
  width: 30px;
  height: 30px;
  color: var(--white);

  flex-shrink: 0;
`;

export const HomeIcon = styled(Home)`
  ${iconsStyle}
`;

export const BellIcon = styled(Notifications)`
  ${iconsStyle}
`;

export const EmailIcon = styled(Email)`
  ${iconsStyle}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsStyle}
`;

export const ProfileIcon = styled(Person)`
  ${iconsStyle}
`;

export const BotSide = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  background: var(--gray);
  border-radius: 50%;
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;

    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
