import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { PageResult } from '../../types/page';
import Link from '../Link';
import Tags, { TagItem } from '../PageHeader/Tags';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface Props {
  titleOnly?: boolean;
  showReadMore?: boolean;
  page: PageResult;
}

const PageItemWrapper = styled.div<{ showReadMore: boolean }>`
  margin-bottom: ${({ showReadMore }) => (showReadMore ? '3.5rem' : '0rem')};

  ${Text} {
    word-wrap: break-word;
  }

  ${TagItem} {
    margin: 1rem 0 1rem -0.3rem;
  }
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
      page.frontmatter.title
    ) : (
      <PageItemWrapper showReadMore={showReadMore ?? false}>
        <PageHeading as="h3">{page.frontmatter.title}</PageHeading>
        {page.frontmatter.tags && <Tags tags={page.frontmatter.tags} />}
        <Text muted={true} noMargin={true}>
          {page.excerpt}
        </Text>
        {showReadMore && <ReadMore>Read More</ReadMore>}
      </PageItemWrapper>
    )}
  </Link>
);

export default PageItem;
