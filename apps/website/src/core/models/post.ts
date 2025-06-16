import type { PortableTextBlock } from 'sanity';

export interface PostModel {
  title: string;
  slug: string;
  description: string;
  body: PortableTextBlock;
  mainImageUrl: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
  estimatedReadingTime: number;
  _updatedAt: string;
  _createdAt: string;
}
