import { graphql, useStaticQuery } from 'gatsby';

interface QueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      baseUrl: string;
      recaptchaSitekey: string;
    };
  };
}

/**
 * Get site metadata from the Gatsby config.
 *
 * @return {QueryData['site']['siteMetadata']} The site metadata.
 */
export const useSiteMetadata = (): QueryData['site']['siteMetadata'] => {
  const { site } = useStaticQuery<QueryData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            baseUrl
            recaptchaSitekey
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
