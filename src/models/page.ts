import { Category } from './category';
import { Breadcrumb } from './breadcrumb';

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
   * The original page slug, e.g. `/page`. Most of the time this is the same as `slug`, except when the page is linked in a different category.
   */
  originalSlug: string;

  /**
   * The slug of the category.
   */
  parentSlug: string;

  /**
   * The category of this page.
   */
  parent: Category;

  breadcrumbs: Breadcrumb[];
}
