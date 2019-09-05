import { Page } from './page';

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
   * The name of the icon for the category.
   */
  icon: string;

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
   * The pages in this category.
   */
  childrenPage: Page[];

  /**
   * The parent category.
   */
  parent: {
    title: string;
    slug: string;
  };
}
