import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      white1: string;
      white2: string;
      black: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      baseBlackAlpha10: string;
      baseBlackAlpha85: string;
      baseBlackAlpha45: string;
      backgroundBgSurface: string;
      fontTextMuted: string;
      fontTextActive: string;
    };

    font: {
      xxsmall: string;
      xsmall: string;
      small: string;
      small1: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
  }

  const mediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

  export const device = {
    custom: mediaQuery,
    mobile: mediaQuery(680),
    tablet: mediaQuery(1024),
    desktop: mediaQuery(1920),
  };

  export const theme: DefaultTheme = {
    color,
    font,
  };
}
