import { resolve } from 'path';
import { GatsbyConfig } from 'gatsby';
import { removeMarkdown } from './helpers/markdown';
import capitalize from './plugins/capitalize';

const ENABLE_BUNDLE_ANALYZER = process.env.ANALYZE_BUNDLE ?? false;

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'MyCrypto Knowledge Base',
    description:
      'Answers & help for MyCrypto.com & the Ethereum blockchain. If your answer is not here, contact MyCrypto support instantly.',
    siteUrl: 'https://support.mycrypto.com',
    baseUrl: 'https://support.mycrypto.com',
    recaptchaSitekey: '6LcOl00UAAAAACVjGdVFkw918ohOhPIL0PHDtdGM'
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-git-clone',
      options: {
        repository: 'https://github.com/MyCryptoHQ/knowledge-base-content',
        path: resolve(__dirname, '../content')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '../content'),
        name: 'content',
        ignore: ['**/README.md', '**/.github/**', '**/redirects.yml']
      }
    },
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
        remarkPlugins: [require('remark-kbd'), capitalize],
        rehypePlugins: [require('rehype-slug')]
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Yaml'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '../src/assets/images'),
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: resolve(__dirname, '../src/assets/images/logo.svg'),
        appName: 'MyCrypto Knowledge Base',
        background: '#1d334f'
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.mycryptoapi.com',
        siteUrl: 'https://support.mycrypto.com/',
        disableCookies: true,
        localScript: '/vendor/piwik.js'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://support.mycrypto.com'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'support.mycrypto.com',
        protocol: 'https',
        hostname: 'support.mycrypto.com',
        generateRedirectObjectsForPermanentRedirects: true
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: !ENABLE_BUNDLE_ANALYZER,
        analyzerPort: 8001
      }
    },
    {
      resolve: 'gatsby-plugin-aws-elasticsearch',
      options: {
        enabled: !!process.env.ELASTIC_AWS_SYNC,
        query: `
          query {
            allMdx {
              nodes {
                slug
                rawBody
                excerpt (pruneLength: 500)
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
        `,

        selector: (data: { allMdx: { nodes: unknown[] } }): unknown[] => data.allMdx.nodes,
        toDocument: (node: Record<string, unknown>): Record<string, unknown> => ({
          id: (node.slug as string).replace(/\//g, '-'),
          slug: node.slug,
          title: (node.frontmatter as Record<string, unknown>).title,
          tags: (node.frontmatter as Record<string, unknown>).tags,
          content: removeMarkdown(node.rawBody as string),
          excerpt: node.excerpt
        }),

        mapping: {
          slug: {
            type: 'keyword'
          },
          title: {
            type: 'text',
            boost: 2
          },
          tags: {
            type: 'text'
          },
          content: {
            type: 'text'
          },
          excerpt: {
            type: 'text',
            index: false
          }
        },

        endpoint: process.env.ELASTIC_AWS_ENDPOINT,
        index: 'articles',

        accessKeyId: process.env.ELASTIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.ELASTIC_AWS_SECRET_ACCESS_KEY
      }
    }
  ]
};

export default config;
