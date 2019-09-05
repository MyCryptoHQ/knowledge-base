import { Category } from './category';

export interface Page {
  /**
   * The title of the page.
   */
  title: string;

  /**
   * A short description for the page.
   */
  description: string;

  /**
   * An excerpt of the page content.
   */
  excerpt: string;

  /**
   * The priority in which to sort this page. Higher = first
   */
  priority: number;

  /**
   * The date this page was first published (in ISO 8601).
   */
  datePublished: string;

  /**
   * The date this page was last modified (in ISO 8601).
   */
  dateModified: string;

  /**
   * The page slug, e.g. `/page`.
   */
  slug: string;

  /**
   * The category of this page.
   */
  parent: Category;

  childMdx: {
    excerpt: string;
    body: any;
  };
}
