import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paintbrush, Sparkles } from 'lucide-react';
import Logo from './Logo.jsx';
import { cn } from './cn.js';

export default function Navbar({ onOpenCustomizer }) {
  const linkBase =
    'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/50';
  const link = ({ isActive }) =>
    cn(linkBase, isActive ? 'bg-white/10 text-fg' : 'text-fg/80');

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="text-base font-semibold tracking-tight">Aurora UI</span>
          <span className="hidden md:inline text-xs text-fg/60 ml-2">demo</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={link} end>
            Головна
          </NavLink>
          <NavLink to="/features" className={link}>
            Можливості
          </NavLink>
          <NavLink to="/pricing" className={link}>
            Ціни
          </NavLink>
          <NavLink to="/contact" className={link}>
            Контакт
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-3 py-2 text-sm font-medium text-fg shadow-glow transition-transform hover:-translate-y-[1px]"
            title="Відкрити кастомізацію"
          >
            <Paintbrush className="h-4 w-4" />
            <span className="hidden sm:inline">Кастомізація</span>
          </button>

          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-accent/90 px-3 py-2 text-sm font-semibold text-bg shadow-glow transition-transform hover:-translate-y-[1px]"
          >
            <Sparkles className="h-4 w-4" />
            Старт
          </a>
        </div>
      </div>
    </header>
  );
}
