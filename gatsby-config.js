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
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-catch-links',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
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
          'gatsby-remark-static-images'
        ]
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
      resolve: 'gatsby-plugin-lunr-search',
      options: {
        ref: 'slug',
        fields: ['title', 'description'],
        nodes: {
          Page: {
            slug: node => node.slug,
            title: node => node.title,
            description: node => node.description
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.mycryptoapi.com',
        siteUrl: 'https://support.mycrypto.com/',
        disableCookies: true
      }
    }
  ]
};
