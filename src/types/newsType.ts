export interface INewsCard {
  id: string;
  featured?: boolean;
  title: string;
  imageUrl: string;
  url?: string;
  newsSite?: string;
  summary: string;
  publishedAt?: string;
  launches?: [];
  events?: [];
  filteredArticles?: INewsCard[];
  keywords?: string;
}
