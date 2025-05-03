"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { id: "tech", name: "Technology" },
  { id: "art", name: "Art" },
  { id: "science", name: "Science" },
];

const dataByCategory = {
  tech: [
    {
      title: "React Framework",
      objectId: "1",
      created: "2023-06-01",
      preview: "Learn how to build modern UIs with React.",
      image: "/Farhan.jpg",
      namecategory: "Technology",
    },
    {
      title: "Next.js Guide",
      objectId: "2",
      created: "2023-07-15",
      preview: "A complete guide to server-side rendering.",
      image: "/Farhan.jpg",
      namecategory: "Technology",
    },
    {
      title: "Optimizing Performance",
      objectId: "7",
      created: "2023-11-15",
      preview: "Improve your website speed and SEO.",
      image: "/Farhan.jpg",
      namecategory: "Technology",
    },
  ],
  art: [
    {
      title: "Digital Painting Basics",
      objectId: "3",
      created: "2023-05-20",
      preview: "Start creating beautiful digital art.",
      image: "/Farhan.jpg",
      namecategory: "Art",
    },
    {
      title: "3D Modeling for Beginners",
      objectId: "4",
      created: "2023-08-10",
      preview: "Step into the world of 3D design.",
      image: "/Farhan.jpg",
      namecategory: "Art",
    },
  ],
  science: [
    {
      title: "Physics Explained",
      objectId: "5",
      created: "2023-04-30",
      preview: "Understand the laws of the universe.",
      image: "/Farhan.jpg",
      namecategory: "Science",
    },
    {
      title: "Astronomy 101",
      objectId: "6",
      created: "2023-09-05",
      preview: "Explore the cosmos.",
      image: "/Farhan.jpg",
      namecategory: "Science",
    },
  ],
};

function isPopular(id: string) {
  return parseInt(id) % 2 === 1;
}

function sortByDateDesc(arr: (typeof dataByCategory)["tech"]) {
  return [...arr].sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
  );
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<string>("tech");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value);

  const filteredItems = dataByCategory[activeCategory]
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => {
      if (filter === "recent") return true;
      if (filter === "popular") return isPopular(item.objectId);
      return true;
    });

  const finalItems =
    filter === "recent" ? sortByDateDesc(filteredItems) : filteredItems;

  return (
    <main className="py-12 px-6 md:px-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen pt-24">
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-4">
          Explore Our Blog
        </h1>
        <p className="text-gray-300">
          Find articles by category, popularity, or recent posts.
        </p>
      </header>

      {/* Filters */}
      <section className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-500 rounded-md w-full md:w-1/3 bg-gray-900 text-white"
        />
        <select
          value={filter}
          onChange={handleFilter}
          className="px-4 py-2 border border-gray-500 rounded-md bg-gray-900 text-white"
        >
          <option value="all">All</option>
          <option value="recent">Recent</option>
          <option value="popular">Popular</option>
        </select>
      </section>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Content */}
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-semibold text-violet-300 mb-6">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {finalItems.map((item) => (
              <article
                key={item.objectId}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:ring-2 hover:ring-violet-400 transition-all"
              >
                <Link href={`/blog/${item.objectId}`}>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{item.created}</p>
                    <p className="text-sm text-gray-300 mb-3">{item.preview}</p>
                  </div>
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={`Thumbnail of ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-violet-400 mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer px-4 py-2 rounded-md transition-colors text-center ${
                  activeCategory === cat.id
                    ? "bg-violet-500 text-white"
                    : "hover:bg-violet-300 hover:text-black"
                }`}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
