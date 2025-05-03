export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center w-full">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 p-8 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to DevBlog
        </h1>
        <p className="text-lg md:text-xl">
          A space where developers share ideas, tutorials, and inspiration.
        </p>
      </div>
    </section>
  );
}
