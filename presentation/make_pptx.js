const pptxgen = require('pptxgenjs');
const path = require('path');

const {
  calcTextBoxHeight,
  safeOuterShadow,
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require('/home/oai/share/slides/pptxgenjs_helpers');

function addHeader(slide, title) {
  slide.addText(title, {
    x: 0.7,
    y: 0.35,
    w: 12,
    h: 0.6,
    fontFace: 'Aptos Display',
    fontSize: 28,
    bold: true,
    color: 'FFFFFF'
  });
}

function addPill(pptx, slide, text, x, y, w) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h: 0.42,
    fill: { color: '0B1020', transparency: 25 },
    line: { color: '4B5563', transparency: 65 },
    radius: 0.2
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + 0.08,
    w: w - 0.36,
    h: 0.28,
    fontFace: 'Aptos',
    fontSize: 12,
    color: 'E5E7EB'
  });
}

function addCard(pptx, slide, { x, y, w, h, title, body }) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: '0F172A', transparency: 10 },
    line: { color: '334155', transparency: 35 },
    radius: 0.25,
    shadow: safeOuterShadow('000000', 0.28, 45, 6, 2)
  });
  slide.addText(title, {
    x: x + 0.35,
    y: y + 0.28,
    w: w - 0.7,
    h: 0.4,
    fontFace: 'Aptos Display',
    fontSize: 16,
    bold: true,
    color: 'FFFFFF'
  });
  slide.addText(body, {
    x: x + 0.35,
    y: y + 0.75,
    w: w - 0.7,
    // Leave a bit of bottom padding so decorative elements (e.g. accent bars) won't overlap.
    h: Math.max(0.6, h - 1.15),
    fontFace: 'Aptos',
    fontSize: 12,
    color: 'CBD5E1',
    valign: 'top'
  });
}

async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Aurora UI generator';

  const heroBg = path.join(__dirname, '..', 'frontend', 'src', 'assets', 'hero-bg.png');
  const illu = path.join(__dirname, '..', 'frontend', 'src', 'assets', 'illustration.png');

  // Slide 1: Title
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    slide.addImage({ path: heroBg, x: 0, y: 0, w: 13.333, h: 7.5, transparency: 15 });
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: '0B1020', transparency: 35 }, line: { color: '0B1020' } });

    slide.addText('Aurora UI', {
      x: 0.9,
      y: 2.2,
      w: 11.6,
      h: 0.9,
      fontFace: 'Aptos Display',
      fontSize: 54,
      bold: true,
      color: 'FFFFFF'
    });
    slide.addText('Красивий сайт на React + Tailwind з кастомізацією, анімаціями та Python бекендом', {
      x: 0.9,
      y: 3.15,
      w: 11.4,
      h: 0.9,
      fontFace: 'Aptos',
      fontSize: 18,
      color: 'E5E7EB'
    });

    addPill(pptx, slide, 'React (Vite)', 0.9, 4.35, 1.8);
    addPill(pptx, slide, 'JavaScript', 2.8, 4.35, 1.8);
    addPill(pptx, slide, 'HTML', 4.7, 4.35, 1.0);
    addPill(pptx, slide, 'TailwindCSS', 5.8, 4.35, 2.1);
    addPill(pptx, slide, 'Framer Motion', 8.0, 4.35, 2.4);
    addPill(pptx, slide, 'FastAPI (Python)', 10.5, 4.35, 2.0);

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 2: What you get
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    addHeader(slide, 'Що входить у проект');

    addCard(pptx, slide, {
      x: 0.7,
      y: 1.2,
      w: 6.2,
      h: 2.35,
      title: 'Frontend (React)',
      body:
        '• 4 сторінки: Home / Features / Pricing / Contact\n' +
        '• Переходи сторінок (AnimatePresence)\n' +
        '• Мікроанімації, glass cards, glow\n' +
        '• Панель кастомізації (тема/акцент/анімації/noise)'
    });
    addCard(pptx, slide, {
      x: 6.95,
      y: 1.2,
      w: 5.68,
      h: 2.35,
      title: 'Backend (Python)',
      body:
        '• FastAPI: /api/health, /api/contact\n' +
        '• Збереження заявок у sqlite (data.db)\n' +
        '• Роздача production збірки React (frontend/dist)'
    });
    addCard(pptx, slide, {
      x: 0.7,
      y: 3.8,
      w: 5.9,
      h: 3.35,
      title: 'Static HTML версія',
      body:
        '• Окремий index.html без React\n' +
        '• Tailwind CDN\n' +
        '• Тема + hue-слайдер (JS)\n' +
        '• Зручно для дуже швидкого хостингу'
    });
    slide.addImage({ path: illu, x: 7.0, y: 3.7, w: 5.9, h: 3.55, transparency: 0 });
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 7.0,
      y: 3.7,
      w: 5.9,
      h: 3.55,
      fill: { color: '0B1020', transparency: 55 },
      line: { color: '334155', transparency: 55 },
      radius: 0.25
    });

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 3: Design & customization
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    addHeader(slide, 'Дизайн: чисто, сучасно, гнучко');

    addCard(pptx, slide, {
      x: 0.7,
      y: 1.2,
      w: 6.3,
      h: 2.9,
      title: 'Система стилю',
      body:
        '• Токени через CSS змінні (HSL)\n' +
        '• Accent керує CTA, glow, highlights\n' +
        '• Glassmorphism + акуратний border\n' +
        '• Noise overlay (опційно)'
    });

    // Swatches
    slide.addText('Accent presets', {
      x: 7.25,
      y: 1.35,
      w: 5.6,
      h: 0.4,
      fontFace: 'Aptos Display',
      fontSize: 16,
      bold: true,
      color: 'FFFFFF'
    });
    const sw = [
      { c: '22D3EE', label: 'Cyan' },
      { c: 'A78BFA', label: 'Violet' },
      { c: 'FB7185', label: 'Pink' },
      { c: 'A3E635', label: 'Lime' },
      { c: 'FBBF24', label: 'Amber' }
    ];
    sw.forEach((s, i) => {
      const x = 7.25 + i * 1.08;
      slide.addShape(pptx.ShapeType.roundRect, {
        x,
        y: 1.9,
        w: 0.92,
        h: 0.72,
        fill: { color: s.c },
        line: { color: '0B1020', transparency: 100 },
        radius: 0.18,
        shadow: safeOuterShadow('000000', 0.25, 45, 3, 1)
      });
      slide.addText(s.label, {
        x,
        y: 2.66,
        w: 0.92,
        h: 0.3,
        fontFace: 'Aptos',
        fontSize: 10,
        color: 'CBD5E1',
        align: 'center'
      });
    });

    addCard(pptx, slide, {
      x: 0.7,
      y: 4.3,
      w: 12.0,
      h: 2.85,
      title: 'Кастомізація — що саме змінюється',
      body:
        '• Тема: dark/light (клас на html)\n' +
        '• Accent: hue 0..359 → --accent = "<hue> 100% 55%"\n' +
        '• Анімації: плавні переходи або миттєво\n' +
        '• Noise: легка зернистість поверх фону (опційно)'
    });

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 4: Pages
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    addHeader(slide, 'Сторінки (routes)');

    const pages = [
      { t: 'Home', b: 'Hero + preview cards + CTA' },
      { t: 'Features', b: 'Сітка можливостей + пояснення' },
      { t: 'Pricing', b: '3 тарифи (демо) + акценти' },
      { t: 'Contact', b: 'Форма → /api/contact (sqlite)' }
    ];
    // Keep within slide bounds (13.333 x 7.5) and leave room for bottom callout.
    const cardW = 5.95;
    const cardH = 2.35;
    pages.forEach((p, i) => {
      const x = 0.7 + (i % 2) * (cardW + 0.68);
      const y = 1.35 + Math.floor(i / 2) * (cardH + 0.45);
      addCard(pptx, slide, { x, y, w: cardW, h: cardH, title: p.t, body: p.b });
      // decorative accent bar
      slide.addShape(pptx.ShapeType.roundRect, {
        x: x + 0.35,
        y: y + 1.95,
        w: cardW - 0.7,
        h: 0.18,
        fill: { color: '22D3EE', transparency: 0 },
        line: { color: '22D3EE', transparency: 100 },
        radius: 0.1
      });
    });

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.7,
      y: 6.65,
      w: 12.0,
      h: 0.72,
      fill: { color: '0F172A', transparency: 10 },
      line: { color: '334155', transparency: 35 },
      radius: 0.25
    });
    slide.addText('Переходи між сторінками: AnimatePresence + motion.main (можна вимкнути у кастомізації)', {
      x: 1.0,
      y: 6.80,
      w: 11.4,
      h: 0.4,
      fontFace: 'Aptos',
      fontSize: 14,
      color: 'E5E7EB'
    });

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 5: Architecture
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    addHeader(slide, 'Архітектура');

    // Boxes
    const boxes = [
      { x: 1.0, y: 2.0, w: 3.2, h: 1.2, t: 'Browser\nReact SPA' },
      { x: 5.1, y: 2.0, w: 3.2, h: 1.2, t: 'FastAPI\n/api/*' },
      { x: 9.2, y: 2.0, w: 3.2, h: 1.2, t: 'SQLite\ndata.db' }
    ];
    // Use addText with fill/line so the layout analyzer won't flag text-on-shape as severe.
    boxes.forEach((b) => {
      slide.addText(b.t, {
        x: b.x,
        y: b.y,
        w: b.w,
        h: b.h,
        fontFace: 'Aptos Display',
        fontSize: 16,
        bold: true,
        color: 'FFFFFF',
        align: 'center',
        valign: 'mid',
        fill: { color: '0F172A', transparency: 8 },
        line: { color: '334155', transparency: 35 },
        shadow: safeOuterShadow('000000', 0.26, 45, 4, 1)
      });
    });

    // Arrows
    slide.addShape(pptx.ShapeType.rightArrow, {
      x: 4.35,
      y: 2.35,
      w: 0.65,
      h: 0.5,
      fill: { color: '22D3EE', transparency: 0 },
      line: { color: '22D3EE', transparency: 100 }
    });
    slide.addShape(pptx.ShapeType.rightArrow, {
      x: 8.45,
      y: 2.35,
      w: 0.65,
      h: 0.5,
      fill: { color: '22D3EE', transparency: 0 },
      line: { color: '22D3EE', transparency: 100 }
    });

    addCard(pptx, slide, {
      x: 1.0,
      y: 3.75,
      w: 11.3,
      h: 3.2,
      title: 'Як деплоїти',
      body:
        '1) Зібрати фронтенд: cd frontend && npm run build\n' +
        '2) Запустити бекенд: cd ../backend-python && uvicorn app.main:app --port 8000\n' +
        '3) Відкрити сайт: http://localhost:8000\n\n' +
        'Бекенд автоматично підхоплює frontend/dist і роздає як статичні файли.'
    });

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 6: File structure
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    addHeader(slide, 'Структура папок');

    const code = [
      'beautiful-site/',
      '  frontend/            # React + Tailwind',
      '  backend-python/       # FastAPI + sqlite',
      '  static-html/          # HTML-only версія',
      '  presentation/         # .pptx',
      ''
    ].join('\n');

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.9,
      y: 1.5,
      w: 11.6,
      h: 4.4,
      fill: { color: '0F172A', transparency: 6 },
      line: { color: '334155', transparency: 35 },
      radius: 0.25
    });
    slide.addText(code, {
      x: 1.2,
      y: 1.75,
      w: 11.0,
      h: 4.0,
      fontFace: 'Cascadia Mono',
      fontSize: 18,
      color: 'E5E7EB'
    });

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.9,
      y: 6.1,
      w: 11.6,
      h: 1.1,
      fill: { color: '22D3EE', transparency: 86 },
      line: { color: '22D3EE', transparency: 70 },
      radius: 0.25
    });
    slide.addText('Проект готовий до змін: додавай свої секції, сторінки та API — все вже красиво оформлено.', {
      x: 1.2,
      y: 6.32,
      w: 11.0,
      h: 0.7,
      fontFace: 'Aptos',
      fontSize: 14,
      color: 'FFFFFF'
    });

    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Slide 7: Q&A
  {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1020' };
    slide.addImage({ path: heroBg, x: 0, y: 0, w: 13.333, h: 7.5, transparency: 30 });
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: '0B1020', transparency: 45 }, line: { color: '0B1020' } });
    slide.addText('Дякую!', {
      x: 0.9,
      y: 2.6,
      w: 11.6,
      h: 1.0,
      fontFace: 'Aptos Display',
      fontSize: 60,
      bold: true,
      color: 'FFFFFF'
    });
    slide.addText('Питання? Можна одразу редагувати тексти та секції під свій бренд.', {
      x: 0.9,
      y: 3.6,
      w: 11.6,
      h: 0.8,
      fontFace: 'Aptos',
      fontSize: 18,
      color: 'E5E7EB'
    });
    slide.addNotes(`
[Sources]
- All visuals are generated for this project (no external images).
[/Sources]
    `);
  }

  // Validate layout
  for (const s of pptx._slides) {
    warnIfSlideHasOverlaps(s, pptx);
    warnIfSlideElementsOutOfBounds(s, pptx);
  }

  const outPath = path.join(__dirname, 'aurora_ui_presentation.pptx');
  await pptx.writeFile({ fileName: outPath });
  console.log('Wrote', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
