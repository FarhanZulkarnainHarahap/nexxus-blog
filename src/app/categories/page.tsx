import Link from "next/link";
import { categories } from "@/app/data/categories-data/categories-data";
import { posts } from "@/app/data/categories-data/pots-categories";

export default function CategoryPage() {
  return (
    <main className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen pt-34">
      <header>
        <h1 className="text-4xl font-bold mb-8 text-gray-100">
          All Categories
        </h1>
      </header>

      <section className="space-y-10">
        {categories.map((cat) => (
          <article
            key={cat.id}
            className="bg-gradient-to-br from-gray-700 to-gray-800 shadow-md p-6 rounded-xl grid gap-2"
            aria-labelledby={`category-${cat.id}`}
          >
            <header className="border-b-2 border-b-gray-600">
              {/* Wrap h2 in Link for better accessibility */}
              <Link href={`/blog?category=${cat.id}`}>
                <h2
                  id={`category-${cat.id}`}
                  className={`text-2xl font-semibold mb-2 ${
                    cat.id === "tech" || cat.id === "art"
                      ? "text-gray-900"
                      : "text-violet-900"
                  } hover:text-violet-500 hover:underline cursor-pointer`}
                >
                  {cat.name}
                </h2>
              </Link>
              <p className="text-gray-400 mb-4">{cat.description}</p>
            </header>
            <div className="space-y-4 bg-gray-600 h-fit p-5 rounded-3xl">
              {posts
                .filter((post) => post.categoryId === cat.id)
                .map((post) => (
                  <div key={post.id} aria-labelledby={`post-${post.id}`}>
                    <Link
                      href={`/categories/${post.id}`}
                      className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-md transition"
                    >
                      <h3
                        id={`post-${post.id}`}
                        className="text-lg font-medium text-gray-100 hover:text-violet-500"
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 hover:text-gray-300">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
