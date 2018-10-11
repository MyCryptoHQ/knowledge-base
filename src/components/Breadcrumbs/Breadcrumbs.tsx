import * as React from 'react';
import { Breadcrumb } from '../../models/breadcrumb';
import Link from 'gatsby-link';

interface Props {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.StatelessComponent<Props> = ({ breadcrumbs }) => (
  <ul className="breadcrumbs">
    <li>
      <Link to="/">Knowledge Base</Link>
    </li>
    {breadcrumbs.map(breadcrumb => (
      <li key={breadcrumb.title}>
        <Link to={`/${breadcrumb.slug}`}>{breadcrumb.title}</Link>
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
