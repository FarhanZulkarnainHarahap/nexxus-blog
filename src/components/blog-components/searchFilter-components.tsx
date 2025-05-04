type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export default function SearchAndFilter({ search, setSearch }: Props) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search articles..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
