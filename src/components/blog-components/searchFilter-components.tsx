"use client";

import { ChangeEvent } from "react";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilter({
  search,
  onSearchChange,
}: SearchFilterProps) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search articles..."
        className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
      />
    </div>
  );
}
