# Beautiful Website + Presentation (React + Tailwind + Python)

Це готовий стартовий проект з:
- **Frontend**: React (Vite) + JavaScript + HTML + TailwindCSS + Framer Motion
- **Backend**: Python FastAPI (API + роздача статичних файлів)
- **Static HTML**: проста версія без React
- **Presentation**: `.pptx` з описом проекту

## 🚀 Розгортання на GitHub Pages

Цей репозиторій налаштований для автоматичного розгортання на GitHub Pages при кожному push в гілку `main`.

### ⚠️ Якщо зараз показується README замість сайту

Якщо при відкритті `https://imtiredwhenitalk.github.io/` ви бачите README файл замість сайту, виконайте наступні кроки:

### Налаштування GitHub Pages (крок за кроком)

**Крок 1:** Злийте цей PR в гілку `main`
- Натисніть "Merge pull request" для цього PR
- Це додасть workflow файл та конфігурацію

**Крок 2:** Налаштуйте джерело GitHub Pages
1. Перейдіть в **Settings** (Налаштування) → **Pages** вашого репозиторію
2. У розділі **Source** (Джерело), оберіть **GitHub Actions** (не "Deploy from a branch")
3. Збережіть налаштування

**Крок 3:** Дочекайтесь автоматичного розгортання
- Після злиття PR, workflow автоматично запуститься
- Ви можете перевірити прогрес у вкладці **Actions**
- Через 2-3 хвилини сайт буде доступний на `https://imtiredwhenitalk.github.io/`

### Як це працює

Workflow збирає React + Vite сайт з директорії `frontend/` та розгортає його на GitHub Pages. Кожен push в `main` автоматично оновлює сайт.

## 1) Запуск (dev)
В 2-х терміналах:

### Backend
```bash
cd backend-python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Відкрий `http://localhost:5173`.

## 2) Прод (одна команда)
Збірка фронта:
```bash
cd frontend
npm run build
```

Потім бекенд:
```bash
cd ../backend-python
uvicorn app.main:app --port 8000
```

Відкрий `http://localhost:8000`.

## 3) Статичний HTML варіант
Файл: `static-html/index.html` — працює сам по собі.
