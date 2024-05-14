// theme.ts
import { DefaultTheme, css } from 'styled-components';

export const color = {
  white: '#ffffff',
  white1: '#D8D8D8',
  white2: '#FCFCFC',
  black: '#000000',
  black0: 'rgba(0, 0, 0, 0.05)',
  black1: 'rgba(0, 0, 0, 0.10)',
  black2: 'rgba(0, 0, 0, 0.45)',
  black3: 'rgba(0, 0, 0, 0.65)',
  black4: `rgba(0, 0, 0, 0.85)`,
  black5: `rgba(0, 0, 0, 0.95)`,
  gray1: '#F2F2F2',
  gray2: '#D9D9D9',
  gray3: '#262D31',
  gray4: '#858585',
  gray5: '#BCC0C4',
  purple1: '#9F99E5',
  purple2: '#EFECFF',
  purple3: '#807dcc',
  purple4: '#807dcc',
  purple5: '#7170BF',
  purple6: '#908bd9',
  orange1: '#E37756',
  orange2: '#F79D7E',
  orange3: '#F7A477',
  orange4: '#DE723A',
  naver: '#03CF5D',
  kakao: '#FEE500',
  kakaoFontColor: '#521010',
  negative: '#FD3D51',
  strokeDividerThick: '#F2F3F3',
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

export const buttonSize = {
  normal: 'auto',
  fullWidth: '100%',
};

const mediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: mediaQuery,
  mobile: mediaQuery(500),
  tablet: mediaQuery(1024),
  desktop: mediaQuery(1440),
};

const borderRadius = {
  small: '8px',
  medium: '20px',
  large: '24px',
  xlarge: '999px',
};

export const theme: DefaultTheme = {
  color,
  font,
  media,
  borderRadius,
  buttonSize,
};

export const textEllipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
