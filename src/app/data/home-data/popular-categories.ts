export interface BlogPost {
  title: string;
  excerpt: string;
}

export const categories = ["Technology", "Productivity", "Design", "Life"];
export const categoryPosts: Record<string, BlogPost[]> = {
  Technology: [
    { title: "Top 10 JavaScript Tips", excerpt: "Level up your JS skills..." },
    {
      title: "Why Rust is the future",
      excerpt: "Explore Rust's safety and speed.",
    },
  ],
  Productivity: [
    {
      title: "Time-blocking Techniques",
      excerpt: "Maximize your day efficiently...",
    },
  ],
  Design: [
    {
      title: "Minimalist UI Tricks",
      excerpt: "Simplify your design workflow...",
    },
  ],
  Life: [
    {
      title: "Remote Work Essentials",
      excerpt: "Working from anywhere is possible.",
    },
  ],
};
