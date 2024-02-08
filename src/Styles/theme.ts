// theme.ts
import { DefaultTheme } from 'styled-components';

export const color = {
  white: '#ffffff',
  white1: '#D8D8D8',
  black: '#000000',
  black1: 'rgba(0, 0, 0, 0.10)',
  black2: 'rgba(0, 0, 0, 0.45)',
  black3: 'rgba(0, 0, 0, 0.65)',
  black4: `rgba(0, 0, 0, 0.85)`,
  gray1: '#F2F3F3',
  gray2: '#D9D9D9',
  gray3: '#262D31',
  gray4: '#858585',
  gray5: '#BCC0C4',
  purple1: '#9F99E5',
  purple2: '#EFECFF',
  purple3: '#807dcc',
  purple4: '#807dcc',
  purple5: '#7170BF',
  orange1: '#E37756',
  orange2: '#F79D7E',
};

export const font = {
  xxxsmall: '8px',
  xxsmall: '12px',
  xsmall: '14px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '28px',
  xxlarge: '32px',
  xxxlarge: '36px',
  xxxxlarge: '40px',
};

export const Buttonsize = {
  small: '73px',
  medium: '184px',
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
  buttonsize: {
    small: '73px',
    medium: '184px',
  },
};
