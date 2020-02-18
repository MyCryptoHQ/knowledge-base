import React, { FunctionComponent } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import PopularArticle from './PopularArticle';
import styled from 'styled-components';
import { POPULAR_ARTICLES } from '../../config/articles';

const PaddedHeading = styled(Heading)`
  padding-left: 2.4rem;
`;

const PopularArticles: FunctionComponent = () => (
  <Section>
    <Container>
      <PaddedHeading as="h2">Popular Articles</PaddedHeading>
      {POPULAR_ARTICLES.map(slug => (
        <PopularArticle slug={slug} />
      ))}
    </Container>
  </Section>
);

export default PopularArticles;
