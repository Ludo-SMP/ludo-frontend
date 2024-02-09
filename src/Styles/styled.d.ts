import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      white1: string;
      black: string;
      black1: string;
      black2: string;
      black3: string;
      black4: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      purple1: string;
      purple2: string;
      purple3: string;
      purple4: string;
      purple5: string;
      orange1: string;
      orange2: string;
    };

    font: {
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
      xxxxlarge: string;
    };
    buttonsize: {
      small: string;
      medium: string;
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
    buttonsize,
  };
}
