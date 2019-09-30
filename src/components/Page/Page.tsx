import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Page as PageData } from '../../models/page';
import { formatDate } from '../../utils/date';
import shortcodes from '../markdown';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Divider from '../Divider';
import Sidebar from '../Sidebar';

interface Props {
  page: PageData;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Article = styled.article`
  flex: 1;
  min-width: 0;
  word-wrap: break-word;
`;

const Page: FunctionComponent<Props> = ({ page }) => {
  const [dateModified, setDateModified] = useState<string>();

  useEffect(
    () => {
      setDateModified(formatDate(page.dateModified));
    },
    [page.dateModified]
  );

  return (
    <Container>
      <Article>
        <Heading>{page.title}</Heading>
        <Text muted={true}>Last updated: {dateModified}</Text>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{page.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </Article>
      <Divider />
      <Sidebar
        tableOfContents={page.childMdx.tableOfContents}
        relatedArticles={page.childrenRelatedArticle}
      />
    </Container>
  );
};

export default Page;
