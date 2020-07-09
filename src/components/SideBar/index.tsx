import React from 'react';
import StickyBox from 'react-sticky-box';

import { List, FollowSuggestion, News } from '..';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Diego Fernandes" nickname="@diego3g" />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl" />
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
