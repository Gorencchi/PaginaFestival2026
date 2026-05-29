/* ═══════════════════════════════════════════════════════════════
   FESTIVAL ESTUDIANTIL DE LAS ARTES 2026 — script.js
   Ministerio de Educación Pública · Costa Rica · 50° Aniversario
   ─ Navegación SPA sin recarga
   ─ Contenido basado en Manual de Disciplinas Artísticas FEA 2026
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────── */

const CATEGORIES = [
  {
    id: 'escenicas',
    name: 'Artes Escénicas',
    icon: '🎭',
    color: '#ff2d78',
    chipLabel: 'Escena',
    tag: '16 disciplinas',
    tagline: 'El cuerpo, la voz y el movimiento como lenguaje artístico',
    shortDesc: 'Coreografías, danzas folclóricas, teatro, títeres, cuentacuentos y poesía coral. La expresión escénica en su máxima diversidad.',
    heroImg: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1400&q=80',
    cardImg: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=700&q=80',
    description: [
      'El área de Artes Escénicas, Dramáticas y del Movimiento reúne 16 disciplinas que celebran el cuerpo, la voz y el espacio como herramientas artísticas. Desde coreografías de baile hasta teatro indígena, este es el corazón performativo del Festival.',
      'Las disciplinas incluyen coreografía de baile, coreografía conceptual, proyecciones folclóricas costarricense e internacional, danzas culturales indígenas, cuentacuentos, narración oral indígena, poesía coral, retahílas, teatro, teatro de muñecos o títeres, teatro indígena y teatro de niños y niñas.',
      'Todas las obras deben ser originales e inéditas al momento de inscribirse en la etapa del centro educativo, con excepción de las disciplinas de proyección folclórica y danza cultural indígena, que pueden recuperar tradiciones y coreografías de la cultura popular. La duración máxima de las presentaciones oscila entre 5 y 6 minutos según la disciplina.'
    ],
    highlights: [
      { icon: '💃', title: 'Coreografía de baile', desc: 'Grupos de mínimo 2 estudiantes con música popular. Salsa, merengue, hip hop, jazz y más. Máx. 6 min.' },
      { icon: '🌿', title: 'Proyección folclórica costarricense', desc: 'Danzas típicas nacionales: punto guanacasteco, tambito, pasillo. Vestuario tradicional.' },
      { icon: '🎭', title: 'Teatro - extracto de obra', desc: 'De 2 a 10 estudiantes. Obra original con introducción, desarrollo y resolución del conflicto. Máx. 6 min.' },
      { icon: '🤹', title: 'Teatro de muñecos o títeres', desc: 'De 2 a 5 titiriteros/as. Títeres elaborados por el estudiantado. Obra original. Máx. 5 min.' }
    ],
    info: { Disciplinas: '16', Duración: '5 a 6 min', Modalidad: 'Grupal/Individual', Inscripción: 'Etapa institucional' },
    gallery: [
      'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&q=75',
      'https://images.unsplash.com/photo-1545959570-a94084071b5d?w=500&q=75',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',
      'https://images.unsplash.com/photo-1571843439991-dd2b23e0009f?w=500&q=75',
      'https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&q=75',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=75'
    ],
    sidebarImg: 'https://images.unsplash.com/photo-1536581104763-7e03e5e60d66?w=500&q=80',
    sidebarCaption: 'Danza cultural indígena costarricense',
    sidebarCaptionDesc: 'Interpretada por estudiantes indígenas o matriculados en centros educativos indígenas. Expresa saberes, memorias y prácticas culturales vivas de los pueblos originarios de Costa Rica.'
  },
  {
    id: 'literarias',
    name: 'Artes Literarias',
    icon: '📚',
    color: '#ffd23f',
    chipLabel: 'Palabras',
    tag: '10 disciplinas',
    tagline: 'La palabra escrita y oral como acto de creación y memoria',
    shortDesc: 'Poesía, cuento, microrrelato, novela gráfica, fotonovela y relatos indígenas. La literatura en todas sus formas expresivas.',
    heroImg: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80',
    cardImg: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=700&q=80',
    description: [
      'El área de Artes Literarias comprende 10 disciplinas que abarcan la escritura creativa y la oralidad. Todas las obras deben ser originales e inéditas, creadas exclusivamente por estudiantes, a excepción de los relatos y cantos de tradición ancestral indígena.',
      'Las disciplinas incluyen: canto poético indígena, cuento (más de 2 y hasta 7 páginas), cuento ilustrado, fotonovela (hasta 15 páginas), microrrelato (7 a 200 palabras), novela gráfica (hasta 15 páginas), poesía, poesía indígena, relato escrito indígena original y relato escrito indígena tradicional o ancestral.',
      'La mayoría de las obras se presentan en físico con una ficha técnica adherida. La participación del estudiantado no se limita a la exposición de la obra: se promueven recitales, lecturas y actividades de interacción con el público en todas las etapas del Festival.'
    ],
    highlights: [
      { icon: '📝', title: 'Microrrelato', desc: 'De 7 a 200 palabras. Texto ficcional, muy breve, en prosa narrativa. Trama ultracorta e impactante.' },
      { icon: '📖', title: 'Cuento', desc: 'De 2 a 7 páginas tamaño carta. Introducción, desarrollo y conclusión. Individual.' },
      { icon: '🖼️', title: 'Novela gráfica', desc: 'Hasta 15 páginas. Combina texto e imágenes en viñetas. Individual o grupos de hasta 3 personas.' },
      { icon: '🌱', title: 'Canto poético indígena', desc: 'Presentación oral y performática. Libre en estructura. Máximo 5 minutos.' }
    ],
    info: { Disciplinas: '10', Extensión: 'Variable', Modalidad: 'Individual/Dúos', Presentación: 'Física y oral' },
    gallery: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=75',
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&q=75',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=75',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=75',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=75',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=75'
    ],
    sidebarImg: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&q=80',
    sidebarCaption: 'Poesía: forma libre y experimental',
    sidebarCaptionDesc: 'Sin rima obligatoria, conforme a las tendencias actuales. Las creaciones se dan a conocer al público mediante recitales o lecturas en cada etapa del Festival.'
  },
  {
    id: 'musicales',
    name: 'Artes Musicales',
    icon: '🎵',
    color: '#ff6b2b',
    chipLabel: 'Sonidos',
    tag: '24 disciplinas',
    tagline: 'Desde la cimarrona hasta la percusión corporal, la música viva',
    shortDesc: 'Bandas de garaje, coros, estudiantinas, marimba, rap, cantautor/a y ensambles con materiales reciclables. La riqueza musical del FEA.',
    heroImg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1400&q=80',
    cardImg: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=700&q=80',
    description: [
      'El área de Artes Musicales es la más amplia del Festival con 24 disciplinas. Incluye desde agrupaciones tradicionales como la cimarrona y la estudiantina, hasta géneros contemporáneos como el rap y la banda de garaje, pasando por disciplinas únicas como el ensamble con materiales reciclables y la percusión corporal.',
      'Las obras deben ser originales e inéditas, excepto en canción popular, canción típica popular costarricense, canto indígena tradicional o ancestral, y sus variantes para niños/as. La duración máxima es de 5 minutos para todas las disciplinas.',
      'En disciplinas como banda de garaje, cimarrona, coro y estudiantina, la interpretación se realiza únicamente en vivo, sin pistas ni apoyos tecnológicos. La dirección artística en escena es exclusiva de estudiantes. Los cantos y canciones deben respetar los valores y el enfoque de derechos humanos establecidos en la normativa.'
    ],
    highlights: [
      { icon: '🎸', title: 'Banda de garaje', desc: 'Rock y sus variantes. Mínimo 3, máximo 8 estudiantes. Batería, bajo, guitarra y voz obligatorios. 100% en vivo.' },
      { icon: '🪘', title: 'Cimarrona', desc: 'Vientos y percusión al estilo folclórico costarricense. De 5 a 12 integrantes. Ritmos típicos nacionales.' },
      { icon: '🎹', title: 'Percusión corporal', desc: 'Solo el cuerpo como instrumento. Palmas, golpes, chasquidos. Obra original. Mínimo 2 estudiantes.' },
      { icon: '🎤', title: 'Cantautor/a', desc: 'Una sola persona: compone, canta y se acompaña. Instrumento en vivo obligatorio. Sin pistas.' }
    ],
    info: { Disciplinas: '24', Duración: 'Máx. 5 min', Modalidad: 'Grupal/Individual', 'En vivo': 'Mayoría de disciplinas' },
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=75',
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=75',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&q=75',
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500&q=75',
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&q=75',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=75'
    ],
    sidebarImg: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80',
    sidebarCaption: 'Ensamble con materiales reciclables',
    sidebarCaptionDesc: 'Instrumentos construidos por el estudiantado con material reutilizable o reciclable. Mínimo 4 integrantes. Promueve la conciencia ambiental desde el arte musical.'
  },
  {
    id: 'visuales',
    name: 'Artes Visuales',
    icon: '🎨',
    color: '#00d4ff',
    chipLabel: 'Visual',
    tag: '21 disciplinas',
    tagline: 'Del collage al mural, de la fotografía a las esculturas vivientes',
    shortDesc: 'Pintura, escultura, fotografía, grabado, instalación artística, mural, mascarada costarricense, teñido textil, producción audiovisual y más.',
    heroImg: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&q=80',
    cardImg: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80',
    description: [
      'El área de Artes Visuales comprende 21 disciplinas que van desde las técnicas más tradicionales hasta propuestas contemporáneas de arte urbano y audiovisual. Todas las obras deben ser originales e inéditas y creadas exclusivamente por estudiantes.',
      'Las disciplinas incluyen: collage, dibujo (incluye manga y caricatura), diseño de objeto, escultura, fotografía, grabado, instalación artística, máscara o careta, mascarada tradicional costarricense, mural, pintura, pintura corporal, producción audiovisual, teñido textil, esculturas vivientes y sus variantes indígenas.',
      'Las obras se exponen bajo techo, protegidas y con acceso para toda la comunidad estudiantil. Muchas disciplinas requieren un registro visual de evidencias del proceso creativo. Los materiales deben ser reciclables o reutilizables cuando sea posible, y las dimensiones están normadas por disciplina para facilitar el traslado entre etapas.'
    ],
    highlights: [
      { icon: '📸', title: 'Fotografía', desc: 'Cualquier dispositivo. Tamaño máximo carta. Puede ser díptico o tríptico. Técnica libre. Individual.' },
      { icon: '🏛️', title: 'Instalación artística', desc: 'Arte contemporáneo en espacio específico. Área mínima 2x2 m. Individual o hasta 5 estudiantes.' },
      { icon: '🎭', title: 'Esculturas vivientes', desc: 'Arte de la calle: posturas estáticas con maquillaje y vestuario. Individual o hasta 3 estudiantes.' },
      { icon: '🎬', title: 'Producción audiovisual', desc: 'Cortometrajes, documentales, stop motion, musicales. Máximo 5 minutos. Hasta 5 integrantes.' }
    ],
    info: { Disciplinas: '21', Formato: 'Variable', Modalidad: 'Indiv./Grupal', Presentación: 'Exposición física' },
    gallery: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=75',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=500&q=75',
      'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=500&q=75',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500&q=75',
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&q=75'
    ],
    sidebarImg: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=500&q=80',
    sidebarCaption: 'Mascarada tradicional costarricense',
    sidebarCaptionDesc: 'Payasos, mantudos, gigantes, cabezudos y aparatos. Máscara popular costarricense confeccionada con papel maché, resina y materiales tradicionales. Individual o hasta 3 estudiantes.'
  },
  {
    id: 'digitales',
    name: 'Arte Digital',
    icon: '💻',
    color: '#b24bff',
    chipLabel: 'Digital',
    tag: '3 disciplinas',
    tagline: 'La tecnología como herramienta de creación artística del siglo XXI',
    shortDesc: 'Ilustración digital, microrrelato ilustrado digital y música digital. Nuevas formas de expresión en el 50° aniversario del FEA.',
    heroImg: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1400&q=80',
    cardImg: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80',
    description: [
      'El área de Arte Digital es la más reciente incorporación al Festival Estudiantil de las Artes, reconociendo que la tecnología forma parte del entorno cotidiano del estudiantado y constituye una herramienta legítima para la creación artística contemporánea.',
      'Comprende tres disciplinas: ilustración digital (obra visual creada con herramientas digitales, impresa en tamaño mínimo carta), microrrelato ilustrado digital (texto de 7 a 200 palabras acompañado de ilustración digital, entregado en formato PDF o imagen) y música digital (creación e interpretación sonora en tiempo real con recursos digitales, sin instrumentos acústicos tradicionales).',
      'Todas las obras deben ser originales e inéditas. Queda estrictamente prohibido el uso de Inteligencia Artificial Generativa (IAG) para la creación total o parcial de texto, imagen o contenido musical. La música digital se presenta completamente en vivo y su duración máxima es de 10 minutos, el doble que las demás disciplinas musicales.'
    ],
    highlights: [
      { icon: '🖌️', title: 'Ilustración digital', desc: 'Procreate, Krita, Adobe Illustrator, etc. Impresa en papel de calidad. Resolución mínima 300 dpi. Individual.' },
      { icon: '📱', title: 'Microrrelato ilustrado digital', desc: 'Texto (7-200 palabras) + ilustración en un solo canvas digital. PDF o imagen. Individual o en dúo.' },
      { icon: '🎛️', title: 'Música digital', desc: 'DAW, controladores MIDI, sintetizadores virtuales, loopers. 100% en vivo. Máximo 10 minutos.' },
      { icon: '🚫', title: 'Sin IA Generativa', desc: 'Prohibido el uso de herramientas de IA para crear texto, imagen o música. La obra es exclusivamente del estudiante.' }
    ],
    info: { Disciplinas: '3', 'Música digital': 'Máx. 10 min', Modalidad: 'Indiv./Grupal', 'IA generativa': 'Prohibida' },
    gallery: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=75',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=75',
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&q=75',
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&q=75',
      'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&q=75',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=75'
    ],
    sidebarImg: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80',
    sidebarCaption: 'Música digital: performance en vivo',
    sidebarCaptionDesc: 'Toda la ejecución en tiempo real. Loops creados en el momento, manipulación de parámetros y procesamiento digital. Máximo 10 integrantes. Dirigida por un/a estudiante.'
  }
];

/* ── COLOR HELPERS ─────────────────────────────────────────── */

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

/* ── VIEW MANAGER ──────────────────────────────────────────── */

const viewHome   = document.getElementById('view-home');
const viewDetail = document.getElementById('view-detail');
const navBackBtn = document.getElementById('nav-back-btn');
const navLogo    = document.getElementById('nav-logo');

let currentCategoryId = null;

function showView(targetView, otherView) {
  otherView.classList.remove('active', 'visible');
  targetView.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      targetView.classList.add('visible', 'fade-enter');
      setTimeout(() => targetView.classList.remove('fade-enter'), 600);
    });
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  navBackBtn.style.display = 'none';
  showView(viewHome, viewDetail);
  currentCategoryId = null;
}

function goToCategory(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return;
  currentCategoryId = id;
  renderDetailView(cat);
  navBackBtn.style.display = 'flex';
  showView(viewDetail, viewHome);
}

navBackBtn.addEventListener('click', goHome);
navLogo.addEventListener('click', (e) => { e.preventDefault(); goHome(); });

/* ── MARQUEE ───────────────────────────────────────────────── */

function buildMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const items = CATEGORIES.map(c => `<span class="marquee-item"><span>✦</span>${c.name.toUpperCase()}</span>`).join('');
  track.innerHTML = items + items;
}

/* ── STATS (Seguro y Dinámico basado en tu HTML) ─────────── */
function updateStats() {
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length === 0) return;

  // Mapeo seguro: buscamos los textos y actualizamos el número correspondiente
  statItems.forEach(item => {
    const label = item.querySelector('.stat-label')?.textContent.trim().toLowerCase();
    const numEl = item.querySelector('.stat-num');
    
    if (!numEl) return;

    if (label.includes('categoría') || label.includes('área')) {
      numEl.textContent = '5';
    } else if (label.includes('disciplina') || label.includes('participante')) {
      // Ajustado a las 74 disciplinas reales del manual oficial del FEA 2026
      numEl.textContent = '74';
    } else if (label.includes('día') || label.includes('aniversario')) {
      numEl.textContent = '50°';
    } else if (label.includes('premiación') || label.includes('mep')) {
      numEl.textContent = 'MEP';
    }
  });
}

/* ── CATEGORY CARDS ────────────────────────────────────────── */

function buildCategoryCards() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => {
    const rgb = hexToRgb(cat.color);
    return `
      <article class="cat-card" data-id="${cat.id}" style="--cat-color:${cat.color};--cat-rgb:${rgb};">
        <div class="cat-card-img-wrap" style="overflow:hidden;">
          <img
            class="cat-card-img"
            src="${cat.cardImg}"
            alt="${cat.name}"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="cat-card-overlay"></div>
        <span class="cat-card-chip" style="background:${cat.color};">${cat.chipLabel}</span>

        <div class="cat-card-body">
          <span class="cat-card-icon">${cat.icon}</span>
          <h3 class="cat-card-name" style="color:${cat.color};">${cat.name}</h3>
          <p class="cat-card-desc">${cat.shortDesc}</p>
          <div class="cat-card-footer">
            <span class="cat-tag">${cat.tag}</span>
            <button
              class="btn-info"
              style="background:${cat.color};"
              data-id="${cat.id}"
              aria-label="Más información sobre ${cat.name}"
            >
              Más info <span class="icon">→</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.cat-card').forEach(card => {
    const color = card.style.getPropertyValue('--cat-color');
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = `0 20px 50px rgba(${hexToRgb(color)},0.28), 0 0 0 1px rgba(${hexToRgb(color)},0.35)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-info');
    if (btn) { goToCategory(btn.dataset.id); return; }
    const card = e.target.closest('.cat-card');
    if (card) goToCategory(card.dataset.id);
  });
}

/* ── DETAIL VIEW RENDERER ──────────────────────────────────── */

function renderDetailView(cat) {
  const others = CATEGORIES.filter(c => c.id !== cat.id);
  const rgb = hexToRgb(cat.color);

  viewDetail.innerHTML = `
    <div class="detail-hero">
      <img class="detail-hero-img" src="${cat.heroImg}" alt="${cat.name}" />
      <div class="detail-hero-gradient"></div>
      <div class="detail-hero-content">
        <p class="detail-eyebrow" style="color:${cat.color};">${cat.icon} &nbsp;${cat.chipLabel.toUpperCase()} &nbsp;·&nbsp; Festival Estudiantil de las Artes 2026 · MEP Costa Rica</p>
        <h1 class="detail-title">${cat.name}</h1>
        <p class="detail-tagline">"${cat.tagline}"</p>
      </div>
    </div>

    <nav class="other-cats-nav" aria-label="Otras categorías">
      <div class="other-cats-inner">
        <span class="other-cat-label">Otras áreas:</span>
        ${others.map(o => `
          <button class="other-cat-btn" data-id="${o.id}" style="--oc:${o.color};" aria-label="Ir a ${o.name}">
            <span>${o.icon}</span> ${o.name}
          </button>
        `).join('')}
      </div>
    </nav>

    <div class="detail-body">
      <div class="detail-grid">

        <div class="detail-text">
          <h2>Acerca del área</h2>
          ${cat.description.map(p => `<p>${p}</p>`).join('')}

          <div class="detail-highlights stagger">
            ${cat.highlights.map(h => `
              <div class="highlight-item">
                <span class="highlight-icon">${h.icon}</span>
                <div class="highlight-text">
                  <strong>${h.title}</strong>
                  <span>${h.desc}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="detail-sidebar">
          <div class="sidebar-card">
            <div class="sidebar-card-img-wrap">
              <img class="sidebar-card-img" src="${cat.sidebarImg}" alt="${cat.sidebarCaption}" loading="lazy" />
            </div>
            <div class="sidebar-card-body">
              <h4>${cat.sidebarCaption}</h4>
              <p>${cat.sidebarCaptionDesc}</p>
            </div>
          </div>

          <div class="info-box">
            <h4>Información del área</h4>
            ${Object.entries(cat.info).map(([k,v]) => `
              <div class="info-row">
                <span class="key">${k}</span>
                <span class="val" style="color:${cat.color};">${v}</span>
              </div>
            `).join('')}
          </div>

          <a
            href="https://www.mep.go.cr/festival-estudiantil-artes"
            target="_blank"
            rel="noopener"
            class="btn-info"
            style="background:${cat.color}; width:100%; justify-content:center; padding:0.85rem; font-size:0.95rem; border-radius:12px; box-shadow: 0 6px 24px rgba(${rgb},0.35); text-decoration:none; display:flex;"
          >
            Más info en MEP.go.cr <span class="icon">↗</span>
          </a>
        </div>

      </div>

      <div class="gallery-section">
        <h3>Galería &nbsp;<span style="color:${cat.color};">·</span></h3>
        <div class="gallery-grid">
          ${cat.gallery.map((url, i) => `
            <div class="gallery-item">
              <img src="${url}" alt="Galería ${cat.name} ${i+1}" loading="lazy" decoding="async" />
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Wire up other-category buttons
  viewDetail.querySelectorAll('.other-cat-btn').forEach(btn => {
    const color = btn.style.getPropertyValue('--oc');
    btn.addEventListener('mouseenter', () => {
      btn.style.background = color;
      btn.style.borderColor = color;
      btn.style.color = '#000';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    });
    btn.addEventListener('click', () => goToCategory(btn.dataset.id));
  });
}

/* ── HERO CTA SCROLL ───────────────────────────────────────── */

document.getElementById('hero-cta-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
});

/* ── INIT ──────────────────────────────────────────────────── */

function init() {
  buildMarquee();
  buildCategoryCards();
  updateStats();

  viewHome.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      viewHome.classList.add('visible');
    });
  });
}

document.addEventListener('DOMContentLoaded', init);