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
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: Content[];
  author_id: string | null;
  updated_at: string;
  created_at: string;
  published: boolean;
  read_time: string;
  tags: string[];
  summary: string;
}

export interface ArticleLikes {
  id: string;
  article_id: string;
  user_id: string;
  created_at: string;
}
