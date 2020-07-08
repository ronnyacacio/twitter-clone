import React from 'react';

import { Feed } from '..';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Ronny Acácio</h1>
        <h2>@ronnyacacio</h2>

        <p>Developer WEB and Mobile</p>

        <ul>
          <li>
            <LocationIcon />
            Quixadá - CE
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de maio de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>207</strong>
          </span>
          <span>
            <strong>68 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;