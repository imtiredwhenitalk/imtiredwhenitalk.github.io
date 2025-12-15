import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import illustration from '../assets/illustration.png';
import { useTheme } from '../components/ThemeProvider.jsx';

const featureBullets = [
  'Адаптивний дизайн (mobile-first)',
  'Кастомізація: тема, акцент, анімації',
  'Переходи сторінок + мікроанімації',
  'Контакт-форма через Python API'
];

export default function Home() {
  const { animations } = useTheme();
  return (
    <div>
      <section className="relative overflow-hidden">
        <HeroBackdrop />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-fg/80">
                <Sparkles className="h-4 w-4 text-accent" />
                React • Tailwind • Framer Motion • Python API
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Красивий сайт з
                <span className="text-accent"> кастомізацією</span>,
                <br />
                анімаціями та переходами
              </h1>

              <p className="mt-4 max-w-xl text-lg text-fg/70">
                Готовий стартовий шаблон: сучасний лук, акуратні компоненти, плавні переходи сторінок і бекенд на
                Python для форм та API.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  id="get-started"
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent/90 px-5 py-3 text-base font-semibold text-bg shadow-glow transition-transform hover:-translate-y-[1px]"
                >
                  Почати
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card/50 px-5 py-3 text-base font-semibold text-fg hover:bg-white/5"
                >
                  Подивитись можливості
                  <Wand2 className="h-5 w-5 text-accent" />
                </Link>
              </div>

              <ul className="mt-8 grid gap-3">
                {featureBullets.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-fg/80">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <motion.div
                className="gradient-border rounded-3xl bg-card/50 p-4 shadow-glow"
                initial={{ opacity: 0, y: animations ? 12 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: animations ? 0.45 : 0 }}
              >
                <div className="rounded-2xl bg-bg/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Live preview</div>
                    <div className="flex items-center gap-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      { title: 'Glass cards', desc: 'Мʼякі тіні + градієнти' },
                      { title: 'Transitions', desc: 'AnimatePresence + routes' },
                      { title: 'Custom UI', desc: 'Акцент / тема / noise' },
                      { title: 'Python API', desc: 'Форма + sqlite' }
                    ].map((c) => (
                      <div key={c.title} className="rounded-2xl border border-border/70 bg-card/50 p-4">
                        <div className="font-semibold">{c.title}</div>
                        <div className="mt-1 text-sm text-fg/60">{c.desc}</div>
                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-2/3 bg-accent/80" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <img
                src={illustration}
                alt=""
                className="pointer-events-none absolute -bottom-10 -right-8 hidden w-48 opacity-90 md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Що тут є</h2>
          <p className="text-fg/70 max-w-2xl">
            Цей проект зроблений так, щоб ти міг швидко почати: змінюєш тексти/блоки, додаєш сторінки — і вже маєш
            акуратний результат.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Кастомізація',
              body: 'Панель налаштувань: тема, акцент, анімації, зернистість. Все зберігається у localStorage.'
            },
            {
              title: 'Супер вигляд',
              body: 'Градієнти, glassmorphism, мʼякі тіні, micro-interactions. Без зайвого, але "вау".'
            },
            {
              title: 'Python бекенд',
              body: 'FastAPI: /api/contact збереження у sqlite + роздача зібраного React як static.'
            }
          ].map((c) => (
            <div key={c.title} className="gradient-border rounded-2xl bg-card/50 p-5">
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-fg/70">{c.body}</div>
              <div className="mt-4 h-10 rounded-xl bg-accent/10 border border-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 w-1/3 bg-accent/35 blur-xl animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
