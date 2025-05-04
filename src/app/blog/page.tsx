import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: "1",
    title: "Techno",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?`,
    category: "Semi-touring",
    date: "December 29, 2024",
    author: "John Doe",
    imageUrl: "/Farhan.jpg",
  },
  {
    id: "2",
    title: "Samsung",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?
    `,
    category: "Touring",
    date: "April 2, 2025",
    author: "Terry sihombing",
    imageUrl: "/Farhan.jpg",
  },
  {
    id: "3",
    title: "Isuzu Panther GT",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?`,
    category: "Touring",
    date: "June 10, 2012",
    author: "Jane Smith",
    imageUrl: "/Farhan.jpg",
  },
];

type tParams = Promise<{ id: string }>;

export default function BlogPost({ params }: { params: tParams }) {
  const post = blogPosts.find(async (post) => post.id === (await params).id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-32">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-6"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to all posts
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-56 sm:h-72 md:h-96 w-full rounded-m">
          <Image
            src={post.imageUrl || "/asston.jpeg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {post.title}
          </h1>

          <div className="flex items-center mb-6 sm:mb-8">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden mr-3">
              <Image
                src="/Farhan.jpg"
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-gray-700">{post.author}</span>
          </div>

          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
