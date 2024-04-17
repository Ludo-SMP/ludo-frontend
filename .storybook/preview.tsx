import type { Preview } from '@storybook/react';
import ReactQueryProvider from '@/Providers/QueryProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/Styles/theme';
import { GlobalStyle } from '@/Styles/globalStyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </ReactQueryProvider>
    ),
  ],
};

export default preview;
