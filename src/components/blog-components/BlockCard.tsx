// components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/app/data/blog/type";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3 relative h-40">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="w-full md:w-2/3">
        <Link
          href={`/blog/${post.objectId}`}
          className="text-xl font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <p className="text-gray-600 text-sm mt-1">
          {post.created} | {post.category}
        </p>
        <p className="mt-2 text-gray-800">{post.excerpt}</p>
      </div>
    </div>
  );
}
