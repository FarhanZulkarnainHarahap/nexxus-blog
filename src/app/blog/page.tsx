"use client";

import { useState } from "react";
import { posts } from "@/app/data/blog/posts";
import BlogCard from "@/components/blog-components/BlockCard";
import CategorySidebar from "@/components/blog-components/CategorySidebar";
import SearchBar from "@/components/blog-components/searchFilter-components";
import { Post } from "@/app/data/blog/type";

export default function BlogPage() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const filteredPosts: Post[] = posts
    .filter((post) => category === "all" || post.category === category)
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-32">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <SearchBar search={search} setSearch={setSearch} />
          {filteredPosts.map((post) => (
            <BlogCard key={post.objectId} post={post} />
          ))}
        </div>
        <div>
          <CategorySidebar active={category} setActive={setCategory} />
        </div>
      </div>
    </div>
  );
}
