import React, { FunctionComponent } from 'react';
import { Mdx } from '../../../../types/page';
import PageItem from '../../../PageItem';

interface Props {
  articles: Mdx[];
  slug: string;
}

const PopularArticle: FunctionComponent<Props> = ({ articles, slug }) => {
  const article = articles.find((article) => article.slug === slug);
  if (article) {
    return <PageItem page={article} titleOnly={true} />;
  }

  return null;
};

export default PopularArticle;
