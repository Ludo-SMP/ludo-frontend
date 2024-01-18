import { DefaultTheme } from 'styled-components';

export const color = {
  white: '#ffffff',
  white1: '#f2f3f3',
  black: '#000000',
  gray1: '#F2F3F3',
  gray2: '#D9D9D9',
  gray3: '#262D31',
  gray4: '#858585',
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
  xxxlarge: '3rem',
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
