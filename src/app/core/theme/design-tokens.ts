/**
 * GenAI-Professional-Dark design system — source of truth mirrors global CSS variables in styles.scss
 */
export const DESIGN_TOKENS = {
  themeName: 'GenAI-Professional-Dark',
  colorPalette: {
    background: {
      primary: '#000000',
      secondary: '#0B1114',
      surface: '#151B1E',
      glass: 'rgba(25, 30, 35, 0.65)',
    },
    accents: {
      primary: '#2EC866',
      primaryGlow: 'rgba(46, 200, 102, 0.15)',
      textHighContrast: '#FFFFFF',
      textMuted: '#878E99',
      border: '#2D333B',
    },
    gradients: {
      heroGlow: 'radial-gradient(circle at 50% -20%, #1A3A2A 0%, #000000 70%)',
      button: 'linear-gradient(90deg, #2EC866 0%, #25A352 100%)',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    headings: { weight: '700', letterSpacing: '-0.02em' },
    body: { weight: '400', lineHeight: '1.6' },
  },
  visualEffects: {
    borderRadius: { card: '16px', button: '8px', tag: '4px' },
    shadows: {
      soft: '0 8px 32px rgba(0, 0, 0, 0.4)',
      glow: '0 0 20px rgba(46, 200, 102, 0.2)',
    },
    blur: '12px',
  },
  sectionSpecs: {
    nav: { style: 'Floating Glassmorphism', sticky: true },
    hero: {
      alignment: 'Center',
      headlineStyle: 'Extra Bold with Gradient Span',
      ctaStyle: 'Solid Green with Glow',
    },
    cards: {
      background: 'Surface',
      border: '1px solid #2D333B',
      hoverEffect: 'Scale 1.02 + Border Highlight',
    },
  },
} as const;
