import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';
import { Mdx } from '../../../types/page';
import PageItem from '../../PageItem';

const ArticleWrapper = styled.div`
  a {
    display: block;
    padding: 2.4rem;
    transition: box-shadow 0.2s, background 0.2s;

    ${({ theme }) => breakpoint('lg', 'max')`
      background: white;
      box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);
      margin-bottom: 1.5rem;

      h3 {
        color: ${theme.primary};
      }
    `};

    :hover {
      background: white;
      box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface Props {
  articles: Mdx[];
  slug: string;
}

const PopularArticle: FunctionComponent<Props> = ({ articles, slug }) => {
  const article = articles.find(article => article.slug === slug);
  if (article) {
    return (
      <ArticleWrapper key={slug}>
        <PageItem page={article} titleOnly={false} />
      </ArticleWrapper>
    );
  }

  return null;
};

export default PopularArticle;
