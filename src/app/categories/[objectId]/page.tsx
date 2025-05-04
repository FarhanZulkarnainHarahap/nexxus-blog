// app/categories/[objectId]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Article {
  objectId: string;
  title: string;
  preview: string;
  created: number;
  image?: string;
  category: { name: string };
}

interface Category {
  objectId: string;
  name: string;
  description?: string;
}

export default function CategoryDetailPage() {
  const { objectId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!objectId) return;

    const fetchData = async () => {
      try {
        const [catRes, articlesRes] = await Promise.all([
          fetch(
            `https://earneststage-us.backendless.app/api/data/categories/${objectId}`
          ),
          fetch(
            "https://earneststage-us.backendless.app/api/data/Articles?loadRelations=category"
          ),
        ]);

        const catData = await catRes.json();
        const allArticles = await articlesRes.json();

        const filteredArticles = allArticles.filter(
          (article: Article) => article.category?.name === catData.name
        );

        setCategory(catData);
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching category detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [objectId]);

  if (loading) return <div className="p-8">Loading...</div>;

  if (!category)
    return <div className="p-8 text-red-500">Kategori tidak ditemukan</div>;

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-violet-900 pt-32">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <p className="mb-8 text-gray-600">
        {category.description || "Tidak ada deskripsi."}
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Recent Posts in {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <div
            key={article.objectId}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
