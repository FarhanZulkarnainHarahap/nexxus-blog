"use client";

import { categoryPosts } from "@/app/data/home-data/popular-categories";
import { categories } from "@/app/data/home-data/categories";
import { useState } from "react";

export default function PopularCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="px-6 py-12 bg-gray-800 text-white">
      <div className="grid place-items-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">
          Popular Categories
        </h2>
      </div>

      <div className="grid place-items-center">
        <div className="grid grid-cols-[auto_auto_auto_auto] place-items-center w-fit gap-x-3 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveCategory(category === activeCategory ? null : category)
              }
              className={`${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-purple-300"
              } font-semibold px-4 py-2 rounded-full transition hover:bg-purple-500`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div className="mt-6 bg-gray-700 rounded-xl shadow-md p-6 space-y-4 max-h-64 overflow-y-auto">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            {activeCategory} Posts
          </h3>
          {categoryPosts[activeCategory]?.map((post, idx) => (
            <div key={idx} className="border-b border-gray-600 pb-4">
              <h4 className="font-bold text-white">{post.title}</h4>
              <p className="text-gray-300">{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
