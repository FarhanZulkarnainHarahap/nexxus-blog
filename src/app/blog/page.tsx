"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "@/components/blog-components/searchFilter-components";
import SidebarCategory from "@/components/blog-components/CategorySidebar"; // Ganti dari CategorySidebar
import BlogList from "@/components/blog-components/BlogList";

interface Article {
  objectId: string;
  title: string;
  preview: string;
  created: number;
  image: string;
  category: { name: string };
}

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  const categoryFilter = searchParams?.get("category") || "";
  const searchFilter = search.toLowerCase();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://earneststage-us.backendless.app/api/data/Articles?loadRelations=category"
        );
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Gagal fetch artikel:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = categoryFilter
      ? article.category.name === categoryFilter
      : true;
    const matchesSearch = article.title.toLowerCase().includes(searchFilter);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 pt-32">
      {/* Sidebar menggunakan komponen baru */}
      <div className="w-full md:w-1/4"></div>

      {/* Main content */}
      <main className="flex-1">
        <SearchFilter search={search} onSearchChange={setSearch} />
        <BlogList articles={filteredArticles} />
      </main>
    </div>
  );
}
