import React, { FunctionComponent } from 'react';
import PageSelector from '../../PageSelector';
import { POPULAR_ARTICLES } from '../../../config/articles';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import styled from 'styled-components';
import Heading from '../../ui/Heading';

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
