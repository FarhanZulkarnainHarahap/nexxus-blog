"use client";

import Link from "next/link";
import Image from "next/image";

interface Article {
  objectId: string;
  title: string;
  preview: string;
  created: number;
  image: string;
  category: { name: string };
}

interface BlogListProps {
  articles: Article[];
}

export default function BlogList({ articles }: BlogListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {articles.map((article) => (
        <Link href={`/blog/${article.objectId}`} key={article.objectId}>
          <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div>
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-gray-400">
                {article.category.name}
              </span>
              <h2 className="text-xl font-semibold text-white mt-1">
                {article.title}
              </h2>
              <p className="text-gray-300 mt-2">{article.preview}</p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(article.created).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
