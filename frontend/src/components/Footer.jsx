import React from 'react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bg/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <div>
              <div className="font-semibold">Aurora UI</div>
              <div className="text-sm text-fg/60">React + Tailwind + Python backend</div>
            </div>
          </div>
          <div className="text-sm text-fg/60">
            © {new Date().getFullYear()} Demo. Можеш змінювати і розширювати під свій проект.
          </div>
        </div>
      </div>
    </footer>
  );
}
