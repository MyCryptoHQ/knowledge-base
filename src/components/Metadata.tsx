import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/logo.png';
import { useSiteMetadata } from '../hooks';

export interface MetadataProps {
  title?: string;
  description?: string;
  keyWords?: string[];
  noIndex?: boolean;
}

export const Metadata: FunctionComponent<MetadataProps> = ({ title, description, keyWords, noIndex = false }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Helmet htmlAttributes={{ lang: 'en-US' }}>
      <title>{`${title ? `${title} | ` : ''}${siteMetadata.title}`}</title>
      <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
      <meta name="description" content={description ?? siteMetadata.description} />
      {keyWords && keyWords.length > 0 && <meta name="keywords" content={keyWords.join(', ')} />}

      <meta property="og:title" content={title ?? siteMetadata.title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description ?? siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${siteMetadata.baseUrl}${logo}`} />
      <meta property="og:image:alt" content="MyCrypto logo" />

      <meta name="twitter:title" content={title ?? siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MyCrypto" />
      <meta name="twitter:creator" content="@MyCrypto" />
      <meta name="twitter:image" content={`${siteMetadata.baseUrl}${logo}`} />
      <meta name="twitter:image:alt" content="MyCrypto" />

      <meta name="theme-color" content="#1d334f" />
      <meta name="mobile-web-app-capable" content="yes" />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};
