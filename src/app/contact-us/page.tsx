export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-12 pt-34">
      <div className="max-w-7xl mx-auto text-gray-100">
        <h1 className="text-3xl font-bold text-center mb-10 text-violet-400">
          Get in Touch
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg">
              📞 <span className="text-gray-300">+6281958169283</span>
            </p>
            <p className="text-lg">
              📧{" "}
              <a
                href="mailto:farhanzulkarnaenhrp@gmail.com"
                className="text-violet-400 hover:underline"
              >
                farhanzulkarnaenhrp@gmail.com
              </a>
            </p>
            <p className="text-lg">🕐 MON–SAT, 9–5 | SUN, 10–4</p>
            <p className="text-lg">📍Jakarta Selatan, Karet Kuningan</p>
          </div>

          {/* Contact Form */}
          <form className="md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
