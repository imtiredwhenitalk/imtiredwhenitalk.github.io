import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider.jsx';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    badge: 'Для демо',
    features: ['Готова структура сторінок', 'Tailwind дизайн', 'Basic анімації']
  },
  {
    name: 'Pro',
    price: '$19',
    badge: 'Найпопулярніше',
    highlight: true,
    features: ['Кастомізація (тема/акцент)', 'Переходи між сторінками', 'Python API для форм']
  },
  {
    name: 'Studio',
    price: '$49',
    badge: 'Для команди',
    features: ['Додаткові сторінки/модулі', 'Дизайн-система компонентів', 'Готовність до деплою']
  }
];

export default function Pricing() {
  const { animations } = useTheme();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Ціни (демо)</h1>
        <p className="mt-3 text-lg text-fg/70">Це просто красивий приклад секції. Ціни можна замінити на свої.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p, idx) => (
          <motion.div
            key={p.name}
            className={
              p.highlight
                ? 'gradient-border rounded-3xl bg-card/60 p-6 shadow-glow'
                : 'gradient-border rounded-3xl bg-card/40 p-6'
            }
            initial={{ opacity: 0, y: animations ? 12 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: animations ? 0.35 : 0, delay: animations ? idx * 0.06 : 0 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xl font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-fg/60">{p.badge}</div>
              </div>
              {p.highlight ? (
                <div className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
                  <Star className="h-4 w-4" />
                  Pro
                </div>
              ) : null}
            </div>

            <div className="mt-6 text-5xl font-bold tracking-tight">
              {p.price}
              <span className="text-base font-semibold text-fg/60">/mo</span>
            </div>

            <ul className="mt-6 space-y-3 text-fg/80">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={
                p.highlight
                  ? 'mt-8 w-full rounded-2xl bg-accent/90 px-4 py-3 font-semibold text-bg shadow-glow transition-transform hover:-translate-y-[1px]'
                  : 'mt-8 w-full rounded-2xl border border-border/70 bg-bg/40 px-4 py-3 font-semibold text-fg hover:bg-white/5'
              }
            >
              Обрати
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
