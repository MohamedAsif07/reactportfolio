'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setLightMode(savedTheme === 'light');
      document.body.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    setLightMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle('light-mode', newMode);
      localStorage.setItem('theme', newMode ? 'light' : 'dark');
      return newMode;
    });
  };

  return (
    <nav className="navbar flex justify-between items-center fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-white/10 backdrop-blur border-b border-white/10">
      <div className="nav-brand text-2xl font-bold text-primary drop-shadow">Portfolio</div>
      <div className="nav-links flex gap-8 items-center">
        <Link href="#home" className="hover:text-primary transition">Home</Link>
        <Link href="#projects" className="hover:text-primary transition">Projects</Link>
        <Link href="#skills" className="hover:text-primary transition">Skills</Link>
        <Link href="#cybersecurity" className="hover:text-primary transition">Security</Link>
        <Link href="#contact" className="hover:text-primary transition">Contact</Link>
        <button className="theme-toggle ml-4 p-2 rounded-full bg-primary text-bg shadow" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </nav>
  );
} 