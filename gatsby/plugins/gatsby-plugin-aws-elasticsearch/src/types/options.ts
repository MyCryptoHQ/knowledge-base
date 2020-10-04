import { AWSCredentials } from 'aws4';
import { DefaultDocument, DocumentID } from './document';

export type Options<
  Data = unknown,
  Node = Record<string, unknown>,
  Document extends DocumentID = DefaultDocument
> = AWSCredentials & {
  enabled: boolean;

  query: string;
  selector(data: Data): Node[];
  toDocument(node: Node): Document;

  endpoint: string;
  index: string;
};
