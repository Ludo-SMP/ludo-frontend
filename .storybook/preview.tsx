import type { Preview } from '@storybook/react';
import ReactQueryProvider from '../src/Providers/QueryProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Styles/theme';
import { GlobalStyle } from '../src//Styles/globalStyles';
import { withRouter } from 'storybook-addon-remix-react-router';
import { handlers } from '../src/Mocks/handlers';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/App.css';

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
