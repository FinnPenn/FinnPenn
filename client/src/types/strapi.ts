// src/types/strapi.ts
export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  cover?: StrapiMedia;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}