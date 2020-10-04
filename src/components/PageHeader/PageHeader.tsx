import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Tags from './Tags';

interface Props {
  title: string;
  tags: string[];
  dateModified: string;
}

const PageHeaderContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 0;
`;

const PageMetaDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PageMetaData = styled(Text)`
  display: block;
  color: ${({ theme }) => theme.textMuted};
  margin-right: 1rem;
`;

const PageHeader: FunctionComponent<Props> = ({ title, tags, dateModified }) => (
  <PageHeaderContainer>
    <PageHeading as="h1">{title}</PageHeading>
    <PageMetaDataContainer>
      <PageMetaData small={true}>Last updated: {dateModified}</PageMetaData>
      <Tags tags={tags} />
    </PageMetaDataContainer>
  </PageHeaderContainer>
);

export default PageHeader;
