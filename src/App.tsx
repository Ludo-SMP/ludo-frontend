import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <RouterProvider router={RouterPath} />
        </MainLayout>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
