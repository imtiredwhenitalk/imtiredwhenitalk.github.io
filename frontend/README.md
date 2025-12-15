# Aurora UI — Frontend

## Стек
- React (Vite)
- JavaScript
- HTML (через Vite index.html)
- TailwindCSS
- Framer Motion (анімації)
- React Router (сторінки)

## Запуск (dev)
```bash
cd frontend
npm install
npm run dev
```

> За замовчуванням Vite проксіть `/api` на `http://127.0.0.1:8000` (Python бекенд).

## Збірка (prod)
```bash
npm run build
npm run preview
```

## Кастомізація
Кнопка **Кастомізація** у навбарі відкриває панель:
- Dark/Light тема
- Акцентний колір (Hue)
- Вмикання/вимикання анімацій
- Noise overlay
