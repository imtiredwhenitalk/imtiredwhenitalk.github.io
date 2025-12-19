# Beautiful Website + Presentation (React + Tailwind + Python)

Це готовий стартовий проект з:
- **Frontend**: React (Vite) + JavaScript + HTML + TailwindCSS + Framer Motion
- **Backend**: Python FastAPI (API + роздача статичних файлів)
- **Static HTML**: проста версія без React
- **Presentation**: `.pptx` з описом проекту

## 🚀 Розгортання на GitHub Pages

**✅ САЙТ ГОТОВИЙ:** Повноцінний React сайт вже зібраний і доданий в репозиторій (файли `index.html` та `assets/`). 

### Швидкий старт (показати сайт зараз)

**ВАЖЛИВО:** Спочатку злийте цей PR, натиснувши **"Merge pull request"** → **"Confirm merge"**

Потім оберіть один з варіантів:

**Варіант 1: Автоматичне розгортання (рекомендовано)**
1. ✅ Злийте цей PR (кнопка "Merge pull request")
2. Перейдіть в **Settings** → **Pages**
3. У розділі **Source** оберіть **"Deploy from a branch"**
4. У розділі **Branch** оберіть вашу головну гілку (зазвичай `main` або `master`) та папку **`/ (root)`**
5. Натисніть **Save**
6. Дочекайтесь завершення (іконка жовта → зелена)
7. Сайт буде доступний на `https://imtiredwhenitalk.github.io/`

**Варіант 2: GitHub Actions (для автоматичних оновлень)**
1. ✅ Злийте цей PR
2. Перейдіть в **Settings** → **Pages** 
3. У розділі **Source** оберіть **"GitHub Actions"**
4. Workflow автоматично збере та розгорне сайт
5. Кожен push в головну гілку оновлюватиме сайт автоматично

### 🔧 Якщо сайт не показується

Якщо ви налаштували Pages, але бачите README замість сайту:

1. **Перевірте, чи злито PR**: Переконайтесь, що цей PR злито в головну гілку
2. **Перевірте назву гілки**: У Settings → Pages → Branch має бути та сама гілка, куди ви злили PR (main, master, або інша)
3. **Дочекайтесь деплою**: Перейдіть у вкладку **Actions** і перевірте, чи завершився деплой (зелена галочка)
4. **Очистіть кеш браузера**: Натисніть Ctrl+Shift+R (або Cmd+Shift+R на Mac) для жорсткого перезавантаження
5. **Перевірте файли**: Переконайтесь, що в головній гілці є файли `index.html` та папка `assets/`

### Що включено

- ✅ Зібраний React + Vite сайт у корені репозиторію (працює одразу)
- ✅ `.nojekyll` файл для правильної роботи GitHub Pages
- ✅ GitHub Actions workflow для автоматичних оновлень (опціонально)
- ✅ Всі необхідні файли та конфігурація

### Як це працює

Репозиторій містить:
1. **Готовий сайт** (`index.html` + `assets/`) — працює одразу після налаштування Pages
2. **Workflow** (`.github/workflows/deploy-pages.yml`) — автоматично збирає сайт при push в головну гілку

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
