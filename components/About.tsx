'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6">
            <span className="text-cyan-400 text-sm font-mono">👤 About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Behind the Secrets
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-cyan-400">🌍</span>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Originally from Morocco, I have called Italy home for over 15 years. 
                  My journey has taken me through diverse industries including logistics, 
                  retail, manufacturing, and security, giving me a unique perspective on 
                  how technology can transform traditional businesses.
                </p>
                <p>
                  Throughout these experiences, my true passion has always been technology. 
                  I dedicated my free time to learning and building, constantly exploring 
                  new technologies and frameworks, transforming ideas into reality through 
                  code and innovation.
                </p>
                <p>
                  Today, I focus on creating AI-powered automation systems, blockchain 
                  applications, and cybersecurity solutions. Each project represents not 
                  just a technical challenge, but an opportunity to build sustainable, 
                  scalable digital products that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-400">💡</span>
                Philosophy
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I believe in continuous learning and rapid prototyping. Every challenge is 
                an opportunity to learn something new. My approach combines technical 
                excellence with entrepreneurial thinking. I do not just build projects, 
                I create solutions that have the potential to generate value and make an impact.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400">🗣️</span>
                Languages
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Italian</span>
                    <span className="text-cyan-400">C1</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Arabic</span>
                    <span className="text-cyan-400">Native</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">English</span>
                    <span className="text-cyan-400">A2</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400">⚡</span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'AI Automation',
                  'Blockchain',
                  'Cybersecurity',
                  'SaaS Development',
                  'Web3',
                  'Crypto Trading',
                  'Tech Entrepreneurship',
                  'Open Source'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">💼</span>
                Focus
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <p>Building innovative AI-powered automation solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                  <p>Developing blockchain applications and smart contracts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                  <p>Creating cybersecurity tools and systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Years in Italy', icon: '🇮🇹' },
            { number: '11+', label: 'Projects Built', icon: '🚀' },
            { number: '6+', label: 'Certifications', icon: '🏆' },
            { number: '3', label: 'Tech Domains', icon: '💻' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
