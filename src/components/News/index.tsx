import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  description: string;
}

const News: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{description}</strong>
    </Container>
  );
}

export default News;
