import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { POPULAR_ARTICLES } from '../../../config/articles';
import { Mdx } from '../../../types/page';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import PopularArticle from './PopularArticle';

const PopularArticlesWrapper = styled.section``;

interface Props {
  articles: Mdx[];
}

const PopularArticles: FunctionComponent<Props> = ({ articles }) => (
  <PopularArticlesWrapper>
    <Heading as="h3">Popular Articles</Heading>
    <List>
      {POPULAR_ARTICLES.map((slug) => (
        <ListItem key={slug}>
          <PopularArticle articles={articles} slug={slug} />
        </ListItem>
      ))}
    </List>
  </PopularArticlesWrapper>
);

export default PopularArticles;
