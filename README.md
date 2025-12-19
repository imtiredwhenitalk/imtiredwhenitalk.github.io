# Beautiful Website + Presentation (React + Tailwind + Python)

Це готовий стартовий проект з:
- **Frontend**: React (Vite) + JavaScript + HTML + TailwindCSS + Framer Motion
- **Backend**: Python FastAPI (API + роздача статичних файлів)
- **Static HTML**: проста версія без React
- **Presentation**: `.pptx` з описом проекту

## GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

### Enabling GitHub Pages

To enable GitHub Pages for this repository:

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Source**, select **GitHub Actions**
3. After merging changes to `main`, the workflow will automatically build and deploy the site
4. Your site will be available at `https://imtiredwhenitalk.github.io/`

The workflow builds the Vite + React frontend from the `frontend/` directory and deploys the built site to GitHub Pages.

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
