import React, { FunctionComponent } from 'react';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Link from '../Link';
import styled from 'styled-components';

interface Props {
  page: {
    title: string;
    slug: string;
    childMdx: {
      excerpt: string;
    };
  };
}

const PageHeading = styled(Heading)`
  margin-bottom: 0;
`;

const PageItem: FunctionComponent<Props> = ({ page }) => (
  <>
    <Link to={`/${page.slug}`}>
      <PageHeading as="h3">{page.title}</PageHeading>
      <Text muted={true} noMargin={true}>
        {page.childMdx.excerpt}
      </Text>
    </Link>
  </>
);

export default PageItem;
