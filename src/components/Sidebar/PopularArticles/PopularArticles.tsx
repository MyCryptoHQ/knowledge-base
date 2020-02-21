import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { POPULAR_ARTICLES } from '../../../config/articles';
import PageSelector from '../../PageSelector';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';

const PopularArticlesWrapper = styled.section``;

const PopularArticles: FunctionComponent = () => (
  <PopularArticlesWrapper>
    <Heading as="h3">Popular Articles</Heading>
    <List>
      {POPULAR_ARTICLES.map(slug => (
        <ListItem key={slug}>
          <PageSelector slug={slug} titleOnly={true} />
        </ListItem>
      ))}
    </List>
  </PopularArticlesWrapper>
);

export default PopularArticles;
