// app/categories/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  objectId: string;
  name: string;
  description?: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://earneststage-us.backendless.app/api/data/categories"
        );
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Gagal fetch kategori:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (objectId: string) => {
    router.push(`/categories/${objectId}`);
  };

  return (
    <div className="p-8 pt-32 bg-gradient-to-br from-gray-800 to-gray-900 text-violet-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">List of Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.objectId}
            onClick={() => handleClick(cat.objectId)}
            className="cursor-pointer p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-600">
              {cat.description || "No description"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
