import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Link from '../Link';
import * as githubIcon from '../../assets/images/icons/social/github-black.svg';
import Text from '../ui/Text';

interface Props {
  slug: string;
}

const PageFooterSection = styled(Section)`
  padding: 0 2.7rem 2.7rem 2.7rem;
`;

const StyledPageFooter = styled(Container)`
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterIcon = styled.img`
  width: 36px;
  vertical-align: middle;
  margin-right: 6px;
`;

const PageFooter: FunctionComponent<Props> = ({ slug }) => (
  <PageFooterSection>
    <StyledPageFooter>
      <Text>
        <Link
          to={`https://github.com/MyCryptoHQ/knowledge-base-content/blob/master/${slug}.md`}
          external={true}
        >
          <FooterIcon src={githubIcon} alt="GitHub" /> Improve this article
        </Link>
      </Text>
    </StyledPageFooter>
  </PageFooterSection>
);

export default PageFooter;
