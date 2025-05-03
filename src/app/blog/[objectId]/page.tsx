import { posts } from "@/app/data/blog-data/post";
import Image from "next/image";
import Link from "next/link";
import { Props } from "@/app/data/blog-data/types/data-post";

export default function BlogPage({ params }: Props) {
  const post = posts.find((p) => p.objectId === params.objectId);

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
      <article className="max-w-6xl mx-auto bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-md text-gray-100">
        {/* Tombol Kembali */}
        <div className="mb-6">
          <Link href="/blog">
            <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg transition duration-200">
              ← Kembali ke Blog
            </button>
          </Link>
        </div>

        {/* Judul dan Metadata */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-violet-400 mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-gray-300">
            Ditulis pada{" "}
            <time dateTime={post.created}>
              {new Date(post.created).toLocaleDateString("id-ID")}
            </time>
          </p>
          <p className="text-sm italic text-gray-400 mt-1">
            Kategori: {post.namecategory}
          </p>
        </header>

        {/* Layout 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar */}
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Konten */}
          <div className="text-lg leading-relaxed text-justify space-y-4">
            <p>{post.preview}</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Farhan Zulkarnaen Harahap
        </footer>
      </article>
    </main>
  );
}
