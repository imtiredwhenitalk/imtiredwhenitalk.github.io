# Aurora UI — Backend (Python)

## Стек
- FastAPI
- Uvicorn
- SQLite (data.db)

## Запуск
```bash
cd backend-python
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## API
- `GET /api/health` -> `{ "ok": true }`
- `POST /api/contact` (JSON)
  ```json
  { "name": "Ім'я", "email": "you@example.com", "message": "..." }
  ```

## Статичний фронтенд
Якщо зібраний фронтенд існує у `frontend/dist`, бекенд автоматично роздає його як сайт (route `/`).
