import { Trans } from '@lingui/macro';
import { Body, Box, Button, Flex, Icon, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { useSiteMetadata } from '../hooks';
import { Mdx } from '../types';
import Card from './Card';
import { Divider } from './Divider';
import { Link } from './Link';

export interface SidebarProps {
  page: Mdx;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ page }) => {
  const { siteUrl } = useSiteMetadata();

  return (
    <Box maxWidth="362px">
      <Card marginBottom="4">
        <SubHeading
          fontSize="12px"
          lineHeight="15px"
          color="text.accent"
          marginBottom="3"
          sx={{
            textTransform: 'uppercase'
          }}
        >
          <Trans>Share</Trans>
        </SubHeading>
        <Flex alignItems="center">
          <Link
            to={`https://twitter.com/intent/tweet?text=${page.frontmatter.title}&url=${siteUrl}/${page.slug}`}
            external={true}
            newTab={true}
          >
            <Icon type="twitter" width="24px" marginRight="4" />
          </Link>
          <Link
            to={`https://www.facebook.com/sharer/sharer.php?t=${page.frontmatter.title}&u=${siteUrl}/${page.slug}`}
            external={true}
            newTab={true}
          >
            <Icon type="facebook" width="24px" marginRight="4" />
          </Link>
          <Link
            to={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}/${page.slug}`}
            external={true}
            newTab={true}
          >
            <Icon type="linkedin" width="24px" marginRight="4" />
          </Link>
          <Icon type="link" width="24px" marginRight="4" />
        </Flex>
      </Card>

      <Card marginBottom="4" backgroundColor="background.muted">
        <SubHeading fontSize="18px" lineHeight="22px" marginBottom="12px" color="text.primary">
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

      {page.relatedArticles?.length > 0 && (
        <Card marginBottom="4">
          <SubHeading fontSize="12px" lineHeight="15px" color="text.accent" sx={{ textTransform: 'uppercase' }}>
            <Trans>Related Articles</Trans>
          </SubHeading>

          <Divider marginY="3" />

          {page.relatedArticles.map((relatedArticle) => (
            <Flex
              key={`related-article-${relatedArticle.url}`}
              marginBottom="3"
              sx={{
                ':last-of-type': {
                  marginBottom: '0'
                }
              }}
            >
              <Icon type="external" width="12px" marginRight="2" flexShrink={0} />
              <Link to={relatedArticle.url} external={!relatedArticle.isRelative}>
                {relatedArticle.title}
              </Link>
            </Flex>
          ))}
        </Card>
      )}

      <Card>
        <Flex alignItems="center">
          <Icon type="support" width="24px" marginRight="2" />
          <SubHeading fontSize="12px" lineHeight="15px" color="text.accent" sx={{ textTransform: 'uppercase' }}>
            <Trans>Support MyCrypto</Trans>
          </SubHeading>
        </Flex>

        <Divider marginY="3" />

        <Body fontWeight="bold" fontSize="20px" lineHeight="30px" marginBottom="3">
          <Trans>
            Your support enables MyCrypto to continue developing non-custodial, user-friendly cryptocurrency management
            solutions as a public good.
          </Trans>
        </Body>
        <Body marginBottom="3">
          <Trans>
            We love helping the community stay safe and informed with these free educational articles, and are happy to
            walk you through solving problems even if they aren't directly related to MyCrypto.
          </Trans>
        </Body>
        <Body marginBottom="3" color="primary" fontWeight="bold">
          <Trans>Please consider making a donation or purchasing a MyCrypto Membership!</Trans>
        </Body>
        <Flex>
          <Link to="https://etherscan.io/address/0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" external={true}>
            <Button variant="inverted" marginRight="3" fontWeight="bold">
              <Trans>Donate Now</Trans>
            </Button>
          </Link>
          <Link to="https://app.mycrypto.com/membership" external={true}>
            <Button variant="inverted" fontWeight="bold">
              <Trans>Get Membership</Trans>
            </Button>
          </Link>
        </Flex>
      </Card>
    </Box>
  );
};
