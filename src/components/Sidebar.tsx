import { t, Trans } from '@lingui/macro';
import { Body, Box, Button, Copyable, Flex, Icon, SubHeading, Tooltip } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { useSiteMetadata } from '../hooks';
import { Mdx } from '../types';
import { getSocialUrl } from '../utils';
import Card from './Card';
import { Divider } from './Divider';
import { Link } from './Link';

export interface SidebarProps {
  page: Mdx;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ page }) => {
  const { siteUrl } = useSiteMetadata();

  return (
    <Box as="aside" maxWidth={['100%', null, '362px']} marginBottom="4">
      <Card marginBottom="4">
        <SubHeading
          fontSize="12px"
          lineHeight="15px"
          color="text.accent"
          marginBottom="3"
          sx={{
            textTransform: 'uppercase'
          }}>
          <Trans>Share</Trans>
        </SubHeading>
        <Flex alignItems="center">
          <Link to={getSocialUrl(siteUrl, page.slug, page.frontmatter.title, 'twitter')} external={true} newTab={true}>
            <Icon type="twitter" width="24px" marginRight="4" />
          </Link>
          <Link to={getSocialUrl(siteUrl, page.slug, page.frontmatter.title, 'facebook')} external={true} newTab={true}>
            <Icon type="facebook" width="24px" marginRight="4" />
          </Link>
          <Link to={getSocialUrl(siteUrl, page.slug, page.frontmatter.title, 'linkedin')} external={true} newTab={true}>
            <Icon type="linkedin" width="24px" marginRight="4" />
          </Link>
          <Tooltip tooltip={t`Click to copy`} placement="top" offset={[0, 10]}>
            <Copyable
              text={getSocialUrl(siteUrl, page.slug, page.frontmatter.title, 'link')}
              icon="link"
              width="24px"
              fill="#55b6e2"
            />
          </Tooltip>
        </Flex>
      </Card>

      <Card marginBottom="4" backgroundColor="background.muted">
        <SubHeading fontSize="small" lineHeight="22px" marginBottom="12px">
          <Trans>MyCrypto is the number one way to manage all of your Ethereum Accounts</Trans>
        </SubHeading>
        <Body color="text.accent" marginBottom="3">
          <Trans>
            You can always email us for one-on-one help using{' '}
            <Link to="mailto:support@mycrypto.com" external={true}>
              support@mycrypto.com
            </Link>
          </Trans>
        </Body>
        <Link to="mailto:support@mycrypto.com" external={true}>
          <Button>
            <Trans>Send Us A Message</Trans>
          </Button>
        </Link>
      </Card>

      {page.relatedArticles && (
        <Card marginBottom="4">
          <SubHeading fontSize="12px" lineHeight="15px" color="text.accent" sx={{ textTransform: 'uppercase' }}>
            <Trans>Related Articles</Trans>
          </SubHeading>

          <Divider marginY="3" />

          {page.relatedArticles.map((relatedArticle) => (
            <Flex
              key={`related-article-${relatedArticle.slug}`}
              marginBottom="3"
              sx={{
                ':last-of-type': {
                  marginBottom: '0'
                }
              }}>
              <Icon type="external" width="12px" marginRight="2" flexShrink={0} />
              <Link to={`/${relatedArticle.slug}`}>{relatedArticle.frontmatter.title}</Link>
            </Flex>
          ))}
        </Card>
      )}
    </Box>
  );
};
