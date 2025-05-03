export default function About() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-12 px-4 md:px-16 pt-34">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-md text-gray-100">
          <h1 className="text-4xl font-bold text-violet-400 mb-6 text-center">
            About Me
          </h1>

          <p className="text-lg mb-4">
            Halo, nama saya{" "}
            <span className="font-semibold text-violet-400">
              Farhan Zulkarnaen Harahap
            </span>
            . Saya adalah seorang
            <span className="font-semibold text-violet-400">
              {" "}
              Front-End Developer{" "}
            </span>
            yang memiliki passion dalam membangun antarmuka pengguna yang
            interaktif, responsif, dan estetis menggunakan teknologi modern
            seperti
            <span className="font-semibold text-violet-400"> React </span>,
            <span className="font-semibold text-violet-400"> Next.js </span>,
            dan
            <span className="font-semibold text-violet-400">
              {" "}
              Tailwind CSS{" "}
            </span>
            .
          </p>

          <p className="text-lg mb-4">
            Saya memiliki pengalaman dalam membangun berbagai website mulai dari
            landing page, blog, dashboard admin, hingga sistem interaktif yang
            kompleks. Saya juga tertarik dengan pengembangan
            <span className="font-semibold text-violet-400">
              {" "}
              fullstack{" "}
            </span>{" "}
            dan
            <span className="font-semibold text-violet-400"> DevOps </span>.
          </p>

          <p className="text-lg mb-4">
            Selain coding, saya juga suka mendesain, ngulik teknologi baru, dan
            kadang ngopi sambil baca dokumentasi 🤓☕.
          </p>

          <p className="text-lg">
            Saya selalu berusaha untuk belajar dan berkembang menjadi developer
            yang lebih baik setiap harinya. Jika kamu ingin ngobrol atau
            berkolaborasi, jangan ragu untuk
            <a
              href="/contact"
              className="text-violet-400 underline hover:text-violet-600"
            >
              hubungi saya
            </a>
            !
          </p>
        </div>
      </main>
    </>
  );
}
