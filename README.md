# Beautiful Website + Presentation (React + Tailwind + Python)

Це готовий стартовий проект з:
- **Frontend**: React (Vite) + JavaScript + HTML + TailwindCSS + Framer Motion
- **Backend**: Python FastAPI (API + роздача статичних файлів)
- **Static HTML**: проста версія без React
- **Presentation**: `.pptx` з описом проекту

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
