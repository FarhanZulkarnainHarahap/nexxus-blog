export interface FeaturedPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const featuredPosts: FeaturedPost[] = [
  {
    title: "Mastering React in 2025",
    excerpt:
      "React remains one of the most powerful front-end libraries. Here’s how to stay ahead...",
    image: "/Farhan.jpg",
    slug: "/blog/mastering-react",
  },
  {
    title: "Next.js vs. Astro: Head-to-Head",
    excerpt: "We dive into the differences between two popular frameworks...",
    image: "/Farhan.jpg",
    slug: "/blog/next-vs-astro",
  },
];
