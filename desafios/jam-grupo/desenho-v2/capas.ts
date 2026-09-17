/**
 * Capas placeholder das faixas do baseline, como cenas SVG inline (data URI).
 * Cada cena aproxima a arte original da faixa. Funcionam offline.
 * Substitua pelas artes reais se houver os assets licenciados.
 */

const svg = (conteudo: string): string =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">${conteudo}</svg>`,
  );

const grad = (id: string, from: string, to: string, vertical = true): string =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">` +
  `<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>`;

export const capas = {
  /** Sober: praia vista de cima, água turquesa e faixa de areia. */
  sober: svg(
    `<defs>${grad('a', '#63cabc', '#17646d')}</defs>` +
      `<rect width="80" height="80" fill="url(#a)"/>` +
      `<path d="M0 62 Q 24 50 44 60 T 80 56 L 80 80 L 0 80 Z" fill="#e7d3ac"/>` +
      `<path d="M0 60 Q 24 48 44 58 T 80 54" stroke="#f4fbf9" stroke-width="3" fill="none" opacity="0.9"/>`,
  ),
  /** We Don't Talk Anymore: flores de cerejeira sobre fundo claro. */
  weDontTalkAnymore: svg(
    `<defs>${grad('a', '#f6e3ea', '#d9a7bd')}</defs>` +
      `<rect width="80" height="80" fill="url(#a)"/>` +
      `<path d="M-4 70 Q 30 48 84 58" stroke="#6d4a3f" stroke-width="3" fill="none"/>` +
      `<path d="M20 62 Q 34 44 60 40" stroke="#6d4a3f" stroke-width="2" fill="none"/>` +
      `<g fill="#ef9db6">` +
      `<circle cx="22" cy="58" r="6"/><circle cx="34" cy="50" r="7"/><circle cx="48" cy="46" r="5"/>` +
      `<circle cx="58" cy="40" r="7"/><circle cx="68" cy="50" r="5"/><circle cx="42" cy="60" r="4"/>` +
      `</g>` +
      `<g fill="#fbd0dd">` +
      `<circle cx="26" cy="54" r="3"/><circle cx="52" cy="42" r="3"/><circle cx="62" cy="46" r="3"/>` +
      `</g>`,
  ),
  /** LA Girls: montanhas em tons de azul acinzentado. */
  laGirls: svg(
    `<defs>${grad('a', '#b9c8d6', '#5d7186')}</defs>` +
      `<rect width="80" height="80" fill="url(#a)"/>` +
      `<path d="M-6 80 L 26 30 L 46 60 L 58 42 L 86 80 Z" fill="#3c4f63"/>` +
      `<path d="M26 30 L 34 43 L 22 43 Z" fill="#e8eef4"/>` +
      `<path d="M-10 80 L 12 52 L 34 80 Z" fill="#2c3b4c"/>`,
  ),
  /** Easier (Remix): mar escuro com brilho de pôr do sol no horizonte. */
  easierRemix: svg(
    `<defs>${grad('a', '#131a2e', '#3a2330')}${grad('b', '#ff8a4d', '#c23c2a')}</defs>` +
      `<rect width="80" height="80" fill="url(#a)"/>` +
      `<circle cx="40" cy="48" r="12" fill="url(#b)" opacity="0.95"/>` +
      `<rect y="48" width="80" height="32" fill="#0d1322"/>` +
      `<path d="M28 52 H 52 M32 58 H 48 M36 64 H 44" stroke="#e0643a" stroke-width="2" opacity="0.8"/>`,
  ),
  /** Some Type of Love: tons quentes de sépia com luz difusa. */
  someTypeOfLove: svg(
    `<defs>${grad('a', '#caa27a', '#4e3423')}</defs>` +
      `<rect width="80" height="80" fill="url(#a)"/>` +
      `<circle cx="30" cy="30" r="22" fill="#e9c99b" opacity="0.55"/>` +
      `<path d="M0 80 Q 40 58 80 80 Z" fill="#33211a" opacity="0.7"/>`,
  ),
  /** I Warned Myself: campo verde sob céu claro. */
  iWarnedMyself: svg(
    `<defs>${grad('a', '#cfe3d8', '#8fc3a5')}${grad('b', '#6fae57', '#2f5d3a')}</defs>` +
      `<rect width="80" height="52" fill="url(#a)"/>` +
      `<circle cx="60" cy="18" r="8" fill="#f5efd7" opacity="0.9"/>` +
      `<path d="M0 44 Q 40 34 80 46 L 80 80 L 0 80 Z" fill="url(#b)"/>`,
  ),
};

/** Fotos placeholder dos participantes (pravatar.cc, ids estáveis). */
export const fotos = {
  aline: 'https://i.pravatar.cc/64?img=47',
  marco: 'https://i.pravatar.cc/64?img=12',
  sumit: 'https://i.pravatar.cc/64?img=68',
  voce: 'https://i.pravatar.cc/64?img=15',
  leo: 'https://i.pravatar.cc/64?img=33',
};
