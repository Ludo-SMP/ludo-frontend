import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Router>
            <Header />
          </Router>
          <RouterProvider router={RouterPath} />
          <Footer />
        </MainLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
