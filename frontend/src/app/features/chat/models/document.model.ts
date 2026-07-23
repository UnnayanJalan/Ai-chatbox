export interface KnowledgeDocument {
  id: string;
  filename: string;
  size: number;
  uploadedAt: Date;
  status:
    | 'Uploading'
    | 'Processing'
    | 'Ready'
    | 'Failed';
}