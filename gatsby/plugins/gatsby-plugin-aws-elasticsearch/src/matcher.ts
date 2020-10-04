import { createDocument, deleteDocument, updateDocument } from './elasticsearch';
import { DocumentID, DefaultDocument, Options, DocumentHit } from './types';

export const checkNode = async <Document extends DocumentID = DefaultDocument>(
  node: Document,
  documents: Array<DocumentHit<Document>>,
  options: Options
): Promise<void> => {
  if (!node.id) {
    throw new Error('Node must have an `id` property');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = node;
  const document = documents.find(document => document._id === node.id);

  if (document) {
    return updateDocument(node.id, rest, options);
  }

  return createDocument(node.id, rest, options);
};

export const checkDocument = async <Document extends DocumentID = DefaultDocument>(
  document: DocumentHit<Document>,
  nodes: Document[],
  options: Options
): Promise<void> => {
  const node = nodes.find(node => node.id === document._id);
  if (!node) {
    return deleteDocument(document._id, options);
  }
};
