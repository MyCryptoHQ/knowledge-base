import { FunctionComponent } from 'react';
import { RelatedArticle } from '../../types/page';
import Link from '../Link';
import H2 from '../markdown/default/H2';
import ListItem from '../markdown/default/List/ListItem';
import UnorderedList from '../markdown/default/List/UnorderedList';

export interface Props {
  relatedArticles: RelatedArticle[];
}

const PageArticles: FunctionComponent<Props> = ({ relatedArticles }) => (
  <>
    <H2>Related Articles</H2>
    <UnorderedList>
      {relatedArticles.map((relatedArticle) => (
        <ListItem key={relatedArticle.url}>
          <Link to={relatedArticle.url} external={!relatedArticle.isRelative}>
            {relatedArticle.title}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  </>
);

export default PageArticles;
