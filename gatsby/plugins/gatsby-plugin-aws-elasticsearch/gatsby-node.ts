import { BuildArgs } from 'gatsby';
import { checkDocument, checkNode, listDocuments, Options } from './src';

export const createPagesStatefully = async ({ graphql, reporter }: BuildArgs, options: Options): Promise<void> => {
  if (!options) {
    return reporter.panic('Missing options');
  }

  if (!options.enabled) {
    return reporter.info('Skipping synchronisation with Elasticsearch');
  }

  // TODO: Better option validation
  if (!options.query || !options.selector || !options.toDocument || !options.index || !options.endpoint) {
    return reporter.panic('Missing options');
  }

  if (!options.accessKeyId || !options.secretAccessKey) {
    return reporter.panic('Missing authentication credentials');
  }

  const { errors, data } = await graphql(options.query as string);
  if (errors) {
    return reporter.panic('Failed to run query');
  }

  const nodes = options.selector(data).map(node => options.toDocument(node));
  const documents = await listDocuments(options);

  try {
    await Promise.all(nodes.map(node => checkNode(node, documents, options)));
    await Promise.all(documents.map(document => checkDocument(document, nodes, options)));
  } catch (error) {
    return reporter.panic('Failed to synchronise with Elasticsearch:', error);
  }
};
