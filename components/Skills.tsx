'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '⚛️',
      skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Responsive Design'],
      color: 'cyan'
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['Claude API', 'AI Automation', 'Prompt Engineering', 'ML Models', 'NLP'],
      color: 'purple'
    },
    {
      title: 'Blockchain Development',
      icon: '⛓️',
      skills: ['Smart Contracts', 'Solidity', 'Web3.js', 'DeFi', 'Token Creation'],
      color: 'green'
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: ['Node.js', 'API Integration', 'Payment Systems', 'Database Design', 'REST APIs'],
      color: 'blue'
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      skills: ['Network Security', 'Threat Detection', 'Penetration Testing', 'Security Monitoring', 'Ethical Hacking'],
      color: 'red'
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['GitHub', 'Vercel', 'AWS', 'Docker', 'CI/CD'],
      color: 'yellow'
    }
  ];

  const certifications = [
    { name: 'HackerRank Python', icon: '🐍' },
    { name: 'TryHackMe - Terminaled', icon: '💻' },
    { name: 'TryHackMe - Web Fund', icon: '🌐' },
    { name: 'Forklift Operator', icon: '🚜' },
    { name: 'Industrial Molding', icon: '🏭' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
      purple: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
      green: 'border-green-500/30 bg-green-500/10 text-green-400',
      blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      red: 'border-red-500/30 bg-red-500/10 text-red-400',
      yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm mb-6">
            <span className="text-green-400 text-sm font-mono">💪 Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains, 
            from cutting-edge AI to secure blockchain solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-opacity-100 transition-all duration-500 hover:scale-105"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`inline-block mr-2 mb-2 px-3 py-1 rounded-full text-sm border ${getColorClasses(category.color)} transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
            <p className="text-gray-400">
              <span className="text-cyan-400 font-bold text-2xl">15+</span> years in Italy • 
              <span className="text-purple-400 font-bold text-2xl"> Multiple</span> industries • 
              <span className="text-green-400 font-bold text-2xl"> Continuous</span> learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
