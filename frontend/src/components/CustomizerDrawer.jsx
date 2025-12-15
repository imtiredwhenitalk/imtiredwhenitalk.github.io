import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, X, Sparkles, Sliders } from 'lucide-react';
import { useTheme } from './ThemeProvider.jsx';

const presets = [
  { name: 'Cyan', hue: 195 },
  { name: 'Violet', hue: 255 },
  { name: 'Pink', hue: 320 },
  { name: 'Lime', hue: 120 },
  { name: 'Amber', hue: 38 }
];

export default function CustomizerDrawer({ open, onClose }) {
  const { mode, setMode, accentHue, setAccentHue, animations, setAnimations, noise, setNoise } = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-md border-l border-border/70 bg-bg/85 backdrop-blur-xl"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Sliders className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-semibold">Кастомізація</div>
                  <div className="text-xs text-fg/60">Тема, акцент, анімації, noise</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              <section className="gradient-border rounded-2xl bg-card/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Тема</div>
                    <div className="text-sm text-fg/60">Dark / Light</div>
                  </div>
                  <button
                    onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-bg/60 px-3 py-2 text-sm font-medium hover:bg-white/5"
                  >
                    {mode === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    {mode === 'dark' ? 'Dark' : 'Light'}
                  </button>
                </div>
              </section>

              <section className="gradient-border rounded-2xl bg-card/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Акцентний колір</div>
                    <div className="text-sm text-fg/60">Hue: {accentHue}°</div>
                  </div>
                  <div className="h-9 w-9 rounded-xl border border-border/70" style={{ background: `hsl(${accentHue} 100% 55%)` }} />
                </div>

                <input
                  className="mt-4 w-full accent-[hsl(var(--accent))]"
                  type="range"
                  min="0"
                  max="359"
                  value={accentHue}
                  onChange={(e) => setAccentHue(Number(e.target.value))}
                />

                <div className="mt-4 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setAccentHue(p.hue)}
                      className="rounded-xl border border-border/70 bg-bg/50 px-3 py-2 text-sm hover:bg-white/5"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full" style={{ background: `hsl(${p.hue} 100% 55%)` }} />
                        {p.name}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="gradient-border rounded-2xl bg-card/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Анімації</div>
                    <div className="text-sm text-fg/60">Плавні переходи сторінок</div>
                  </div>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={animations}
                      onChange={(e) => setAnimations(e.target.checked)}
                      className="h-4 w-4 accent-[hsl(var(--accent))]"
                    />
                    Увімкнути
                  </label>
                </div>
              </section>

              <section className="gradient-border rounded-2xl bg-card/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Noise overlay</div>
                    <div className="text-sm text-fg/60">Легка зернистість для "живого" UI</div>
                  </div>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={noise}
                      onChange={(e) => setNoise(e.target.checked)}
                      className="h-4 w-4 accent-[hsl(var(--accent))]"
                    />
                    Увімкнути
                  </label>
                </div>
              </section>

              <div className="rounded-2xl bg-accent/10 p-4 border border-accent/20">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Порада
                </div>
                <div className="mt-1 text-sm text-fg/70">
                  На мобільному краще тримати анімації увімкненими, але трохи легшими. Тут можна вимкнути,
                  якщо потрібна максимальна продуктивність.
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
