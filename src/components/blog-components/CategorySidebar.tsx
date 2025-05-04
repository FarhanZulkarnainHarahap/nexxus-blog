type Props = {
  active: string;
  setActive: (value: string) => void;
};

const categories = ["all", "tech", "art", "science"];

export default function CategorySidebar({ active, setActive }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActive(cat)}
            className={`cursor-pointer capitalize mb-1 ${
              cat === active ? "font-bold text-blue-600" : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
