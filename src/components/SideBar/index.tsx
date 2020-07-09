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
            title="Quem seguir"
            elements={[
              <FollowSuggestion name="Diego Fernandes" nickname="@diego3g" />,
              <FollowSuggestion name="Cristiano Ronaldo" nickname="@Cristiano" />,
              <FollowSuggestion name="Guilherme Rodz" nickname="@guilherme_rodz" />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Covid-19" description="Saiba como se proteger do vírus" />,
              <News title="Rocketseat" description="Site de educação em tecnologia abre a nova turma do seu bootcamp" />,
              <News title="GitHub" description="Plataforma disponibiliza nova função para o Readme.md" />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
