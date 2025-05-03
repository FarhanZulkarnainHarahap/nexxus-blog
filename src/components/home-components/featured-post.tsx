import Image from "next/image";
import Link from "next/link";
import { featuredPosts } from "@/app/data/home-data/featured-post";

export default function FeaturedPosts() {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white">
      <div className="grid place-items-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">
          Featured Posts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.slug}
            className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
