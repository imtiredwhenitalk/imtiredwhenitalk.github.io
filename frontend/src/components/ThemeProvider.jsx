import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

const LS_KEYS = {
  mode: 'aurora:mode',
  accent: 'aurora:accent',
  motion: 'aurora:motion',
  noise: 'aurora:noise'
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem(LS_KEYS.mode) || 'dark');
  const [accentHue, setAccentHue] = useState(() => {
    const saved = Number(localStorage.getItem(LS_KEYS.accent));
    return Number.isFinite(saved) ? clamp(saved, 0, 359) : 195;
  });
  const [animations, setAnimations] = useState(() => (localStorage.getItem(LS_KEYS.motion) ?? '1') === '1');
  const [noise, setNoise] = useState(() => (localStorage.getItem(LS_KEYS.noise) ?? '1') === '1');

  useEffect(() => {
    localStorage.setItem(LS_KEYS.mode, mode);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.accent, String(accentHue));
    // Accent is stored as HSL for nice palette sweeps.
    // Keep S/L stable to avoid harsh colors.
    document.documentElement.style.setProperty('--accent', `${accentHue} 100% 55%`);
  }, [accentHue]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.motion, animations ? '1' : '0');
  }, [animations]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.noise, noise ? '1' : '0');
    document.body.classList.toggle('noise', noise);
  }, [noise]);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      accentHue,
      setAccentHue,
      animations,
      setAnimations,
      noise,
      setNoise
    }),
    [mode, accentHue, animations, noise]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
