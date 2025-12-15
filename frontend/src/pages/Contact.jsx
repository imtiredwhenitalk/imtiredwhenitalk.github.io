import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeProvider.jsx';

export default function Contact() {
  const { animations } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Server error');
      }
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Unknown error');
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Контакт</h1>
        <p className="mt-3 text-lg text-fg/70">
          Ця форма відправляє дані на бекенд FastAPI (<code className="rounded bg-white/10 px-2 py-0.5">/api/contact</code>),
          де все зберігається в sqlite.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <motion.form
          onSubmit={onSubmit}
          className="gradient-border rounded-3xl bg-card/50 p-6"
          initial={{ opacity: 0, y: animations ? 10 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animations ? 0.35 : 0 }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Імʼя</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-2xl border border-border/70 bg-bg/40 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Твоє імʼя"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="rounded-2xl border border-border/70 bg-bg/40 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Повідомлення</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="rounded-2xl border border-border/70 bg-bg/40 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Що хочеш зробити на сайті?"
              />
            </label>
          </div>

          <button
            disabled={status === 'loading'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent/90 px-4 py-3 font-semibold text-bg shadow-glow disabled:opacity-60"
          >
            <Send className="h-5 w-5" />
            {status === 'loading' ? 'Відправляю...' : 'Відправити'}
          </button>

          {status === 'success' ? (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-green-200">
              <CheckCircle2 className="h-5 w-5" />
              Готово! Заявка записана.
            </div>
          ) : null}

          {status === 'error' ? (
            <div className="mt-4 flex items-start gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-200">
              <AlertTriangle className="mt-0.5 h-5 w-5" />
              <div>
                <div className="font-semibold">Помилка</div>
                <div className="text-sm opacity-90">{error}</div>
              </div>
            </div>
          ) : null}
        </motion.form>

        <div className="gradient-border rounded-3xl bg-card/50 p-6">
          <div className="text-xl font-semibold">Як це працює</div>
          <ol className="mt-4 space-y-3 text-fg/70 list-decimal pl-5">
            <li>React форма робить POST на <span className="font-semibold text-fg">/api/contact</span>.</li>
            <li>FastAPI валідовує і записує дані в sqlite (<span className="font-semibold text-fg">backend-python/data.db</span>).</li>
            <li>У проді бекенд роздає зібраний React (<span className="font-semibold text-fg">frontend/dist</span>) як статичні файли.</li>
          </ol>

          <div className="mt-6 rounded-2xl border border-border/70 bg-bg/50 p-4">
            <div className="text-sm font-semibold">Tip</div>
            <div className="mt-1 text-sm text-fg/70">
              Хочеш додати Telegram/Email нотифікації? Зроби це у бекенді в <code className="rounded bg-white/10 px-2 py-0.5">app/main.py</code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
