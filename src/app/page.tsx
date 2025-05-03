import HeroSection from "@/components/home-components/hero-section";
import FeaturedPosts from "@/components/home-components/featured-post";
import PopularCategories from "@/components/home-components/popular-categories";
import CallToAction from "@/components/home-components/call-to-action";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DevBlog - Developer Resources & Tutorials</title>
        <meta
          name="description"
          content="DevBlog is a platform for developers to share knowledge, tutorials, and inspiration. Discover featured posts, popular categories, and expert insights."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="developer blog, tutorials, programming, web dev"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevBlog Team" />
      </Head>
      <main className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen">
        <HeroSection />
        <FeaturedPosts />
        <PopularCategories />
        <CallToAction />
      </main>
    </>
  );
}
