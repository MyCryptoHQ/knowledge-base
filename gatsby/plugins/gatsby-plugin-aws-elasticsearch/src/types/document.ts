export interface DocumentID {
  id: string;
}

export type DefaultDocument = DocumentID & Record<string, unknown>;

export interface DocumentHit<Document extends DocumentID = DefaultDocument> {
  _id: string;
  _score: number;
  _source: Document;
}
