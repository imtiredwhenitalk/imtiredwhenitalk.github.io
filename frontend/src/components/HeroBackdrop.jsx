import React from 'react';
import heroBg from '../assets/hero-bg.png';

export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      {/* image layer */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      {/* animated blobs */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl animate-floaty" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-floaty" style={{ animationDelay: '1.2s' }} />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-floaty" style={{ animationDelay: '2.4s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
    </div>
  );
}
