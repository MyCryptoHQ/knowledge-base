import { Node } from 'gatsby';

declare module 'gatsby' {
  /**
   * https://www.gatsbyjs.com/docs/node-model/
   */
  export interface NodeModel {
    getAllNodes<T extends Node = Node>(
      args: { type?: string },
      pageDependencies?: { path: string; connectionType: string }
    ): T[];
    getNodeById<T extends Node = Node>(
      args: { id: string; type?: string },
      pageDependencies?: { path: string; connectionType: string }
    ): T;
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
