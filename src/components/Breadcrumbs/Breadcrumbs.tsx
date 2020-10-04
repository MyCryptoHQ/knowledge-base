import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Breadcrumb as BreadcrumbItem } from '../../types/breadcrumb';
import Text from '../ui/Text';

interface Props {
  breadcrumbs: BreadcrumbItem[];
}

const StyledBreadcrumbs = styled.ul`
  margin: 0;
  padding: 0;
`;

const Breadcrumb = styled(Text).attrs({ as: 'li', small: true })`
  display: inline;

  &:after {
    padding: 0 0.5em;
    content: '>';
  }

  &:last-of-type:after {
    content: '';
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: normal;
  }
`;

const Breadcrumbs: FunctionComponent<Props> = ({ breadcrumbs }) => (
  <StyledBreadcrumbs>
    <Breadcrumb>
      <Link to="/">Knowledge Base</Link>
    </Breadcrumb>
    {breadcrumbs.map((breadcrumb) => (
      <Breadcrumb key={breadcrumb.slug}>
        <Link to={`/${breadcrumb.slug}`}>{breadcrumb.title}</Link>
      </Breadcrumb>
    ))}
  </StyledBreadcrumbs>
);

export default Breadcrumbs;
