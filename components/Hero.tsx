'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div 
        className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 text-sm font-mono">Unlocking Innovation</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient">
          My Secret Ideas
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
          Full-Stack Developer & AI Automation Specialist
        </p>

        <div className="flex items-center justify-center gap-6 text-gray-500 mb-12 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📍</span>
            <span>Italy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🗣️</span>
            <span>IT • AR • EN</span>
          </div>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transforming ideas into reality through <span className="text-cyan-400">AI automation</span>, 
          <span className="text-purple-400"> blockchain innovation</span>, and 
          <span className="text-green-400"> cutting-edge security</span>. 
          Building the future, one secret at a time.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a 
            href="#projects"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            Discover Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 hover:text-cyan-300 font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
          >
            Get in Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
