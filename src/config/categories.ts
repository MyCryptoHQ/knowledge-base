import { BadgeType } from '@mycrypto/ui';

// TODO: Move to category YAML files
export const CATEGORY_COLOURS: Record<string, BadgeType> = {
  troubleshooting: 'success',
  developers: 'info',
  'how-to': 'action',
  'staying-safe': 'warning',
  'general-knowledge': 'error'
};

/**
 * List of categories shown on the home page and in the sidebar. Each item should have the slug of
 * the category, and the image to be used on the home page.
 */
export const FEATURED_CATEGORIES = [
  {
    slug: 'troubleshooting'
  },
  {
    slug: 'how-to'
  },
  {
    slug: 'staying-safe'
  },
  {
    slug: 'general-knowledge'
  },
  {
    slug: 'developers'
  }
];
