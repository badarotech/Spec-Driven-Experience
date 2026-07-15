/**
 * Tokens do Design System (SDX) como objeto TypeScript.
 * Espelha tokens.css para uso em logica de componentes,
 * temas do Ant Design ou estilos inline.
 * Origem: spotify-react-web-client.
 */
export const tokens = {
  color: {
    background: {
      base: '#121212',
      elevated: '#1f1f1f',
      highlight: '#2a2a2a',
      press: '#000000',
    },
    text: {
      primary: '#ffffff',
      subdued: '#b3b3b3',
      onBright: '#000000',
      brand: '#1ed760',
    },
    brand: '#1ed760',
    brandPress: '#1db954',
    negative: '#f15e6c',
    white: '#ffffff',
    black: '#000000',
    borderSubtle: 'rgba(255, 255, 255, 0.2)',
    borderStrong: 'rgba(255, 255, 255, 0.4)',
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  font: {
    familyTitle: "'SpotifyMixUITitle', 'CircularSp', sans-serif",
    familyBody: "'SpotifyMixUI', 'CircularSp', sans-serif",
    size: {
      '2xs': 11,
      xs: 12,
      sm: 13,
      md: 14,
      lg: 16,
      xl: 24,
      '2xl': 32,
    },
    weight: { regular: 400, bold: 700, extrabold: 800 },
  },
  space: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32 },
  radius: { sm: 4, md: 8, lg: 10, pill: 500, circle: '50%' },
  shadow: {
    fab: '0 8px 16px rgba(0, 0, 0, 0.5)',
    card: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
  size: {
    avatar: { xs: 16, sm: 24, md: 32, lg: 48 },
    cover: { sm: 40, md: 48 },
    playButton: 56,
  },
  duration: { fast: '0.1s', base: '0.3s' },
} as const;

export type Tokens = typeof tokens;
export default tokens;
