import type { Preview } from '@storybook/react';
import ReactQueryProvider from '@/Providers/QueryProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/Styles/theme';
import { GlobalStyle } from '@/Styles/globalStyles';
import { withRouter } from 'storybook-addon-remix-react-router';
import { handlers } from '../src/Mocks/handlers';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize(
  {
    onUnhandledRequest: 'bypass',
  },
  handlers,
);

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Intro', 'Colors', 'Typography', 'Iconography'],
      },
    },
    layout: 'centered',
    docs: {
      toc: true,
      canvas: {
        sourceState: 'shown',
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
    withRouter,
  ],
  loaders: [mswLoader],
} satisfies Preview;
