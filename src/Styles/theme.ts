import { DefaultTheme } from 'styled-components';

export const color = {
  white: '#ffffff',
  white1: '#f2f3f3',
  white2: '#D8D8D8',
  black: '#000000',
  gray1: '#F2F3F3',
  gray2: '#D9D9D9',
  gray3: '#262D31',
  gray4: '#858585',
  baseBlackAlpha10: 'rgba(0, 0, 0, 0.10))',
  baseBlackAlpha45: 'rgba(0, 0, 0, 0.45)',
  baseBlackAlpha65: 'rgba(0, 0, 0, 0.65)',
  baseBlackAlpha85: `rgba(0, 0, 0, 0.85)`,
  backgroundBgSurface: '#FFF',
  fontTextMuted: 'rgba(0, 0, 0, 0.45)',
  fontTextActive: `rgba(0, 0, 0, 0.85)`,
};

export const font = {
  xxsmall: '0.5rem',
  xsmall: '0.75rem',
  small1: '18px',
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
  xlarge: '1.75rem',
  xxlarge: '2rem',
  xxxlarge: '2.5rem',
  xxxxlarge: '3rem',
};

const mediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const device = {
  custom: mediaQuery,
  mobile: mediaQuery(768),
  tablet: mediaQuery(1024),
  desktop: mediaQuery(1440),
};

export const theme: DefaultTheme = {
  color,
  font,
};
