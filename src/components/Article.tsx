import { Trans } from '@lingui/macro';
import { Body, Button, Flex, InlineBody, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { Mdx } from '../types';
import Card from './Card';
import { Label } from './Label';
import { Link } from './Link';

export interface ArticleCardProps {
  article: Mdx;
}

export const Article: FunctionComponent<ArticleCardProps> = ({ article }) => {
  return (
    <Card as="article">
      <Flex flexDirection="column" height="100%">
        <Flex alignItems="center" marginBottom="3">
          <Label category={article.category} />
          <InlineBody fontSize="12px" fontWeight="bold" marginLeft="3">
            <Trans>{article.timeToRead} Min Read</Trans>
          </InlineBody>
        </Flex>
        <SubHeading fontSize="medium" lineHeight="29px" marginBottom="12px">
          {article.frontmatter.title}
        </SubHeading>
        <Body marginBottom="3" sx={{ flexGrow: '1' }}>
          {article.excerpt}
        </Body>
        <Link to={`/${article.slug}`}>
          <Button>
            <Trans>Read Now</Trans>
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};

export const query = graphql`
  fragment Article on Mdx {
    slug
    excerpt(pruneLength: 200)
    timeToRead
    category {
      parentCategory {
        title
        badge
        slug
      }
    }
    frontmatter {
      title
    }
  }
`;
