export interface Content {
  data: string;
  type: string;
  alt?: string;
  src?: string;
}
export interface Articles {
  id: string;
  title: string;
  slug: string;
  content: Content[];
}
