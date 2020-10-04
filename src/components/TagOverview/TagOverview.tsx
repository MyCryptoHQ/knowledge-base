import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import { Mdx } from '../../types/page';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

const TagWrapper = styled.section`
  flex: 1;
  margin-left: 3.22rem;

  ${breakpoint('lg', 'max')`
    margin: 0;
  `};
`;

const OverviewHeading = styled(Heading)`
  color: ${({ theme }) => theme.primary};
`;

interface Props {
  tagName: string;
  pages: Mdx[];
}

const TagOverview: FunctionComponent<Props> = ({ tagName, pages }) => (
  <TagWrapper>
    <OverviewHeading as="h2">Tag: {tagName}</OverviewHeading>
    {pages.map((page) => (
      <PageItem key={page.slug} page={page} showReadMore={true} />
    ))}
  </TagWrapper>
);

export default TagOverview;
