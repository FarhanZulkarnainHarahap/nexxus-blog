"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Category = {
  objectId: string;
  name: string;
};

export default function SidebarCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  // Fetch kategori
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://earneststage-us.backendless.app/api/data/categories"
        );
        const data: Category[] = await res.json();
        const validData = data.filter((cat) => cat?.objectId && cat?.name);
        setCategories(validData);
      } catch (error) {
        console.error("Gagal fetch kategori:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handler klik kategori
  const handleClick = (categoryId: string | null) => {
    router.push(categoryId ? `/?category=${categoryId}` : "/");
  };

  return (
    <aside className="p-4 bg-gray-800 text-white rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Kategori</h2>

      <div className="grid grid-cols-2 gap-2">
        {/* Tombol 'Semua' */}
        <button
          onClick={() => handleClick(null)}
          className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200
            ${
              !activeCategory
                ? "bg-blue-500 text-white font-bold shadow-md"
                : "bg-gray-700 hover:bg-gray-600"
            }
          `}
        >
          Semua
        </button>

        {/* Daftar kategori */}
        {categories.map((cat) => (
          <button
            key={cat.objectId}
            onClick={() => handleClick(cat.objectId)}
            className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200
              ${
                activeCategory === cat.objectId
                  ? "bg-blue-500 text-white font-bold shadow-md"
                  : "bg-gray-700 hover:bg-gray-600"
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
