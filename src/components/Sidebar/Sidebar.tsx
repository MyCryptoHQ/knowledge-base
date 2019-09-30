import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import { RelatedArticle, TableOfContents as TableOfContentsData } from '../../models/page';
import TableOfContents from './TableOfContents';
import RelatedArticles from './RelatedArticles';

const SidebarWrapper = styled.div`
  position: relative;
  width: 250px;
`;

const StyledSidebar = styled.aside`
  width: 250px;
  position: sticky;
  top: 25px;
`;

interface Props {
  tableOfContents: TableOfContentsData;
  relatedArticles: RelatedArticle[];
}

const Sidebar: FunctionComponent<Props> = ({ tableOfContents, relatedArticles }) => (
  <SidebarWrapper>
    <StyledSidebar>
      <section>
        <Heading as="h2">Navigation</Heading>
        <TableOfContents tableOfContents={tableOfContents} />
      </section>
      {relatedArticles.length > 0 && (
        <section>
          <Heading as="h2">Related Articles</Heading>
          <RelatedArticles relatedArticles={relatedArticles} />
        </section>
      )}
    </StyledSidebar>
  </SidebarWrapper>
);

export default Sidebar;
