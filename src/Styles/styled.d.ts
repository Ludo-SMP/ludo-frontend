import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      white1: string;
      black: string;
      black0: string;
      black1: string;
      black2: string;
      black3: string;
      black4: string;
      black5: string;
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
      purple6: string;
      orange1: string;
      orange2: string;
      orange3: string;
      orange4: string;
      naver: string;
      kakao: string;
      kakaoFontColor: string;
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
    buttonSize: {
      small: string;
      medium: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }

  const mediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

  export const device = {
    custom: (maxwidth: number) => mediaQuery(maxwidth),
    mobile: mediaQuery(500),
    tablet: mediaQuery(1024),
    desktop: mediaQuery(1920),
  };

  export const theme: DefaultTheme = {
    color,
    font,
    media,
    borderRadius,
    buttonSize,
  };
}
