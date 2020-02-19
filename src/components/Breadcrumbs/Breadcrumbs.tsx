import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Text from '../ui/Text';

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
