import type { Preview } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactQueryProvider from '@/Providers/QueryProvider';

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
        <Story />
      </ReactQueryProvider>
    ),
  ],
};

export default preview;
