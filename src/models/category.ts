import { Page } from './page';
import { Breadcrumb } from './breadcrumb';

export interface Category {
  /**
   * The title of the category.
   */
  title: string;

  /**
   * A short description for the category.
   */
  description: string;

  /**
   * The category slug, e.g. `/category`.
   */
  slug: string;

  /**
   * The slug of the parent category (if exists).
   */
  parentSlug?: string;

  childIconData: {
    /**
     * The public path of the icon for the category.
     */
    icon: string;
  };

  /**
   * The redirects for this category, e.g. `/category/from` will redirect to `/category/to`.
   */
  redirects?: {
    from: string;
    to: string;
  }[];

  /**
   * Sub-categories for this category.
   */
  childrenCategory: Category[];

  /**
   * The pages in this category (without the parsed HTML!).
   */
  childrenPage: Page[];

  /**
   * The breadcrumbs to display.
   */
  breadcrumbs: Breadcrumb[];
}
