import { sendRequest } from './api';
import { DefaultDocument, DocumentHit, DocumentID, Options } from './types';

export interface ListRequest {
  from: number;
  size: number;
  query: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    match_all: {};
  };
}

export interface ListResponse<Document extends DocumentID = DefaultDocument> {
  timed_out: boolean;
  hits: {
    total: {
      value: number;
    };
    max_score: number;
    hits: Array<DocumentHit<Document>>;
  };
}

/**
 * List all documents.
 *
 * @template Document
 * @param {Options} options
 * @return {Promise<void>}
 */
export const listDocuments = async <Document extends DocumentID = DefaultDocument>(
  options: Options
): Promise<Array<DocumentHit<Document>>> => {
  const [error, response] = await sendRequest<ListRequest, ListResponse<Document>>(
    'POST',
    '_search',
    // TODO: Pagination
    {
      from: 0,
      size: 10000,
      query: {
        match_all: {}
      }
    },
    options
  );

  if (error || !response) {
    throw new Error('Failed to list all documents');
  }

  return response.hits.hits;
};

export type CreateRequest<Document = DefaultDocument> = Document;

export interface CreateResponse {
  result: string;
}

/**
 * Create a document by ID.
 *
 * @template Document
 * @param {string} id
 * @param {Document} document
 * @param {Options} options
 * @return {Promise<void>}
 */
export const createDocument = async <Document = DefaultDocument>(
  id: string,
  document: Document,
  options: Options
): Promise<void> => {
  const [error, response] = await sendRequest<CreateRequest<Document>, CreateResponse>(
    'POST',
    `_doc/${id}`,
    document,
    options
  );

  if (error || !response) {
    throw new Error('Failed to create document');
  }
};

export type UpdateRequest<Document = DefaultDocument> = Document;

export interface UpdateResponse {
  result: string;
}

/**
 * Update a document by ID. Note that this will overwrite the full document, it does not support partial updates.
 *
 * @template Document
 * @param {string} id
 * @param {Document} document
 * @param {Options} options
 * @return {Promise<void>}
 */
export const updateDocument = async <Document = DefaultDocument>(
  id: string,
  document: Document,
  options: Options
): Promise<void> => {
  const [error, response] = await sendRequest<UpdateRequest<Document>, UpdateResponse>(
    'PUT',
    `_doc/${id}`,
    document,
    options
  );

  if (error || !response) {
    throw new Error('Failed to update document');
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteRequest {}

export interface DeleteResponse {
  result: string;
}

/**
 * Delete a document by ID.
 *
 * @param {string} id
 * @param {Options} options
 * @return {Promise<void>}
 */
export const deleteDocument = async (id: string, options: Options): Promise<void> => {
  const [error, response] = await sendRequest<DeleteRequest, DeleteResponse>('DELETE', `_doc/${id}`, {}, options);

  if (error || !response) {
    throw new Error('Failed to delete document');
  }
};
