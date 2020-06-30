import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import githubIcon from '../../assets/images/icons/social/github-black.svg';
import Link from '../Link';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Text from '../ui/Text';

interface Props {
  slug: string;
}

const PageFooterSection = styled(Section)`
  padding: 4.6rem 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: normal;
  }
`;

const FooterIcon = styled.img`
  width: 2.6rem;
  vertical-align: middle;
  margin-right: 0.6rem;
`;

const PageFooter: FunctionComponent<Props> = ({ slug }) => (
  <Container>
    <PageFooterSection>
      <section>
        <Text>
          Do you still need help? Feel free to <Link to="/contact-us">reach out to us here!</Link>
        </Text>
      </section>
      <section>
        <Text small={true}>
          <Link to={`https://github.com/MyCryptoHQ/knowledge-base-content/blob/master/${slug}.md`} external={true}>
            <FooterIcon src={githubIcon} alt="GitHub" /> Edit this article on GitHub
          </Link>
        </Text>
      </section>
    </PageFooterSection>
  </Container>
);

export default PageFooter;
