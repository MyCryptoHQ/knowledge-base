import React, { FunctionComponent } from 'react';
import Link from 'gatsby-link';

interface Props {
  parent?: {
    title: string;
    slug: string;
  };
}

const Breadcrumbs: FunctionComponent<Props> = ({ parent }) => (
  <ul className="breadcrumbs">
    <li>
      <Link to="/">Knowledge Base</Link>
    </li>
    {parent && (
      <li key={parent.slug}>
        <Link to={`/${parent.slug}`}>{parent.title}</Link>
      </li>
    )}
  </ul>
);

export default Breadcrumbs;
