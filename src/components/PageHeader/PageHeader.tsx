import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface Props {
  title: string;
  dateModified: string;
}

const PageHeaderContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 0;
`;

const PageMetaData = styled(Text)`
  display: block;
  color: ${({ theme }) => theme.textMuted};
`;

const PageHeader: FunctionComponent<Props> = ({ title, dateModified }) => (
  <PageHeaderContainer>
    <PageHeading>{title}</PageHeading>
    <PageMetaData small={true}>Last updated: {formatDate(dateModified)}</PageMetaData>
  </PageHeaderContainer>
);

export default PageHeader;
