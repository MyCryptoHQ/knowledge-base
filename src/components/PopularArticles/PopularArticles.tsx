import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { POPULAR_ARTICLES } from '../../config/articles';
import breakpoint from '../../theme/breakpoints';
import { Mdx } from '../../types/page';
import Heading from '../ui/Heading';
import Section from '../ui/Section';
import PopularArticle from './PopularArticle';

const PaddedHeading = styled(Heading)`
  padding-left: 2.4rem;
`;

const CategoriesSection = styled(Section)`
  ${breakpoint('lg', 'max')`
    padding: 0 0 4.6rem 0;
  `};
`;

interface Props {
  articles: Mdx[];
}

const PopularArticles: FunctionComponent<Props> = ({ articles }) => (
  <CategoriesSection>
    <PaddedHeading as="h2">Popular Articles</PaddedHeading>
    {POPULAR_ARTICLES.map((slug) => (
      <PopularArticle key={slug} articles={articles} slug={slug} />
    ))}
  </CategoriesSection>
);

export default PopularArticles;
