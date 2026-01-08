'use client';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
            <span className="text-purple-400 text-sm font-mono">Get in Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Let Connect
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? I am always open to new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a href="mailto:kaicarsaad455@gmail.com" className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Drop me a line for projects</p>
            <div className="text-cyan-400 font-mono text-sm">kaicarsaad455@gmail.com</div>
          </a>

          <a href="https://www.linkedin.com/in/saad-k-95a26430b" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Connect professionally</p>
            <div className="text-blue-400 font-mono text-sm">linkedin.com/in/saad-k-95a26430b</div>
          </a>

          <a href="https://github.com/Artkill24" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 mb-4">Check out my code</p>
            <div className="text-purple-400 font-mono text-sm">github.com/Artkill24</div>
          </a>

          <a href="https://twitter.com/artkill24" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
            <div className="text-5xl mb-4">🐦</div>
            <h3 className="text-2xl font-bold text-white mb-2">Twitter / X</h3>
            <p className="text-gray-400 mb-4">Follow for updates</p>
            <div className="text-green-400 font-mono text-sm">@artkill24</div>
          </a>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Available For</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-white font-semibold mb-1">Freelance Projects</p>
              <p className="text-gray-400 text-sm">Full-stack development</p>
            </div>
            <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-white font-semibold mb-1">Collaborations</p>
              <p className="text-gray-400 text-sm">Open source projects</p>
            </div>
            <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
              <div className="text-3xl mb-2">💡</div>
              <p className="text-white font-semibold mb-1">Consulting</p>
              <p className="text-gray-400 text-sm">AI and blockchain solutions</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full">
            <span className="text-2xl">📍</span>
            <span className="text-gray-400">Based in Italy - Open to remote work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
