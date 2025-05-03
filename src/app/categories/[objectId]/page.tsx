import { posts } from "@/app/data/categories-data/pots-categories";

import Link from "next/link";

type BlogPageProps = {
  params: {
    objectId: string;
  };
};

export default function BlogPage({ params }: BlogPageProps) {
  const post = posts.find((p) => p.id === params.objectId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
        <p className="text-center text-red-500 text-lg">
          Artikel tidak ditemukan
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-12 px-4 md:px-16">
      <article className="max-w-4xl mx-auto bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-md text-gray-100">
        {/* Tombol Kembali */}
        <div className="mb-6">
          <Link href="/categories">
            <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg transition duration-200">
              ← Kembali ke categories
            </button>
          </Link>
        </div>

        {/* Judul dan Metadata */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-violet-400 mb-2">
            {post.title}
          </h1>
          <p className="text-sm italic text-gray-400 mt-1">
            Kategori: {post.categoryId}
          </p>
        </header>

        {/* Konten */}
        <div className="text-lg leading-relaxed text-justify space-y-4">
          <p>{post.excerpt}</p>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Farhan Zulkarnaen Harahap
        </footer>
      </article>
    </main>
  );
}
