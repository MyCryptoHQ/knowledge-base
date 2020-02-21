import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface Props {
  title: string;
  dateModified: string;
}

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 0;
`;

const Separator = styled(Text)`
  margin: 0 1.5rem;
`;

const PageMetaData = styled(Text)`
  display: block;
  color: ${({ theme }) => theme.textMuted};
`;

const PageHeader: FunctionComponent<Props> = ({ title, dateModified }) => (
  <PageHeaderContainer>
    <PageHeading>{title}</PageHeading>
    <Separator>&middot;</Separator>
    <PageMetaData small={true}>Last updated: {dateModified}</PageMetaData>
  </PageHeaderContainer>
);

export default PageHeader;
