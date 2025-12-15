import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Sparkles, ShieldCheck, Rocket, LayoutGrid } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider.jsx';

const blocks = [
  {
    icon: Palette,
    title: 'Кастомізація UI',
    text: 'Тема (dark/light), акцентний колір (hue), контроль анімацій і шуму. Налаштування зберігаються.'
  },
  {
    icon: Sparkles,
    title: 'Плавні переходи',
    text: 'AnimatePresence + motion компоненти. Переходи сторінок виглядають “premium”.'
  },
  {
    icon: LayoutGrid,
    title: 'Компонентний підхід',
    text: 'Navbar, футер, cards, sections — просто міняти блоки і розширювати.'
  },
  {
    icon: Rocket,
    title: 'Швидкий старт',
    text: 'Vite + Tailwind. Запускаєш dev сервер за хвилину, збірка теж швидка.'
  },
  {
    icon: ShieldCheck,
    title: 'Готовий бекенд',
    text: 'FastAPI endpoint для контакт-форми та роздача статичних файлів.'
  },
  {
    icon: Layers,
    title: 'Стильний дизайн',
    text: 'Градієнти, glassmorphism, мʼякі тіні, акуратні типографіка і spacing.'
  }
];

export default function Features() {
  const { animations } = useTheme();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Можливості</h1>
        <p className="mt-3 text-lg text-fg/70">
          Тут зібрано те, що робить сайт "дуже гарним": кастомізація, анімації, переходи і чистий стек.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, idx) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              className="gradient-border rounded-2xl bg-card/50 p-5"
              initial={{ opacity: 0, y: animations ? 10 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: animations ? 0.35 : 0, delay: animations ? idx * 0.05 : 0 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-semibold">{b.title}</div>
                  <div className="mt-2 text-fg/70">{b.text}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="gradient-border rounded-2xl bg-card/50 p-6">
          <div className="text-xl font-semibold">Переходи сторінок</div>
          <p className="mt-2 text-fg/70">
            Реалізовано через <span className="font-semibold text-fg">Framer Motion</span> + <span className="font-semibold text-fg">React Router</span>.
            Якщо вимкнеш анімації в панелі — переходи стануть миттєвими.
          </p>
          <div className="mt-4 rounded-2xl border border-border/70 bg-bg/50 p-4">
            <div className="text-sm font-semibold">Що можна додати далі</div>
            <ul className="mt-2 list-disc pl-5 text-fg/70">
              <li>Skeleton loading</li>
              <li>Локалізацію i18n</li>
              <li>Auth + кабінет користувача</li>
            </ul>
          </div>
        </div>

        <div className="gradient-border rounded-2xl bg-card/50 p-6">
          <div className="text-xl font-semibold">Кастомізація дизайну</div>
          <p className="mt-2 text-fg/70">
            Акцентний колір керує ключовими елементами (CTA, glow, highlights) через CSS змінну <code className="rounded bg-white/10 px-2 py-0.5">--accent</code>.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['Preset кнопки', 'Hue slider', 'Dark/Light', 'Noise overlay'].map((t) => (
              <div key={t} className="rounded-2xl border border-border/70 bg-bg/50 p-4">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-sm text-fg/60">Все в localStorage</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
