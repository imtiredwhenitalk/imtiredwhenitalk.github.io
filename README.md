# Beautiful Website + Presentation (React + Tailwind + Python)

Це готовий стартовий проект з:
- **Frontend**: React (Vite) + JavaScript + HTML + TailwindCSS + Framer Motion
- **Backend**: Python FastAPI (API + роздача статичних файлів)
- **Static HTML**: проста версія без React
- **Presentation**: `.pptx` з описом проекту

## 🚀 Розгортання на GitHub Pages

**✅ САЙТ ГОТОВИЙ:** Повноцінний React сайт вже зібраний і доданий в репозиторій (файли `index.html` та `assets/`). 

### Швидкий старт (показати сайт зараз)

**Варіант 1: Автоматичне розгортання (рекомендовано)**
1. Злийте цей PR в гілку `main`
2. Перейдіть в **Settings** → **Pages**
3. У розділі **Source** оберіть **"Deploy from a branch"**
4. У розділі **Branch** оберіть **`main`** та папку **`/ (root)`**
5. Натисніть **Save**
6. Сайт буде доступний через 1-2 хвилини на `https://imtiredwhenitalk.github.io/`

**Варіант 2: GitHub Actions (для автоматичних оновлень)**
1. Злийте цей PR в гілку `main`
2. Перейдіть в **Settings** → **Pages** 
3. У розділі **Source** оберіть **"GitHub Actions"**
4. Workflow автоматично збере та розгорне сайт
5. Кожен push в `main` оновлюватиме сайт автоматично

### Що включено

- ✅ Зібраний React + Vite сайт у корені репозиторію (працює одразу)
- ✅ GitHub Actions workflow для автоматичних оновлень (опціонально)
- ✅ Всі необхідні файли та конфігурація

### Як це працює

Репозиторій містить:
1. **Готовий сайт** (`index.html` + `assets/`) — працює одразу після налаштування Pages
2. **Workflow** (`.github/workflows/deploy-pages.yml`) — автоматично збирає сайт при push в `main`

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
