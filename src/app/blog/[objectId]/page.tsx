// app/blog/[objectId]/page.tsx
import { posts } from "@/app/data/blog/posts";
import { Post } from "@/app/data/blog/type";
import Link from "next/link";
import Image from "next/image";

type Params = {
  params: {
    objectId: string;
  };
};

export default function BlogDetail({ params }: Params) {
  const post: Post | undefined = posts.find(
    (p) => p.objectId === params.objectId
  );

  if (!post) return <div className="p-6">Artikel tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-300 mb-2">
          {post.created} | {post.category}
        </p>

        <div className="relative w-full h-72 mb-6 rounded overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded"
          />
        </div>

        <p className="text-lg leading-relaxed">{post.content}</p>

        <Link
          href="/blog"
          className="inline-block mt-6 text-blue-400 hover:underline"
        >
          ← Back to blog
        </Link>
      </div>
    </div>
  );
}
