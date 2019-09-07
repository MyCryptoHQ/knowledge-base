import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
  parent?: {
    title: string;
    slug: string;
  };
}

const StyledBreadcrumbs = styled.ul`
  margin: 0;
  padding: 0;
`;

const Breadcrumb = styled.li`
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
  }
`;

const Breadcrumbs: FunctionComponent<Props> = ({ parent }) => (
  <StyledBreadcrumbs>
    <Breadcrumb>
      <Link to="/">Knowledge Base</Link>
    </Breadcrumb>
    {parent && (
      <Breadcrumb key={parent.slug}>
        <Link to={`/${parent.slug}`}>{parent.title}</Link>
      </Breadcrumb>
    )}
  </StyledBreadcrumbs>
);

export default Breadcrumbs;
