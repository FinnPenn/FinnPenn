// src/components/ArticleList.tsx
import { useEffect, useState } from 'react';
import type { Article, StrapiResponse } from '@/types/strapi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // Adding ?populate=* ensures media fields like cover images are returned
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const json: StrapiResponse<Article[]> = await res.json();
        setArticles(json.data);
      } catch (err) {
        console.error('Failed to load articles:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => {
        // Image URLs in Strapi are relative by default, so prepend the backend host
        const imageUrl = article.cover?.url 
          ? `${STRAPI_URL}${article.cover.url}` 
          : undefined;

        return (
          <article key={article.id} className="border p-4 rounded-lg">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={article.cover?.alternativeText || article.title} 
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-xl font-bold mt-2">{article.title}</h2>
            <p className="mt-1 text-gray-600">{article.content}</p>
          </article>
        );
      })}
    </div>
  );
}