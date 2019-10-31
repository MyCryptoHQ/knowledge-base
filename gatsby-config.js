const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'MyCrypto Knowledge Base',
    description:
      'Answers & help for MyCrypto.com & the Ethereum blockchain. If your answer is not here, contact MyCrypto support instantly.',
    siteUrl: 'https://support.mycrypto.com',
    baseUrl: 'https://support.mycrypto.com',
    recaptchaSitekey: '6LcOl00UAAAAACVjGdVFkw918ohOhPIL0PHDtdGM'
  },
  // Used for deployment to gh-pages
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          {
            resolve: 'gatsby-remark-static-images'
          }
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750
            }
          }
        ],
        remarkPlugins: [require('remark-kbd')],
        rehypePlugins: [require('rehype-slug')]
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'CategoryData'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'src/content'),
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'src/assets/images'),
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: path.resolve(__dirname, 'src/assets/images/logo.svg'),
        title: 'MyCrypto Knowledge Base',
        background: '#1d334f',
        icons: {
          appleStartup: {
            offset: 20
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.proxy.mycryptoapi.com',
        siteUrl: 'https://support.mycrypto.com/',
        disableCookies: true
      }
    }
  ]
};
