import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { RelatedArticle } from '../../../models/page';
import Text from '../../ui/Text';
import Link from '../../Link';

interface Props {
  relatedArticles: RelatedArticle[];
}

const StyledRelatedArticles = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled(Text)``;

const RelatedArticles: FunctionComponent<Props> = ({ relatedArticles }) => (
  <StyledRelatedArticles>
    {relatedArticles.map(article => (
      <Item key={article.url}>
        <Link to={article.url} external={article.external}>
          {article.title}
        </Link>
      </Item>
    ))}
  </StyledRelatedArticles>
);

export default RelatedArticles;
