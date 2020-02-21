import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface Props {
  titleOnly?: boolean;
  showReadMore?: boolean;
  page: {
    title: string;
    slug: string;
    childMdx: {
      excerpt: string;
    };
  };
}

const PageItemWrapper = styled.div<{ showReadMore: boolean }>`
  margin-bottom: ${({ showReadMore }) => (showReadMore ? '3.5rem' : '0rem')};
`;

const PageHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`;

const ReadMore = styled(Text)`
  color: ${({ theme }) => theme.link};
  text-align: right;
`;

const PageItem: FunctionComponent<Props> = ({ page, titleOnly, showReadMore }) => (
  <Link to={`/${page.slug}`}>
    {titleOnly ? (
      page.title
    ) : (
      <PageItemWrapper showReadMore={showReadMore}>
        <PageHeading as="h3">{page.title}</PageHeading>
        <Text muted={true} noMargin={true}>
          {page.childMdx.excerpt}
        </Text>
        {showReadMore && <ReadMore>Read More</ReadMore>}
      </PageItemWrapper>
    )}
  </Link>
);

export default PageItem;
