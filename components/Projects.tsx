'use client';

import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
            <span className="text-purple-400 text-sm font-mono">🚀 Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Secret Projects
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions across AI, blockchain, and cybersecurity. 
            Each project represents a unique approach to solving complex problems.
          </p>
        </div>

        {selectedCategory === 'All' && featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-cyan-400">⭐</span>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-3">More Secrets Coming Soon</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Currently working on more innovative projects. Stay tuned for updates!
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-mono">In Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
