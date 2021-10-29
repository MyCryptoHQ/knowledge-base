import { Node } from 'gatsby';
import { GatsbyIterable } from 'gatsby/dist/datastore/common/iterable';

declare module 'gatsby' {
  /**
   * https://www.gatsbyjs.com/docs/node-model/
   */
  export interface NodeModel {
    getNodeById<T extends Node = Node>(
      args: { id: string; type?: string },
      pageDependencies?: { path: string; connectionType: string }
    ): T;

    findAll<T extends Node = Node>(
      args: { type?: string; query?: { filter?: unknown } },
      pageDependencies?: { path: string; connectionType: string }
    ): Promise<{ entries: GatsbyIterable<T>; totalCount(): Promise<number> }>;

    findOne<T extends Node = Node>(
      args: { type?: string; query?: { filter?: unknown } },
      pageDependencies?: { path: string; connectionType: string }
    ): Promise<T | undefined>;
  }

  export interface ResolverContext {
    nodeModel: NodeModel;
  }

  export interface Resolvers {
    [key: string]: {
      [key: string]: {
        resolve<T extends Node = Node>(node: T, args: unknown, context: ResolverContext): unknown;
      };
    };
  }
}
