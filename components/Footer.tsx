export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">🔐</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Secret Ideas
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming ideas into reality through innovation and technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/Artkill24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300" title="GitHub">
                <span className="text-2xl">💻</span>
              </a>
              <a href="https://www.linkedin.com/in/saad-k-95a26430b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300" title="LinkedIn">
                <span className="text-2xl">💼</span>
              </a>
              <a href="https://twitter.com/artkill24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300" title="Twitter">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="mailto:kaicarsaad455@gmail.com" className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300" title="Email">
                <span className="text-2xl">✉️</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} My Secret Ideas. Built with Next.js and TypeScript.
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-sm">Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 text-xs font-mono">
            Every great idea starts as a secret 🔐
          </p>
        </div>
      </div>
    </footer>
  );
}
