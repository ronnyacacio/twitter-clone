import React from 'react';

import { MenuBar, Main, SideBar } from '../../components';
import { Container, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />

        <Main />

        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Home;