// app/blog/[objectId]/page.tsx
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const { objectId } = await params;
  const res = await fetch(
    `https://earneststage-us.backendless.app/api/data/Articles/${objectId}?loadRelations=category`
  );
  const data: {
    objectId: string;
    title: string;
    content: string;
    created: number;
    image: string;
    category: { name: string };
  } = await res.json();
  console.log(data);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen p-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        <div className="w-full h-64 relative mb-6">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-400 mb-4">
          {new Date(data.created).toLocaleDateString()} — {data.category.name}
        </p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
}
