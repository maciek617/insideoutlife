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

export interface ArticleLikes {
  id: string;
  article_id: string;
  user_id: string;
  created_at: string;
}
